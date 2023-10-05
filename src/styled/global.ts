import { createGlobalStyle } from 'styled-components';

export const colors = {
  main: '#393939',
  primary: 'white',
  secondary: '#000'
};

export const fontSize = {
  medium: '24px',
  large: '34px'
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    outline: none;
    background-color: ${colors.main};
    color: ${colors.primary};
    text-align: center;
    width: 100%;
    margin: 1rem auto;
  }
`;





