import { Toast } from "react-bootstrap";
import styled from "styled-components";
export const StyledToast = styled(Toast)`
  .toast-header {
    font-size: 2rem;
    direction: rtl;
    display: flex;
    justify-content: space-between;
  }
  .toast-body {
    font-size: 2rem;
    color: white;
  }
`;
