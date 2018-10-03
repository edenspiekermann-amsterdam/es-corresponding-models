export const appTheme = {
  breakpoints: [
    '40em',   // Tablet breakpoint ~640px
    '67.5em', // Desktop breakpoint ~1080px
  ],

  gutters: [
    18,
    16,
    24,
  ],

  // space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  space: [
    0,
    8,
    16,
    32,
    40,
    48,
    56,
    64,
    72,
    80,
    96,
  ],

  fontSizes: [
    12, // body small
    16, // body base
    18, // body big
    20, // intro paragraph
    24, // h3
    30, // h2
    36, // h3 tablet
    48, // h2 tablet
  ],

  colors: {
    base: '#2D353C',
    action: '#F6002E',
    cardBackground: '#F6F6F4',

    alto: '#D8D8D8',
    quartz: '#FAFAF9',
    iron: '#EAEAEB',
    silver: '#C0C2C3',
    storm: '#F6F6F4',
    swirl: '#D4D0C7',
    white: '#FFFFFF',
  },

  textStyles: {
    base: {
      'font-family':
        '"Brown Pro", "Helvetica Neue", Arial, Helvetica, sans-serif',
      'font-weight': 'normal',
    },

    heading: {
      'font-family': '"Brown Pro", "Helvetica Neue", Arial, Helvetica, sans-serif',
      'font-weight': 'bold',
      'margin-bottom': '0',
      'margin-top': '0',
    },

    sectionHeading: {
      'font-family': '"Brown Pro", "Helvetica Neue", Arial, Helvetica, sans-serif',
      'font-weight': 'bold',
      'margin-bottom': '1.5em',
      'margin-top': '1.5em',
    },

    light: {
      'font-family': '"Brown Pro", "Helvetica Neue", Arial, Helvetica, sans-serif',
      'font-weight': '300',
    },

    fancy: {
      'font-family': '"Chronicle Display A", "Chronicle Display B", Georgia, serif',
      'font-weight': '300',
    },
  },

  colorStyles: {
    error: {
      color: 'white',
      backgroundColor: 'red',
    },
  },

  buttons: {
    primary: {
      color: 'white',
      backgroundColor: '#F4C143',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white'
      },
      '.icon': {
        color: 'white'
      },
      '&:hover .icon': {
        color: 'white'
      },
      cursor: 'pointer',
      padding: '10px 30px',
      textAlign: 'center',
    },
    secondary: {
      color: 'base',
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: '#F4C143',
        color: 'white'
      },
      '&:hover .icon': {
        color: 'white'
      },
      cursor: 'pointer',
      padding: '10px 30px',
      textAlign: 'center',
    },
    text: {
      color: '#2D353C',
      borderBottom:'2px solid transparent',
      '&:hover': {
        borderColor: '#F4C143',
      },
    },
    textLarge: {
      color: '#2D353C',
      fontSize: '24px',
      '&:hover': {
        borderBottom: '2px solid #F4C143',
      },
    },
    textLargeWhite: {
      color: 'white',
      fontSize: '24px',
      '&:hover': {
        borderBottom: '2px solid #F4C143',
      },
    },
    mapMarker: {
      color: 'white',
      fontSize: '12px',
    },
  },
}
