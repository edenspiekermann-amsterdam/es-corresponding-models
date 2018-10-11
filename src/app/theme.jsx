export const appTheme = {
  breakpoints: [
    "37.5rem", // Mobile breakpoint ~600px
    "45rem", // Tablet Portrait breakpoint ~720px
    "70rem", // Tablet Landscape breakpoint ~1120px
    "75rem", // Laptop breakpoint ~1200px
    "78rem", // Desktop breakpoint ~1248px
    "125rem", // Desktop Large breakpoint ~2000px
    "175rem" // Desktop Extra Large breakpoint ~2800px
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
    14, // meta
    16, // paragraph small
    20, // h4 & paragraph
    24, // h3 & intro
    30, // h2
    36, // display
    42, // h1
  ],

  lineHeights: [
    "22px", // meta leading
    "24px", // paragraph small leading
    "28px", // h4 leading & paragraph leading
    "32px", // h3 leading & intro leading
    "40px", // h2 leading
    "48px", // display leading
    "56px", // h1 leading
  ],

  colors: {
    primary: "#e9711c",
    secondary: "#007398",
    secondaryLight: "#44c6f4",
    tertiary: "#29a61b",

    wildSand: "#f5f5f5",
    gallery: "#ebebeb",
    alto: "#dcdcdc",
    silver: "#b9b9b9",
    dustyGray: "#969696",
    doveGrey: "#737373",
    emperor: "#505050",
    mineShaft: "#323232",

    confirmation: "#29a61b",
    warning: "#c83727",
    information: "#009ece",
    white: "#FFFFFF"
  },

  textStyles: {
    base: {
      "font-family": "sans",
      "color": "mineShaft",
      "font-feature-settings": '"pnum" 1, "kern" 1, "liga" 1',
      "font-smoothing": "antialiased",
      "font-weight": "normal"
    },

    heading: {
      "font-family": "sans",
      "font-weight": "normal"
    },

    sectionHeading: {
      "font-family":
        '"Brown Pro", "Helvetica Neue", Arial, Helvetica, sans-serif',
      "font-weight": "bold",
      "margin-bottom": "1.5em",
      "margin-top": "1.5em"
    },

    light: {
      "font-family":
        '"Brown Pro", "Helvetica Neue", Arial, Helvetica, sans-serif',
      "font-weight": "300"
    },

    fancy: {
      "font-family":
        '"Chronicle Display A", "Chronicle Display B", Georgia, serif',
      "font-weight": "300"
    }
  },

  colorStyles: {
    error: {
      color: "white",
      backgroundColor: "red"
    }
  },

  buttons: {
    primary: {
      color: "white",
      backgroundColor: "#F4C143",
      "&:hover": {
        backgroundColor: "black",
        color: "white"
      },
      ".icon": {
        color: "white"
      },
      "&:hover .icon": {
        color: "white"
      },
      cursor: "pointer",
      padding: "10px 30px",
      textAlign: "center"
    },
    secondary: {
      color: "base",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#F4C143",
        color: "white"
      },
      "&:hover .icon": {
        color: "white"
      },
      cursor: "pointer",
      padding: "10px 30px",
      textAlign: "center"
    },
    text: {
      color: "#2D353C",
      borderBottom: "2px solid transparent",
      "&:hover": {
        borderColor: "#F4C143"
      }
    },
    textLarge: {
      color: "#2D353C",
      fontSize: "24px",
      "&:hover": {
        borderBottom: "2px solid #F4C143"
      }
    },
    textLargeWhite: {
      color: "white",
      fontSize: "24px",
      "&:hover": {
        borderBottom: "2px solid #F4C143"
      }
    },
    mapMarker: {
      color: "white",
      fontSize: "12px"
    }
  }
};
