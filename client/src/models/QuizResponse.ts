export interface IQuizResponse {
  questionNumber: number;
  correctAnswer: number;
  selectedAnswer: number;
  prize: string;
  isCorrect: boolean;
  aborted: boolean;
  date: string;
}