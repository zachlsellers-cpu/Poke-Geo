"use client";

import type { Question } from "@/types";

interface Props {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
}

const DIFFICULTY_LABELS: Record<number, string> = {
  1: "Easy",
  2: "Medium",
  3: "Hard",
  4: "Expert",
  5: "Brutal",
};

const DIFFICULTY_COLORS: Record<number, string> = {
  1: "bg-green-700 text-green-100",
  2: "bg-blue-700 text-blue-100",
  3: "bg-yellow-600 text-yellow-100",
  4: "bg-orange-600 text-orange-100",
  5: "bg-red-700 text-red-100",
};

export default function QuestionCard({ question, questionNumber, totalQuestions }: Props) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="text-slate-400 text-sm font-medium">
          Question {questionNumber} / {totalQuestions}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-xs border border-slate-600 rounded px-2 py-0.5">
            {question.game}
          </span>
          <span
            className={`text-xs rounded px-2 py-0.5 font-semibold ${DIFFICULTY_COLORS[question.difficulty]}`}
          >
            {DIFFICULTY_LABELS[question.difficulty]}
          </span>
        </div>
      </div>
      <p className="text-white text-base leading-relaxed">{question.prompt}</p>
      {question.off_map ? (
        <p className="text-yellow-400 text-xs border border-yellow-400/30 bg-yellow-400/10 rounded px-2 py-1.5 leading-relaxed">
          {question.map_hint ?? "This location is not on the main Kanto map — its pin is anchored to a fixed spot."}
        </p>
      ) : (
        <p className="text-slate-400 text-xs italic">Click the map to place your guess.</p>
      )}
    </div>
  );
}
