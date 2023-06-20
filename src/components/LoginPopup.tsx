import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Stack,
  TextField,
  colors,
} from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";

interface ILoginPopup {
  open: boolean;
  onLoginHandler: (username: string, token: string) => void;
  onLoginCancel: () => void;
}

const LoginPopup: FC<ILoginPopup> = ({
  open,
  onLoginHandler,
  onLoginCancel,
}) => {
  const [username, setUsername] = useState<string>("");
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    if (open) {
      setUsername("");
      setToken("");
    }
  }, [open]);

  const onSubmitHandler = () => {
    onLoginHandler(username, token);
  };

  const onCloseHandler = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ): void => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      return;
    }
    onLoginCancel();
  };

  return (
    <Dialog
      open={open}
      onClose={onCloseHandler}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          backgroundColor: colors.common.black,
          color: colors.common.white,
        },
      }}
    >
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <FormControl variant="outlined" sx={{ paddingY: 2 }}>
            <TextField
              fullWidth
              value={username}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setUsername(event.target.value)
              }
              label="Username"
              type="text"
            />
          </FormControl>
          <FormControl variant="outlined">
            <TextField
              fullWidth
              value={token}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setToken(event.target.value)
              }
              label="Token"
              type="password"
            />
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-around" }}>
        <Button
          variant="contained"
          size="large"
          className="submit-button"
          onClick={onSubmitHandler}
          disabled={username === "" || token === ""}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginPopup;
