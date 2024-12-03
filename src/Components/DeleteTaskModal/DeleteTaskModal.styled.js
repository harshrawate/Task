import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const ConfirmBtn = styled(Button)`
  background-color: ${({ theme }) => 
    theme.id === 'light' ? theme.canvas : theme.color.primary}; // Visible color for both themes
  color: ${({ theme }) => 
    theme.id === 'light' ? theme.color.primary : theme.color.secondaryText}; // Ensure contrast

  border: none !important;
  
  :hover,
  :focus-visible,
  :focus {
    background-color: ${({ theme }) => 
      theme.id === 'light' ? theme.color.hover : theme.canvas}; // Adjust hover effect
    color: ${({ theme }) => theme.color.secondaryText}; // Maintain contrast on hover
    border: none !important;
    box-shadow: none !important;
  }
`;
