import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import QuestionPopup from "./components/QuestionPopup";
import QuizResult from "./components/QuizResult";
import Roulette from "./components/Roulette";
import { categories } from "./data/categories";
import { IQuestion, questions } from "./data/questions";
import logo from "./images/logo.png";
import { useCookies } from "react-cookie";
import LoginPopup from "./components/LoginPopup";

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
  const [loginPopupOpen, setLoginPopupOpen] = useState<boolean>(false);
  const [prize, setPrize] = useState<string>("");
  const [question, setQuestion] = useState<IQuestion>();
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [cookies, setCookie, removeCookie] = useCookies(["username", "token"]);

  useEffect(() => {
    if (cookies.username && cookies.token) {
      setLoginPopupOpen(false);
    } else {
      setLoginPopupOpen(true);
    }
  }, [cookies, cookies.username, cookies.token]);

  const onLoginHandler = (username: string, token: string) => {
    setCookie("username", username, {
      secure: true,
      path: "/",
      maxAge: 100000,
    });
    setCookie("token", token, {
      secure: true,
      path: "/",
      maxAge: 100000,
    });
  };

  const onShowQuestionHandler = (option: string) => {
    const questionNumber = Math.floor(Math.random() * questions.length);

    setPrize(option);
    setQuestion(questions[questionNumber]);
    setQuestionPopupOpen(true);
  };

  const onQuizEndHandler = (isCorrect: boolean) => {
    setQuestionPopupOpen(false);
    setIsCorrectAnswer(isCorrect);
  };

  const onHandleSuccessModalClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ): void => {
    if (isCorrectAnswer) {
    }
    setIsCorrectAnswer(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="content">
        <LoginPopup
          open={loginPopupOpen}
          onLoginCancel={() => setLoginPopupOpen(false)}
          onLoginHandler={onLoginHandler}
        />
        {isCorrectAnswer === null && (
          <Roulette data={categories} showQuestion={onShowQuestionHandler} />
        )}
        {question && (
          <QuestionPopup
            open={questionPopupOpen}
            question={question}
            handleQuizEnd={onQuizEndHandler}
            handleCancel={() => setQuestionPopupOpen(false)}
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
