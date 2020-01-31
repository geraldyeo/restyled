import { em } from 'polished';
import { isNumber, isString } from 'lodash';
import matchUnit from '../utils/matchUnit';
import createStyleFunction, { SxPropKey } from './createStyleFunction';
import defaults from './defaults';

export interface TypographyProps {
  fontFamily?: SxPropKey;
  fontSize?: SxPropKey;
  fontWeight?: SxPropKey;
  lineHeight?: SxPropKey;
  letterSpacing?: SxPropKey;
}

const transformPx = (base?: string | number) => <T>(v: T) => {
  if (isString(v)) {
    const [, unit] = matchUnit(v);
    if (unit === 'px') {
      return em(v, base);
    }
  }
  if (isNumber(v)) {
    return em(v, base);
  }
  return v;
};

export const fontFamily = createStyleFunction({
  properties: ['fontFamily'],
  scaleKey: 'fonts',
});

export const fontSize = createStyleFunction({
  properties: ['fontSize'],
  scaleKey: 'fontSizes',
  defaultScale: defaults.fontSizes,
});

export const fontSizeEm = createStyleFunction({
  properties: ['fontSize'],
  scaleKey: 'fontSizes',
  transform: transformPx('16px'),
  defaultScale: defaults.fontSizes,
});

export const fontWeight = createStyleFunction({
  properties: ['fontWeight'],
  scaleKey: 'fontWeights',
  defaultScale: defaults.fontWeights,
});

export const lineHeight = createStyleFunction({
  properties: ['lineHeight'],
  scaleKey: 'lineHeights',
});

export const letterSpacing = createStyleFunction({
  properties: ['letterSpacing'],
  scaleKey: 'letterSpacings',
});
