import { css, SimpleInterpolation } from 'styled-components';

export enum Breakpoints {
  sm = '40em',
  md = '52em',
  lg = '64em',
  xl = '80em',
}

export type Breakpoint = keyof typeof Breakpoints;

const breakpoints: string[] = [
  Breakpoints.sm,
  Breakpoints.md,
  Breakpoints.lg,
  Breakpoints.xl,
];

const medias = {
  lessThan: (breakpoint: Breakpoint) => (...args: SimpleInterpolation[]) => css`
    @media (max-width: ${Breakpoints[breakpoint]}) {
      ${css({}, ...args)}
    }
  `,
  greaterThan: (breakpoint: Breakpoint) => (
    ...args: SimpleInterpolation[]
  ) => css`
    @media (min-width: ${Breakpoints[breakpoint]}) {
      ${css({}, ...args)}
    }
  `,
  between: (first: Breakpoint, second: Breakpoint) => (
    ...args: SimpleInterpolation[]
  ) => css`
    @media (min-width: ${Breakpoints[first]}) and (max-width: ${Breakpoints[
        second
      ]}) {
      ${css({}, ...args)}
    }
  `,
};

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];

export enum FontWeights {
  thin = 100,
  extraLight = 200,
  light = 300,
  normal = 400,
  medium = 500,
  semiBold = 600,
  bold = 700,
  extraBold = 800,
  black = 900,
}

const fontWeights: Record<string, number> = {
  thin: FontWeights.thin,
  extraLight: FontWeights.extraLight,
  light: FontWeights.light,
  normal: FontWeights.normal,
  medium: FontWeights.medium,
  semiBold: FontWeights.semiBold,
  bold: FontWeights.bold,
  extraBold: FontWeights.extraBold,
  black: FontWeights.black,
};

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export default {
  breakpoints,
  fontSizes,
  fontWeights,
  medias,
  space,
};
