import { ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useState } from "react";
import "./App.css";
import QuestionPopup from "./components/QuestionPopup";
import QuizResult from "./components/QuizResult";
import Roulette from "./components/Roulette";
import { categories } from "./data/categories";
import { IQuestion, IQuizResponse, questions } from "./data/questions";
import logo from "./images/logo.png";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "VodafoneRg",
  },
});

function App() {
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
  };

  const onQuizCancel = async() => {
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

  const onHandleSuccessModalClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ): void => {
    setIsCorrectAnswer(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
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
            isSuccess={isCorrectAnswer}
            prize={prize}
            handleModalClose={onHandleSuccessModalClose}
          />
        )}
        <img src={logo} alt="" className="logo" />
      </div>
    </ThemeProvider>
  );
}

export default App;
