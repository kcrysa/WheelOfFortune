import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import "../App.css";
import { ICategory, categories } from "../data/categories";
import { questions } from "../data/questions";
import logo from "../images/logo.png";
import { IQuestion } from "../models/Question";
import { IQuizResponse } from "../models/QuizResponse";
import QuestionPopup from "./QuestionPopup";
import QuizResult from "./QuizResult";
import Roulette from "./Roulette";
import { IPrize } from "../models/Prize";

const Quiz: React.FC = () => {
  const [questionPopupOpen, setQuestionPopupOpen] = useState<boolean>(false);
  const [prize, setPrize] = useState<string>("");
  const [question, setQuestion] = useState<IQuestion | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);

  useEffect(() => {
    getPrizes();
  }, []);

  const getPrizes = async () => {
    const { data } = await axios.get("/api/prizes");

    setAvailableCategories(
      Array.from(
        new Set(
          data
            .filter(
              (prize: IPrize) =>
                prize.date === moment().format("DD.MM.YYYY") &&
                prize.quantity > 0
            )
            .map((prize: IPrize) => prize.name)
        )
      )
    );
  };

  const onShowQuestionHandler = (option: string) => {
    const questionNumber = Math.floor(Math.random() * questions.length);

    setPrize(option);
    setQuestion(questions[questionNumber]);
    setQuestionPopupOpen(true);
  };

  const onQuizEndHandler = async (isCorrect: boolean, answerId: number) => {
    const quizResponse: IQuizResponse = {
      questionNumber: question!.id,
      correctAnswer: question!.answerId,
      selectedAnswer: answerId,
      prize: prize,
      isCorrect: isCorrect,
      aborted: false,
      date: moment().format("DD.MM.YYYY HH:mm:ss"),
    };
    await axios.post("/api/responses", quizResponse);

    setQuestionPopupOpen(false);
    setQuestion(null);
    setIsCorrectAnswer(isCorrect);

    setTimeout(() => {
      setIsCorrectAnswer(null);
      getPrizes();
    }, 8000);
  };

  const onQuizCancel = async () => {
    const quizResponse: IQuizResponse = {
      questionNumber: question!.id,
      correctAnswer: question!.answerId,
      selectedAnswer: 0,
      prize: prize,
      isCorrect: false,
      aborted: true,
      date: moment().format("DD.MM.YYYY HH:mm:ss"),
    };
    await axios.post("/api/responses", quizResponse);

    setQuestionPopupOpen(false);
    setQuestion(null);
  };

  return (
    <div className="content">
      {isCorrectAnswer === null && availableCategories.length > 0 && (
        <Roulette
          data={categories.filter(
            (x: ICategory) => availableCategories.indexOf(x.option!) >= 0
          )}
          showQuestion={onShowQuestionHandler}
        />
      )}
      {question && (
        <QuestionPopup
          open={questionPopupOpen}
          question={question}
          handleQuizEnd={onQuizEndHandler}
          handleCancel={onQuizCancel}
        />
      )}
      {isCorrectAnswer !== null && (
        <QuizResult isCorrectAnswer={isCorrectAnswer} prize={prize} />
      )}
      <img src={logo} alt="" className="logo" />
    </div>
  );
};

export default Quiz;
