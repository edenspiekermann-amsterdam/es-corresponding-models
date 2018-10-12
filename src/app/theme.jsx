export const appTheme = {
  breakpoints: [
    "37.5rem", // Mobile breakpoint ~600px
    "75rem", // Laptop breakpoint ~1200px
  ],

  fonts: {
    sans: "Helvetica, Arial, sans-serif",
    serif: "Georgia, Times, serif",
    mono: "Consolas, monaco, monospace"
  },

  gutters: [18, 16, 24],

  // space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  space: [0, 8, 16, 32, 40, 48, 56, 64, 72, 80, 96],

  fontSizes: [
    18, // paragraph mobile [0]
    20, // paragraph [1]
    24, // h2 mobile [2]
    28, // h1 mobile [3]
    30, // h2 [4]
    42, // h1 [5]
  ],

  lineHeights: [
    "26px", // paragraph leading mobile [0]
    "28px", // paragraph leading [1]
    "32px", // h2 leading mobile [2]
    "36px", // h1 leading mobile [3]
    "40px", // h2 leading [4]
    "56px", // h1 leading [5]
  ],

  colors: {
    primary: "#e9711c",
    secondary: "#007398",
    secondaryLight: "#44c6f4",
    tertiary: "#29a61b",
  },

  textStyles: {
    base: {
      "font-feature-settings": '"pnum" 1, "kern" 1, "liga" 1',
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      "font-weight": "normal"
    },

    example: {
      "color": "secondary"
    },
  },

  colorStyles: {
    error: {
      color: "white",
      backgroundColor: "red"
    }
  },

};
