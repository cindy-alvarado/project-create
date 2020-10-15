import { createMuiTheme } from '@material-ui/core/styles';
// responsiveFontSizes
import blue from '@material-ui/core/colors/blue';

// let url = https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:wght@400;700&family=Source+Sans+Pro&display=swap

// const bebasNeue = {
//     fontFamily: 'Bebas Neue, cursive',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: 400,
//     src: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:wght@400;700&family=Source+Sans+Pro&display=swap'
//     // src: `
//     //   url(${RalewayWoff2}) format('woff2')
//     // `,
//   };

//   const merriWeather = {
//     fontFamily: 'Merriweather, serif',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: 400,
//     src: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:wght@400;700&family=Source+Sans+Pro&display=swap'
//     // src: `
//     //   url(${RalewayWoff2}) format('woff2')
//     // `,
//   };

const sansPro = {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src:
        'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:wght@400;700&family=Source+Sans+Pro&display=swap',
    // src: `
    //   url(${RalewayWoff2}) format('woff2')
    // `,
};

// eslint-disable-next-line no-unused-vars
const theme = createMuiTheme({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    palette: {
        primary: blue,
    },
    typography: {
        fontFamily: [sansPro],
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [sansPro],
            },
        },
    },
});

// let theme = responsiveFontSizes(theme);

export default theme;
