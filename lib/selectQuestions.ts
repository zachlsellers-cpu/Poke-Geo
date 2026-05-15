import type { Question, Difficulty } from "@/types";
import { questions } from "@/data/questions";

// FNV-1a hash of the date string → deterministic 32-bit seed
function dateToSeed(dateStr: string): number {
  let h = 2166136261;
  for (let i = 0; i < dateStr.length; i++) {
    h ^= dateStr.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// mulberry32 — fast, good-quality seeded PRNG
function makePrng(seed: number): () => number {
  let s = seed;
  return () => {
    s += 0x6d2b79f5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 0x100000000;
  };
}

function seededShuffle<T>(arr: T[], rand: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function todayString(): string {
  return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
}

export function selectQuestions(dateStr: string = todayString()): Question[] {
  const rand = makePrng(dateToSeed(dateStr));
  const tiers: Difficulty[] = [1, 2, 3, 4, 5];
  return tiers.map((difficulty) => {
    const pool = seededShuffle(
      questions.filter((q) => q.difficulty === difficulty),
      rand
    );
    if (pool.length === 0) throw new Error(`No questions for difficulty ${difficulty}`);
    return pool[0];
  });
}
