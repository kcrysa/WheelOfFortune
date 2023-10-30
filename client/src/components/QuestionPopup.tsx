import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  colors,
  styled,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import _ from "lodash";
import { FC, useEffect, useState } from "react";
import { IAnswer } from "../models/Answer";
import { IQuestion } from "../models/Question";
import { CloseIcon } from "./CloseIcon";

interface IQuestionPopup {
  open: boolean;
  question: IQuestion;
  handleQuizEnd: (success: boolean, answerId: number) => void;
  handleCancel: () => void;
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
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
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setSelectedAnswer("");
      setIsSubmitted(false);
      setShuffledAnswers(_.shuffle(question.answers));
    }
  }, [open, question.answers]);

  const handleModalClose = (event: {}, reason: string) => {
    if (reason === "backdropClick") {
      return;
    }
    handleCancel();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer((event.target as HTMLInputElement).value);
  };

  const handleContinue = () => {
    const answerId: number = Number(selectedAnswer);
    const isCorrect = answerId === question.answerId;

    handleQuizEnd(isCorrect, answerId);
  };

  return (
    <Dialog
      open={open}
      onClose={handleModalClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        style: {
          backgroundColor: colors.common.black,
          color: colors.common.white,
        },
      }}
      disableEscapeKeyDown
    >
      <DialogTitle>
        <IconButton
          onClick={(event: any) => handleModalClose(event, "closeButton")}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
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
                label={answer.text}
                control={
                  <Radio
                    disabled={isSubmitted}
                    sx={{
                      color:
                        isSubmitted && question.answerId === answer.id
                          ? colors.green[800]
                          : colors.grey[400],
                      "&.Mui-checked": {
                        color:
                          isSubmitted && question.answerId === answer.id
                            ? colors.green[800]
                            : colors.grey[400],
                      },
                      "&.Mui-disabled": {
                        color:
                          isSubmitted && question.answerId === answer.id
                            ? colors.green[300]
                            : colors.grey[700],
                      },
                    }}
                  />
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-around" }}>
        {!isSubmitted ? (
          <ColorButton
            variant="contained"
            size="large"
            className="submit-button"
            onClick={() => setIsSubmitted(true)}
            disabled={selectedAnswer === ""}
          >
            Submit
          </ColorButton>
        ) : (
          <ColorButton
            variant="contained"
            size="large"
            className="submit-button"
            onClick={handleContinue}
          >
            {question.answerId === Number(selectedAnswer)
              ? "Claim your prize"
              : "Continue"}
          </ColorButton>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default QuestionPopup;
