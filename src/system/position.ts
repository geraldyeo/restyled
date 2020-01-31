import createStyleFunction, { SxPropKey } from './createStyleFunction';
import defaults from './defaults';

export interface PositionProps {
  zIndex?: SxPropKey;
  top?: SxPropKey;
  right?: SxPropKey;
  bottom?: SxPropKey;
  left?: SxPropKey;
}

export const zIndex = createStyleFunction({
  properties: ['zIndex'],
  scaleKey: 'zIndices',
});

export const top = createStyleFunction({
  properties: ['top'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});

export const right = createStyleFunction({
  properties: ['right'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});

export const bottom = createStyleFunction({
  properties: ['bottom'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});

export const left = createStyleFunction({
  properties: ['left'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});
