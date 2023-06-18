import { Box, Modal, ThemeProvider, Typography, colors, createTheme } from '@mui/material';
import { useState } from 'react';
import './App.css';
import ParticlesContainer from './components/Fireworks';
import QuestionPopup from './components/QuestionPopup';
import Roulette from './components/Roulette';
import { categories } from './data/categories';
import { IQuestion, questions } from './data/questions';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
    setTimeout(() => { setOpen(true); }, 1000)
  };

  const onHandleQuizEnd = (isCorrect: boolean) => {
    setOpen(false);
    setIsCorrectAnswer(isCorrect);
  };

  const handleWinModalClose = (event: {}, reason: 'backdropClick' | 'escapeKeyDown'): void => {
    setIsCorrectAnswer(null);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <Roulette data={categories} showQuestion={onShowQuestionHandler} />
          {question &&
            <QuestionPopup
              open={open}
              question={question}
              prize={prize}
              handleQuizEnd={onHandleQuizEnd}
              handleCancel={() => setOpen(false)}
            />
          }
          {
            isCorrectAnswer !== null && isCorrectAnswer && <ParticlesContainer />
          }
          {
            isCorrectAnswer !== null && (
              <Modal open={isCorrectAnswer !== null} onClose={handleWinModalClose}>
                <Box sx={{
                  position: 'absolute' as 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: colors.common.black,
                  opacity: 0.8,
                  boxShadow: 24,
                  p: 10,
                  textAlign: "center"
                }}>
                  <Typography variant="h6" component="h2" color={colors.common.white}>
                    {isCorrectAnswer ? <>Claim your {prize}!</> : <>Better luck next time!</>}
                  </Typography>
                </Box>
              </Modal>)
          }
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
