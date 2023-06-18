import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, colors } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IAnswer, IQuestion } from "../data/questions";
import _ from "lodash";

interface IQuestionPopup {
  open: boolean;
  question: IQuestion;
  prize: string;
  handleQuizEnd: (success: boolean) => void;
  handleCancel: () => void;
}

const QuestionPopup: FC<IQuestionPopup> = ({
  open,
  question,
  prize,
  handleQuizEnd,
  handleCancel
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [shuffledAnswers, setShuffledAnswers] = useState<IAnswer[]>([]);

  useEffect(() => {
    if (open) {
      setSelectedAnswer("");
      setShuffledAnswers(_.shuffle(question.answers));
    }
  }, [open]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer((event.target as HTMLInputElement).value);
  };

  const handleClose = (event: object, reason: string) => {
    if (reason === "backdropClick") {
      return;
    }

    handleCancel();
  };

  const onSubmitHandler = () => {
    const isCorrect = Number(selectedAnswer) === question.answerId;
    handleQuizEnd(isCorrect);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      PaperProps={{
        style: {
          backgroundColor: colors.common.black,
          color: colors.common.white,
        },
      }}>
      <DialogTitle>Answer the question to win a {prize}!</DialogTitle>
      <DialogContent>
        <DialogContentText variant="h6" py={2} color={colors.common.white}>
          {question.text}
        </DialogContentText>
        <FormControl>
          <RadioGroup
            name="answers-group"
            value={selectedAnswer}
            onChange={handleChange}
          >
            {
              shuffledAnswers.map((answer: IAnswer) =>
                <FormControlLabel
                  key={answer.id}
                  value={answer.id}
                  control={<Radio />}
                  label={answer.text} />
              )
            }
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={onSubmitHandler}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default QuestionPopup;