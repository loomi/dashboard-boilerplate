import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from 'styles/theme';

// import AuthProvider from './AuthProvider';
// import ToastProvider from './ToastProvider';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  // Web Font
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap');

  // Local Font
  /* @font-face {
    font-family: 'Nunito';
    src: url('../assets/fonts/HelveticaNeueLTStd-Regular.otf') format('truetype');
    font-weight: 400;
    font-style: normal;
  } */

  body {
    color: ${theme.colors.text};
    background-color: ${theme.colors.bodyBackground};
  }

  body, button {
    font-family: ${theme.fonts.default};
  }
`;

function GlobalProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <AuthProvider> */}
      {/* <ToastProvider>{children}</ToastProvider> */}
      {/* </AuthProvider> */}
      {children}
    </ThemeProvider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalProvider;
