"use client";

import { useReducer, useCallback } from "react";
import type { GameState, Coordinate } from "@/types";
import { selectQuestions } from "@/lib/selectQuestions";
import { calculateDistance, calculateScore } from "@/lib/scoring";

type Action =
  | { type: "SUBMIT_GUESS"; guess: Coordinate }
  | { type: "NEXT_QUESTION" }
  | { type: "RESTART" };

function makeInitialState(): GameState {
  return {
    phase: "answering",
    currentQuestionIndex: 0,
    results: [],
    pendingGuess: null,
    sessionQuestions: selectQuestions(),
  };
}

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "SUBMIT_GUESS": {
      if (state.phase !== "answering") return state;
      const question = state.sessionQuestions[state.currentQuestionIndex];
      const distance = calculateDistance(action.guess, question.coordinates);
      const points = calculateScore(distance, question.difficulty);
      return {
        ...state,
        phase: "revealing",
        pendingGuess: action.guess,
        results: [
          ...state.results,
          {
            question,
            guess: action.guess,
            distancePct: Math.round(distance * 10) / 10,
            pointsAwarded: points,
          },
        ],
      };
    }

    case "NEXT_QUESTION": {
      if (state.phase !== "revealing") return state;
      const isLast = state.currentQuestionIndex >= state.sessionQuestions.length - 1;
      if (isLast) {
        // markPlayedToday() is called in the component when phase becomes "end"
        return { ...state, phase: "end", pendingGuess: null };
      }
      return {
        ...state,
        phase: "answering",
        currentQuestionIndex: state.currentQuestionIndex + 1,
        pendingGuess: null,
      };
    }

    case "RESTART":
      return makeInitialState();

    default:
      return state;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitialState);

  const submitGuess = useCallback((guess: Coordinate) => {
    dispatch({ type: "SUBMIT_GUESS", guess });
  }, []);

  const nextQuestion = useCallback(() => {
    dispatch({ type: "NEXT_QUESTION" });
  }, []);

  const restart = useCallback(() => {
    dispatch({ type: "RESTART" });
  }, []);

  return { state, submitGuess, nextQuestion, restart };
}
