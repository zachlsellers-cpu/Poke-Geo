"use client";

import type { GuessResult } from "@/types";

interface Props {
  result: GuessResult;
  questionNumber: number;
  totalQuestions: number;
  onNext: () => void;
  isLastQuestion: boolean;
}

export default function RevealOverlay({
  result,
  questionNumber,
  totalQuestions,
  onNext,
  isLastQuestion,
}: Props) {
  const { question, distancePct, pointsAwarded } = result;
  const isZero = pointsAwarded === 0;
  const isPerfect = distancePct <= 5;

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-slate-400 text-xs mb-1">Correct location</div>
          <div className="text-white font-bold text-lg">{question.answer_location}</div>
        </div>
        <div className="text-right">
          <div
            className={`text-2xl font-bold ${
              isZero ? "text-red-400" : isPerfect ? "text-yellow-400" : "text-white"
            }`}
          >
            +{pointsAwarded.toLocaleString()}
          </div>
          <div className="text-slate-400 text-xs">points</div>
        </div>
      </div>

      <div className="text-slate-400 text-xs">
        Distance:{" "}
        <span className="text-slate-300">{distancePct.toFixed(1)} units</span>
        {isPerfect && (
          <span className="ml-2 text-yellow-400 font-semibold">Perfect!</span>
        )}
      </div>

      <div className="bg-slate-900 rounded p-3 border border-slate-700">
        <div className="text-yellow-400 text-xs font-semibold mb-1 uppercase tracking-wide">
          Lore
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">{question.lore_explanation}</p>
      </div>

      <button
        onClick={onNext}
        className="mt-1 w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-3 rounded-lg transition-colors"
      >
        {isLastQuestion ? "See Results" : `Next Question (${questionNumber + 1}/${totalQuestions})`}
      </button>
    </div>
  );
}
