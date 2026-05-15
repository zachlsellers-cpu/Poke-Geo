"use client";

import { useState } from "react";
import { getRank } from "@/lib/ranking";
import { timeUntilReset } from "@/lib/dailyLimit";
import type { GuessResult } from "@/types";

interface Props {
  results: GuessResult[];
  onPlayAgain: () => void;
}

function resultDot(r: GuessResult): string {
  const max = Math.round(2000 * (1 + (r.question.difficulty - 1) * 0.2));
  const pct = r.pointsAwarded / max;
  if (pct > 0.5) return "🟢";
  if (pct > 0) return "🟡";
  return "🔴";
}

export default function EndScreen({ results, onPlayAgain }: Props) {
  const [copied, setCopied] = useState(false);
  const totalScore = results.reduce((sum, r) => sum + r.pointsAwarded, 0);
  const { rank, flavor } = getRank(totalScore);
  const maxPossible = 10000;
  const pct = Math.min(100, Math.round((totalScore / maxPossible) * 100));

  function handleShare() {
    const date = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" });
    const dots = results.map(resultDot).join("");
    const host = typeof window !== "undefined" ? window.location.host : "pokegeo.vercel.app";
    const text = `PokéGeo · ${date}\n${rank} ${dots}\n${totalScore.toLocaleString()} / ${maxPossible.toLocaleString()}\n${host}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex flex-col items-center gap-6 py-8 px-4 max-w-lg mx-auto">
      <div className="text-center">
        <div className="text-slate-400 text-sm mb-1 uppercase tracking-widest">Your Rank</div>
        <div className="text-yellow-400 text-3xl font-bold mb-1">{rank}</div>
        <div className="text-slate-300 text-sm italic">{flavor}</div>
      </div>

      <div className="text-center">
        <div className="text-white text-5xl font-bold">{totalScore.toLocaleString()}</div>
        <div className="text-slate-400 text-sm mt-1">out of {maxPossible.toLocaleString()} pts</div>
        <div className="mt-2 w-48 h-2 bg-slate-700 rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-yellow-400 rounded-full transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="w-full bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
        <div className="px-4 py-2 bg-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wide">
          Round Summary
        </div>
        {results.map((r, i) => (
          <div
            key={r.question.id}
            className="flex items-center justify-between px-4 py-3 border-b border-slate-700 last:border-0"
          >
            <div>
              <div className="text-white text-sm font-medium">{r.question.answer_location}</div>
              <div className="text-slate-400 text-xs">
                Diff {r.question.difficulty} · {r.distancePct.toFixed(1)} units off
              </div>
            </div>
            <div
              className={`text-sm font-bold ${
                r.pointsAwarded === 0 ? "text-red-400" : "text-yellow-400"
              }`}
            >
              +{r.pointsAwarded.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleShare}
        className="w-full py-3 rounded-lg font-semibold text-sm transition-colors bg-yellow-400 hover:bg-yellow-300 text-slate-900"
      >
        {copied ? "Copied to clipboard!" : "Share Results"}
      </button>

      <div className="w-full text-center text-slate-400 text-sm py-3 border border-slate-700 rounded-lg">
        Come back in <span className="text-yellow-400 font-semibold">{timeUntilReset()}</span> for tomorrow's questions.
      </div>
    </div>
  );
}
