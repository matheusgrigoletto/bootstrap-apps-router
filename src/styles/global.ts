'use client';

import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: local('Poppins Light'), local('Poppins-Light'),
      url('/fonts/poppins-v21-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 300;
    src: local('Poppins Light'), local('Poppins-Light'),
      url('/fonts/poppins-v21-latin-300italic.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local('Poppins Regular'), local('Poppins-Regular'),
      url('/fonts/poppins-v21-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    src: local('Poppins Regular'), local('Poppins-Regular'),
      url('/fonts/poppins-v21-latin-italic.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
      url('/fonts/poppins-v21-latin-600.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 600;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
      url('/fonts/poppins-v21-latin-600italic.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px)
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
    }
  `}
`;
