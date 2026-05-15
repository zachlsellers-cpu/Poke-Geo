"use client";

import { useEffect, useState } from "react";
import { useGameState } from "@/lib/useGameState";
import MapCanvas from "@/components/MapCanvas";
import QuestionCard from "@/components/QuestionCard";
import RevealOverlay from "@/components/RevealOverlay";
import EndScreen from "@/components/EndScreen";
import { hasPlayedToday, markPlayedToday, timeUntilReset } from "@/lib/dailyLimit";
import { useRouter, useSearchParams } from "next/navigation";

const TOTAL_QUESTIONS = 5;

function AlreadyPlayedScreen({ resetIn }: { resetIn: string }) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-center flex flex-col gap-5">
        <div>
          <div className="text-5xl mb-3">🌙</div>
          <h2 className="text-white text-2xl font-bold mb-2">Come back tomorrow</h2>
          <p className="text-slate-400 text-sm">
            You've already completed today's round. New questions reset in{" "}
            <span className="text-yellow-400 font-semibold">{resetIn}</span>.
          </p>
        </div>
        <button
          onClick={() => router.push("/")}
          className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default function PlayPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const calibrating = searchParams.get("calibrate") === "1";

  const [playedToday, setPlayedToday] = useState(false);
  const [resetIn, setResetIn] = useState("");
  const [checked, setChecked] = useState(false);

  const { state, submitGuess, nextQuestion, restart } = useGameState();
  const { phase, currentQuestionIndex, results, pendingGuess, sessionQuestions } = state;

  // Check daily limit on mount (client-only)
  useEffect(() => {
    if (calibrating) { setChecked(true); return; }
    if (hasPlayedToday()) {
      setPlayedToday(true);
      setResetIn(timeUntilReset());
    }
    setChecked(true);
  }, [calibrating]);

  // Mark played when game ends
  useEffect(() => {
    if (phase === "end") markPlayedToday();
  }, [phase]);

  // Update countdown every minute
  useEffect(() => {
    if (!playedToday) return;
    const id = setInterval(() => setResetIn(timeUntilReset()), 60000);
    return () => clearInterval(id);
  }, [playedToday]);

  if (!checked) return null; // avoid flash before localStorage is read

  if (playedToday && !calibrating) {
    return <AlreadyPlayedScreen resetIn={resetIn} />;
  }

  if (phase === "end") {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col">
        <header className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center">
          <span className="text-yellow-400 font-bold text-lg">PokéGeo</span>
        </header>
        <EndScreen results={results} onPlayAgain={restart} />
      </div>
    );
  }

  const currentQuestion = sessionQuestions[currentQuestionIndex];
  const currentResult = phase === "revealing" ? results[results.length - 1] : null;
  const isLastQuestion = currentQuestionIndex === TOTAL_QUESTIONS - 1;
  const totalScore = results.reduce((sum, r) => sum + r.pointsAwarded, 0);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <header className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => router.push("/")}
          className="text-yellow-400 font-bold text-lg hover:text-yellow-300 transition-colors"
        >
          PokéGeo
        </button>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-slate-400">
            Score: <span className="text-white font-semibold">{totalScore.toLocaleString()}</span>
          </span>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row gap-4 p-4 max-w-6xl mx-auto w-full">
        <div className="flex-1 min-w-0">
          {calibrating && (
            <div className="mb-2 px-3 py-2 bg-yellow-400 text-slate-900 text-xs font-bold rounded">
              CALIBRATION MODE — hover to read coords, click to pin. Visit /play to exit.
            </div>
          )}
          <MapCanvas
            guessCoord={pendingGuess}
            answerCoord={currentResult ? currentResult.question.coordinates : null}
            onGuess={submitGuess}
            disabled={phase === "revealing"}
            calibrating={calibrating}
          />
        </div>

        <div className="w-full lg:w-80 flex flex-col gap-4">
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={TOTAL_QUESTIONS}
          />
          {phase === "revealing" && currentResult && (
            <RevealOverlay
              result={currentResult}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={TOTAL_QUESTIONS}
              onNext={nextQuestion}
              isLastQuestion={isLastQuestion}
            />
          )}
        </div>
      </main>
    </div>
  );
}
