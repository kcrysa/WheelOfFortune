import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  colors,
  styled,
} from "@mui/material";
import _ from "lodash";
import { FC, useEffect, useState } from "react";
import { IAnswer, IQuestion } from "../data/questions";
import { purple } from "@mui/material/colors";

interface IQuestionPopup {
  open: boolean;
  question: IQuestion;
  handleQuizEnd: (success: boolean) => void;
  handleCancel: () => void;
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const QuestionPopup: FC<IQuestionPopup> = ({
  open,
  question,
  handleQuizEnd,
  handleCancel,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [shuffledAnswers, setShuffledAnswers] = useState<IAnswer[]>([]);

  useEffect(() => {
    if (open) {
      setSelectedAnswer("");
      setShuffledAnswers(_.shuffle(question.answers));
    }
  }, [open, question.answers]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer((event.target as HTMLInputElement).value);
  };

  const onSubmitHandler = () => {
    const isCorrect = Number(selectedAnswer) === question.answerId;
    handleQuizEnd(isCorrect);
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      fullWidth
      maxWidth="md"
      PaperProps={{
        style: {
          backgroundColor: colors.common.black,
          color: colors.common.white,
        },
      }}
    >
      <DialogContent>
        <div style={{ fontSize: "1.2em", marginBottom: "20px" }}>
          {question.text}
        </div>
        <FormControl>
          <RadioGroup
            name="answers-group"
            value={selectedAnswer}
            onChange={handleChange}
          >
            {shuffledAnswers.map((answer: IAnswer) => (
              <FormControlLabel
                key={answer.id}
                value={answer.id}
                control={<Radio />}
                label={answer.text}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-around" }}>
        <ColorButton
          variant="contained"
          size="large"
          className="submit-button"
          onClick={onSubmitHandler}
          disabled={selectedAnswer === ""}
        >
          Submit
        </ColorButton>
      </DialogActions>
    </Dialog>
  );
};

export default QuestionPopup;
