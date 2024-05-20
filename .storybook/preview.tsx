import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Preview } from '@storybook/react';

import { theme } from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/global';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
