import { IAnswer } from "./Answer";

export interface IQuestion {
  id: number;
  text: React.ReactNode;
  answers: IAnswer[];
  answerId: number;
}
