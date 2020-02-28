module.exports = {
  theme: {
    extend: {
      inset: {
        full: '100%',
      },
      opacity: {
        10: '0.1',
        90: '0.9',
      },
      linearGradientDirections: { // defaults to these values
        t: 'to top',
        tr: 'to top right',
        r: 'to right',
        br: 'to bottom right',
        b: 'to bottom',
        bl: 'to bottom left',
        l: 'to left',
        tl: 'to top left',
      },
      linearGradientColors: (theme) => ({ // defaults to {}
        red: '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
        'gray-black': [theme('colors.gray.900'), theme('colors.gray.800')],
        'gray-pink': [theme('colors.gray.700'), theme('colors.red.400')],
        'gray-yellow': [theme('colors.gray.700'), theme('colors.yellow.400')],
        'orange-red': [theme('colors.orange.300'), theme('colors.red.500')],
        'orange-yellow': [theme('colors.orange.300'), theme('colors.yellow.800')],
        'orange-gray': [theme('colors.orange.800'), theme('colors.gray.700')],
        'pink-purple': [theme('colors.pink.300'), theme('colors.pink.800')],
        'red-orange-red': [theme('colors.red.500'), theme('colors.orange.500'), theme('colors.red.500')],
      }),
      radialGradientShapes: { // defaults to this value
        default: 'ellipse',
      },
      radialGradientSizes: { // defaults to this value
        default: 'closest-side',
      },
      radialGradientPositions: { // defaults to these values
        default: 'center',
        t: 'top',
        tr: 'top right',
        r: 'right',
        br: 'bottom right',
        b: 'bottom',
        bl: 'bottom left',
        l: 'left',
        tl: 'top left',
      },
      radialGradientColors: (theme) => ({ // defaults to {}
        red: '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
        'red-orange-red': [theme('colors.red.500'), theme('colors.orange.500'), theme('colors.red.500')],
      }),
      conicGradientStartingAngles: { // defaults to this value
        default: '0',
      },
      conicGradientPositions: { // defaults to these values
        default: 'center',
        t: 'top',
        tr: 'top right',
        r: 'right',
        br: 'bottom right',
        b: 'bottom',
        bl: 'bottom left',
        l: 'left',
        tl: 'top left',
      },
      conicGradientColors: { // defaults to {}
        red: '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        checkerboard: ['white 90deg', 'black 90deg 180deg', 'white 180deg 270deg', 'black 270deg'],
      },
      repeatingLinearGradientDirections: (theme) => theme('linearGradientDirections'), // defaults to this value
      repeatingLinearGradientColors: (theme) => theme('linearGradientColors'), // defaults to {}
      repeatingLinearGradientLengths: { // defaults to {}
        sm: '25px',
        md: '50px',
        lg: '100px',
      },
      repeatingRadialGradientShapes: (theme) => theme('radialGradientShapes'), // defaults to this value
      repeatingRadialGradientSizes: { // defaults to this value
        default: 'farthest-corner',
      },
      repeatingRadialGradientPositions: (theme) => theme('radialGradientPositions'), // defaults to this value
      repeatingRadialGradientColors: (theme) => theme('radialGradientColors'), // defaults to {}
      repeatingRadialGradientLengths: { // defaults to {}
        sm: '25px',
        md: '50px',
        lg: '100px',
      },
      repeatingConicGradientStartingAngles: (theme) => theme('conicGradientStartingAngles'), // defaults to this value
      repeatingConicGradientPositions: (theme) => theme('conicGradientPositions'), // defaults to this value
      repeatingConicGradientColors: { // defaults to {}
        red: '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        starburst: ['white 0 5deg', 'blue 5deg'],
      },
      repeatingConicGradientLengths: { // defaults to {}
        sm: '10deg',
        md: '20deg',
        lg: '40deg',
      },
      fontFamily: {
        display: ['Montserrat'],
        body: ['Open Sans'],
      },
    },
  },
  variants: {
    backgroundImage: ['responsive', 'hover', 'focus', 'active'], // this is for the "bg-none" utility
    linearGradients: ['responsive', 'hover', 'focus', 'active'],
    radialGradients: ['responsive', 'hover', 'focus', 'active'],
    conicGradients: ['responsive', 'hover', 'focus', 'active'],
    repeatingLinearGradients: ['responsive', 'hover', 'focus', 'active'],
    repeatingRadialGradients: ['responsive', 'hover', 'focus', 'active'],
    repeatingConicGradients: ['responsive', 'hover', 'focus', 'active'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive', 'group-hover'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: [],
    stroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    fontSize: ['responsive'],
    fontStyle: ['responsive'],
    textTransform: ['responsive'],
    textDecoration: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive', 'hover', 'group-hover'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },
  corePlugins: {
    container: false,
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-gradients')],
};
