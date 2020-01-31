import { get, isNumber } from 'lodash';
import createStyleFunction, { SxPropKey } from './createStyleFunction';
import defaults from './defaults';

export interface SpaceProps {
  margin?: SxPropKey;
  marginX?: SxPropKey;
  marginY?: SxPropKey;
  marginTop?: SxPropKey;
  marginRight?: SxPropKey;
  marginBottom?: SxPropKey;
  marginLeft?: SxPropKey;
  padding?: SxPropKey;
  paddingX?: SxPropKey;
  paddingY?: SxPropKey;
  paddingTop?: SxPropKey;
  paddingRight?: SxPropKey;
  paddingBottom?: SxPropKey;
  paddingLeft?: SxPropKey;
}

// margins can be negative, so check if key is...
const transformMargin = <T>(v: T, scale?: T[], key?: number | string) => {
  if (!scale || !key || !isNumber(key) || key >= 0) {
    return v;
  }
  const absolute = Math.abs(key);
  const value = get(scale, absolute, absolute);
  return !isNumber(value) ? `-${value}` : value * -1;
};

// margins

export const margin = createStyleFunction({
  properties: ['margin'],
  scaleKey: 'space',
  transform: transformMargin,
  defaultScale: defaults.space,
});
export const m = margin;

export const marginTop = createStyleFunction({
  properties: ['marginTop'],
  scaleKey: 'space',
  transform: transformMargin,
  defaultScale: defaults.space,
});
export const mt = marginTop;

export const marginRight = createStyleFunction({
  properties: ['marginRight'],
  scaleKey: 'space',
  transform: transformMargin,
  defaultScale: defaults.space,
});
export const mr = marginRight;

export const marginBottom = createStyleFunction({
  properties: ['marginBottom'],
  scaleKey: 'space',
  transform: transformMargin,
  defaultScale: defaults.space,
});
export const mb = marginBottom;

export const marginLeft = createStyleFunction({
  properties: ['marginLeft'],
  scaleKey: 'space',
  transform: transformMargin,
  defaultScale: defaults.space,
});
export const ml = marginLeft;

export const marginX = createStyleFunction({
  properties: ['marginLeft', 'marginRight'],
  scaleKey: 'space',
  transform: transformMargin,
  defaultScale: defaults.space,
});
export const mx = marginX;

export const marginY = createStyleFunction({
  properties: ['marginTop', 'marginBottom'],
  scaleKey: 'space',
  transform: transformMargin,
  defaultScale: defaults.space,
});
export const my = marginY;

// paddings

export const padding = createStyleFunction({
  properties: ['padding'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});
export const p = padding;

export const paddingTop = createStyleFunction({
  properties: ['paddingTop'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});
export const pt = paddingTop;

export const paddingRight = createStyleFunction({
  properties: ['paddingRight'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});
export const pr = paddingRight;

export const paddingBottom = createStyleFunction({
  properties: ['paddingBottom'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});
export const pb = paddingBottom;

export const paddingLeft = createStyleFunction({
  properties: ['paddingLeft'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});
export const pl = paddingLeft;

export const paddingX = createStyleFunction({
  properties: ['paddingLeft', 'paddingRight'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});
export const px = paddingX;

export const paddingY = createStyleFunction({
  properties: ['paddingTop', 'paddingBottom'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});
export const py = paddingY;
