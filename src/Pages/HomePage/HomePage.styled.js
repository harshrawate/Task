import styled from "styled-components";

// Home container styled with background from the theme
export const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
`;

// Main container with flex layout for larger screens
export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

// Header styling with center alignment
export const AppHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

// Center content container with responsiveness for smaller screens
export const CenterContainer = styled.div`
  position: relative;
  display: inline;
  flex-direction: row;
  width: 60%;
  overflow: auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

// Container for tasks, styled for flexible wrapping
export const ContainerTasks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  overflow: auto;
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Section styled for individual blocks within layout
export const Section = styled.div`
  width: 20%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

// Current item styling with uppercase text and theme-based color
export const CurrentItem = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  text-transform: uppercase;
  margin: 20px 0;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

// Shape view styling with flex display and responsive alignment
export const ShapeView = styled.div`
  display: flex;
  left: 0;
  margin: 20px 0 40px 0;
  overflow: auto;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

// Child view styling for both light and dark modes with orange color in light mode
export const ChildView = styled.span`
  padding: 3px;
  color: ${({ theme }) => theme.id === "light" ? "#FF9800" : "#000"};  // Orange color in light mode and default color in dark mode
  cursor: pointer;
  background-color: ${({ theme }) => theme.canvas};

  /* No hover effect in light mode */
  :hover {
    background-color: ${({ theme }) => theme.id === "light" ? theme.canvas : theme.background.viewBtnColor};
  }
`;
