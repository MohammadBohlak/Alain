import { Toast } from "react-bootstrap";
import { StyledToast } from "./toastNotification.styles";

const ToastNotification = ({ show, onClose, message, variant }) => {
  return (
    <StyledToast
      show={show}
      onClose={onClose}
      autohide
      delay={3000}
      bg={variant}
    >
      <Toast.Header>
        <strong>{variant === "success" ? "نجاح" : "خطأ"}</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </StyledToast>
  );
};

export default ToastNotification;
