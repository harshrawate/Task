import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { CiSearch } from "react-icons/ci";

// Input container with dynamic width based on screen size
export const InputSearchContainer = styled(Form)`
  margin: 20px;
  position: relative;
  display: inline-block;
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 45%;
  }

  .form-control {
    :focus {
      box-shadow: none !important;
    }
    :hover {
      border-color: ${({ theme }) => theme.id === "light" ? "#FF8A00" : "#c0c0fa"};
    }
    background-color: ${({ theme }) => theme.id === "light" ? theme.background.primary : "#fff"}; // White background for dark mode
    color: ${({ theme }) => theme.color.primary}; // Adjust text color based on theme
    border-color: ${({ theme }) => theme.id === "light" ? theme.background.secondary : "#fff"}; // Keep the border white in dark mode
  }
`;

// Styled search icon with dynamic color based on theme
export const StyledSearchIcon = styled(CiSearch)`
  color: ${({ theme }) => theme.id === "light" ? theme.color.primary : "#000"}; // Black icon color for dark mode
  position: absolute;
  right: 0;
  top: 0;
  margin: 7px;
`;
