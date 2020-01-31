import { isNumber } from 'lodash';
import createStyleFunction, { SxPropKey } from './createStyleFunction';

export interface LayoutProps {
  size?: SxPropKey;
  width?: SxPropKey;
  height?: SxPropKey;
  maxWidth?: SxPropKey;
  maxHeight?: SxPropKey;
  minWidth?: SxPropKey;
  minHeight?: SxPropKey;
}

const transformWidth = <T>(v: T) => (!isNumber(v) || v > 1 ? v : `${v * 100}%`);

export const width = createStyleFunction({
  properties: ['width'],
  scaleKey: 'sizes',
  transform: transformWidth,
});

export const height = createStyleFunction({
  properties: ['height'],
  scaleKey: 'sizes',
});

export const minWidth = createStyleFunction({
  properties: ['minWidth'],
  scaleKey: 'sizes',
});

export const minHeight = createStyleFunction({
  properties: ['minHeight'],
  scaleKey: 'sizes',
});

export const maxWidth = createStyleFunction({
  properties: ['maxWidth'],
  scaleKey: 'sizes',
});

export const maxHeight = createStyleFunction({
  properties: ['maxHeight'],
  scaleKey: 'sizes',
});

export const size = createStyleFunction({
  properties: ['width', 'height'],
  scaleKey: 'sizes',
});
