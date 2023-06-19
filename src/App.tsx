import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import "./App.css";
import QuestionPopup from "./components/QuestionPopup";
import QuizResult from "./components/QuizResult";
import Roulette from "./components/Roulette";
import { categories } from "./data/categories";
import { IQuestion, questions } from "./data/questions";
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
  const [open, setOpen] = useState<boolean>(false);
  const [prize, setPrize] = useState<string>("");
  const [question, setQuestion] = useState<IQuestion>();
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  const onShowQuestionHandler = (option: string) => {
    const questionNumber = Math.floor(Math.random() * questions.length);

    setPrize(option);
    setQuestion(questions[questionNumber]);
    setOpen(true);
  };

  const onHandleQuizEnd = (isCorrect: boolean) => {
    setOpen(false);
    setIsCorrectAnswer(isCorrect);
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
            open={open}
            question={question}
            handleQuizEnd={onHandleQuizEnd}
            handleCancel={() => setOpen(false)}
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
