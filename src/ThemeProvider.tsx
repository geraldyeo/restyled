import React from 'react';
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider as MuiStylesProvider } from '@material-ui/styles';
import MuiCssBaseline from '@material-ui/core/CssBaseline';
import { merge } from 'lodash';
import defaultTheme from './index';

const {
  blackRussian,
  waterloo,
  mystic,
  radicalRed,
  dodgerBlue,
} = defaultTheme.colors as Record<string, string>;

const DEFAULT_MUI_THEME = {
  palette: {
    primary: {
      main: dodgerBlue,
    },
    error: {
      main: radicalRed,
    },
    text: {
      primary: blackRussian,
      secondary: waterloo,
      disabled: waterloo,
      hint: mystic,
    },
  },
  typography: {
    fontFamily: 'Heebo, Roboto',
  },
};

interface Props {
  theme?: DefaultTheme;
  children: React.ReactNode;
}

const ThemeProvider = ({ theme, children }: Props) => {
  const nextTheme = merge({}, defaultTheme, theme);
  const nextMuiTheme = createMuiTheme(merge({}, DEFAULT_MUI_THEME));

  // By default, Material-UI's styles are injected last in the element of the page. As a result,
  // they gain more specificity than any other style sheet. If you want to override Material-UI's
  // styles, set this prop.
  return (
    <MuiStylesProvider injectFirst>
      <MuiCssBaseline />
      <StyledThemeProvider theme={nextTheme}>
        <MuiThemeProvider theme={nextMuiTheme}>{children}</MuiThemeProvider>
      </StyledThemeProvider>
    </MuiStylesProvider>
  );
};

export default ThemeProvider;
