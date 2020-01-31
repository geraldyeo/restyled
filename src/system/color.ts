import createStyleFunction, { SxPropKey } from './createStyleFunction';

export interface ColorProps {
  backgroundColor?: SxPropKey;
  color?: SxPropKey;
}

export const color = createStyleFunction({
  properties: ['color'],
  scaleKey: 'colors',
});

export const backgroundColor = createStyleFunction({
  properties: ['backgroundColor'],
  scaleKey: 'colors',
});
