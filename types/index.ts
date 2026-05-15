export type Difficulty = 1 | 2 | 3 | 4 | 5;

export interface Coordinate {
  x: number; // percentage 0-100 of image width
  y: number; // percentage 0-100 of image height
}

export interface Question {
  id: number;
  prompt: string;
  game: string;
  region: "Kanto";
  difficulty: Difficulty;
  category: string;
  answer_location: string;
  coordinates: Coordinate;
  lore_explanation: string;
  off_map?: true;
  map_hint?: string;
}

export interface GuessResult {
  question: Question;
  guess: Coordinate;
  distancePct: number; // Euclidean distance in percentage units
  pointsAwarded: number;
}

export type GamePhase = "idle" | "answering" | "revealing" | "end";

export interface GameState {
  phase: GamePhase;
  currentQuestionIndex: number;
  results: GuessResult[];
  pendingGuess: Coordinate | null;
  sessionQuestions: Question[]; // the 5 selected for this session
}
