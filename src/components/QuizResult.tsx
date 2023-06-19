import { Box, Modal, Typography, colors } from "@mui/material";
import { FC } from "react";
import ParticlesContainer from "./Fireworks";

interface IQuizResult {
  isSuccess: boolean;
  prize: string;
  handleModalClose: (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => void;
}

const QuizResult: FC<IQuizResult> = ({
  isSuccess,
  prize,
  handleModalClose,
}) => {
  return (
    <>
      {isSuccess && <ParticlesContainer />}
      <Modal open={true} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#451a3b",
            opacity: 0.8,
            boxShadow: 24,
            borderRadius: "3em",
            border: "3px solid rgba(50,50,50,0.6)",
            p: 10,
            textAlign: "center",
          }}
        >
          <Typography variant="h2" component="h2" color={colors.common.white}>
            {isSuccess ? <>Claim your {prize}!</> : <>Better luck next time!</>}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default QuizResult;
