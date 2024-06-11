import { ThemeProvider } from 'styled-components';
import { RenderResult, render } from '@testing-library/react';

import { theme } from '@/styles/theme';

export const renderWithTheme = (ui: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};
