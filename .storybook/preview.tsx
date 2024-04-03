import React from 'react';

import { Preview } from '@storybook/react';

import { GlobalStyles } from '../src/styles/global';

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
};

export default preview;
