/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ToastMessage } from "../../contexts/Toast/index";
import { Container } from "./styles";
import { Toast } from "./Toast";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((item) => (
        <Toast message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
