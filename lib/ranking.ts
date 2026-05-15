const NORMALIZE_BASE = 10000;

interface RankInfo {
  rank: string;
  flavor: string;
}

export function getRank(totalScore: number): RankInfo {
  if (totalScore >= NORMALIZE_BASE) {
    return {
      rank: "Professor Oak's Aide",
      flavor: "A perfect score. Oak himself would be speechless.",
    };
  }

  const pct = totalScore / NORMALIZE_BASE;

  if (pct >= 0.95) {
    return {
      rank: "Champion",
      flavor: "One of the finest Trainers in all of Kanto.",
    };
  }
  if (pct >= 0.80) {
    return {
      rank: "Elite Four",
      flavor: "Your knowledge of Kanto rivals the greatest Trainers.",
    };
  }
  if (pct >= 0.60) {
    return {
      rank: "Gym Leader",
      flavor: "Strong regional knowledge. The badges are yours.",
    };
  }
  if (pct >= 0.40) {
    return {
      rank: "Ace Trainer",
      flavor: "A solid Trainer who knows their way around Kanto.",
    };
  }
  if (pct >= 0.20) {
    return {
      rank: "Youngster",
      flavor: "Not bad for a kid. Keep exploring!",
    };
  }
  return {
    rank: "Bug Catcher",
    flavor: "Kanto is a big place. Time to hit the books.",
  };
}
