"use client";

import { useRouter } from "next/navigation";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center flex flex-col gap-6">
        <div>
          <h1 className="text-yellow-400 text-5xl font-bold tracking-tight mb-2">PokéGeo</h1>
          <p className="text-slate-300 text-lg">
            How well do you know the Kanto region?
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 text-left flex flex-col gap-3">
          <h2 className="text-white font-semibold text-base">How to play</h2>
          <ul className="text-slate-300 text-sm space-y-2">
            <li>• You'll get 5 questions about Pokémon lore and locations.</li>
            <li>• Click the Kanto map to place your guess.</li>
            <li>• Closer guesses earn more points — up to 2,000 per question.</li>
            <li>• Harder questions carry a score multiplier.</li>
            <li>• Your final rank is based on your total score.</li>
          </ul>
        </div>

        <button
          onClick={() => router.push("/play")}
          className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-4 rounded-lg text-lg transition-colors"
        >
          Start Game
        </button>

        <p className="text-slate-500 text-xs">
          Covers Kanto — Red, Blue, Yellow, FireRed, LeafGreen, and Let's Go.
        </p>
      </div>
    </div>
  );
}
