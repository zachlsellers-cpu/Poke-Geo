import type { Coordinate, Difficulty } from "@/types";

export function calculateDistance(a: Coordinate, b: Coordinate): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function calculateScore(distance: number, difficulty: Difficulty): number {
  const multiplier = 1 + (difficulty - 1) * 0.2;
  const baseScore =
    distance <= 5
      ? 2000
      : distance <= 30
      ? Math.round(2000 * (1 - (distance - 5) / 25))
      : 0;
  return Math.round(baseScore * multiplier);
}
