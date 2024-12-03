import styled from "styled-components";
import Button from "react-bootstrap/Button";

// Container for layout
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

// Add new task button with light theme changes
export const TaskBtn = styled(Button)`
  margin: 20px;
  background-color: ${({ theme }) => theme.id === "light" ? "#FFA500" : theme.canvas} !important; // Orange background for light theme, canvas color for dark
  width: 80%;
  right: 0;
  justify-content: flex-end;
  border: none;
  color: ${({ theme }) => theme.color.primary}; // Text color based on theme
  cursor: pointer; // Ensure the button looks clickable

  @media (min-width: 768px) {
    width: auto;
    margin-right: 20px;
  }
`;

// Date container, styled with primary text color
export const DateContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.primary}; // Primary text color

  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Notification container styled with theme colors
export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  svg {
    color: ${({ theme }) =>
      theme.id === "light" ? "#FFA500" : theme.canvas} !important; // Orange for light theme, canvas color for dark
    margin-left: 10px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;

// Notification icon styled with theme colors
export const NotificationIcon = styled.span`
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Notification badge styled with red background for alerts
export const NotificationBadge = styled.div`
  background-color: red; // Keeping the red background for notifications
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  right: 2px;
`;
