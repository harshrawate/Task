import styled from "styled-components";
import Toast from "react-bootstrap/Toast";

// Toast container styling with theme-based background and text colors
export const ToastContainer = styled(Toast)`
  position: absolute;
  background-color: ${({ theme }) => theme.id === "light" ? "#fff" : "#343a40"};
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.id === "light" ? "#dcdcdc" : "#495057"};
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
  .toast-header {
    background-color: ${({ theme }) => theme.id === "light" ? "#f1f1f1" : "#495057"};
    color: ${({ theme }) => theme.color.primary};
    font-weight: 600;

    .btn-close {
      color: ${({ theme }) => theme.id === "light" ? "#000" : "#fff"};
      :focus {
        box-shadow: none !important;
      }
    }
  }

  .toast-body {
    background-color: ${({ theme }) => theme.id === "light" ? "#fff" : "#343a40"};
    color: ${({ theme }) => theme.color.primary};
  }
`;
