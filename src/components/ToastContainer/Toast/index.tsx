import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import { ToastMessage } from "../../../contexts/Toast";

interface ToastProps {
  message: ToastMessage;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function Toast({ message }: ToastProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={message.type}>
        {message.description}
      </Alert>
    </Snackbar>
  );
}
