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
import {
  BRANCH_NAME,
  FILE_NAME,
  REPOSITORY_NAME,
  apiGet,
  apiPost,
} from "./utils/githubApi";

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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [prize, setPrize] = useState<string>("");
  const [question, setQuestion] = useState<IQuestion>();
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  // const [cookies, setCookie, removeCookie] = useCookies(["username", "token", "fileNumber"]);

  // useEffect(() => {
  //   if (cookies.username && cookies.token) {
  //     setIsAuthenticated(true);
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  // }, [cookies, cookies.username, cookies.token]);

  // const onLoginHandler = (
  //   username: string,
  //   token: string,
  //   fileNumber: number
  // ) => {
  //   setCookie("username", username, {
  //     secure: true,
  //     path: "/",
  //     maxAge: 100000,
  //   });
  //   setCookie("token", token, {
  //     secure: true,
  //     path: "/",
  //     maxAge: 100000,
  //   });
  //   setCookie("fileNumber", fileNumber, {
  //     secure: true,
  //     path: "/",
  //     maxAge: 100000,
  //   });

  //   apiGet(
  //     username,
  //     REPOSITORY_NAME,
  //     BRANCH_NAME,
  //     FILE_NAME(fileNumber),
  //     (err: any, res: any) => {
  //       if (res === null || res === undefined || res === "" || err) {
  //         removeCookie("username");
  //         removeCookie("token");
  //         removeCookie("fileNumber");
  //         setIsAuthenticated(false);
  //       }
  //     }
  //   );
  // };

  const onShowQuestionHandler = (option: string) => {
    const questionNumber = Math.floor(Math.random() * questions.length);

    setPrize(option);
    setQuestion(questions[questionNumber]);
    setQuestionPopupOpen(true);
  };

  const onQuizEndHandler = (isCorrect: boolean, answerId: number) => {
    setQuestionPopupOpen(false);
    setIsCorrectAnswer(isCorrect);

    // const interaction = {
    //   questionId: question?.id,
    //   answerId: answerId,
    //   isCorrect: isCorrect,
    //   date: new Date().toLocaleString(),
    //   prize: prize,
    // };

    // apiGet(
    //   cookies.username,
    //   REPOSITORY_NAME,
    //   BRANCH_NAME,
    //   FILE_NAME(cookies.fileNumber),
    //   (err: any, res: any) => {
    //     if (res === null || res === undefined || res === "" || err) {
    //       removeCookie("username");
    //       removeCookie("token");
    //       removeCookie("fileNumber");
    //       setIsAuthenticated(false);
    //       return;
    //     }

    //     apiPost(
    //       cookies.username,
    //       REPOSITORY_NAME,
    //       BRANCH_NAME,
    //       FILE_NAME(cookies.fileNumber),
    //       [...res.content, interaction],
    //       cookies.token,
    //       (err: any, result: any, id: any) => {
    //         if (err) {
    //           console.log(err);
    //         }
    //       }
    //     );
    //   }
    // );
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
        {/* <LoginPopup
          open={!isAuthenticated}
          onLoginCancel={() => setIsAuthenticated(false)}
          onLoginHandler={onLoginHandler}
        /> */}
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
