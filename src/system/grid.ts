import createStyleFunction, { SxPropKey } from './createStyleFunction';
import defaults from './defaults';

export interface GridProps {
  gridGap?: SxPropKey;
  gridColumnGap?: SxPropKey;
  gridRowGap?: SxPropKey;
}

export const gridGap = createStyleFunction({
  properties: ['gridGap'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});

export const gridColumnGap = createStyleFunction({
  properties: ['gridColumnGap'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});

export const gridRowGap = createStyleFunction({
  properties: ['gridRowGap'],
  scaleKey: 'space',
  defaultScale: defaults.space,
});
