/**
 * An object containing light theme colors for a website.
 *
 * @typedef {Object} lightTheme
 * @property {string} id - The ID of the theme.
 * @property {string} canvas - The background color of the website.
 * @property {Object} color - The colors of the text on the website.
 * @property {string} color.primary - The primary color of the text on the website.
 * @property {string} color.hover - The color of the text on hover.
 * @property {string} color.muted - The muted color of the text on the website.
 * @property {Object} background - The colors of the backgrounds in the website.
 * @property {string} background.primary - The primary color of the background on the website.
 * @property {string} background.hover - The color of the background on hover.
 * @property {string} background.secondary - The secondary color of the background on the website.
 * @property {string} background.hoverBtnColor - The color of the button on hover.
 * @property {string} background.viewBtnColor - The color of the view button.
 * @property {string} background.iconHoverColor - The color of the icon on hover.
 * @property {Object} lineColor - The colors of the lines on the website.
 * @property {string} lineColor.primary - The primary color of the lines on the website.
 */
const lightTheme = {
  id: "light",
  canvas: "#FFFFFF", // Pure white background for cleanliness
  color: {
    primary: "#212121", // Dark gray text
    hover: "#FF8A00",   // Bright orange hover
    muted: "#A4A4A4",   // Slightly lighter muted text
  },
  background: {
    primary: "#FFFFFF",         // Clean white background
    hover: "#FFB74D",           // Softer hover background for better contrast
    secondary: "#FFEB99",       // Lighter secondary orange background
    hoverBtnColor: "#FF8A00",   // Bright orange for buttons on hover
    viewBtnColor: "#FFB300",    // Golden-orange view button
    iconHoverColor: "#FF6F00",  // Vibrant orange for icon hover
  },
  lineColor: {
    primary: "#F2B79F",         // Slightly darker line color for better contrast
  },
};

export default lightTheme;
