import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { categories } from "../data/categories";
import { IQuestion, IQuizResponse, questions } from "../data/questions";
import "../App.css";
import QuestionPopup from "./QuestionPopup";
import QuizResult from "./QuizResult";
import Roulette from "./Roulette";
import logo from "../images/logo.png";

const Quiz: React.FC = () => {
  const [questionPopupOpen, setQuestionPopupOpen] = useState<boolean>(false);
  const [prize, setPrize] = useState<string>("");
  const [question, setQuestion] = useState<IQuestion | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

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
      {isCorrectAnswer === null && (
        <Roulette data={categories} showQuestion={onShowQuestionHandler} />
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
        <QuizResult
          isCorrectAnswer={isCorrectAnswer}
          prize={prize}
        />
      )}
      <img src={logo} alt="" className="logo" />
    </div>
  );
};

export default Quiz;
