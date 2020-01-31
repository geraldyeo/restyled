import createStyleFunction, { SxPropKey } from './createStyleFunction';

export interface ShadowProps {
  boxShadow?: SxPropKey;
  textShadow?: SxPropKey;
}

export const boxShadow = createStyleFunction({
  properties: ['boxShadow'],
  scaleKey: 'shadows',
});

export const textShadow = createStyleFunction({
  properties: ['textShadow'],
  scaleKey: 'shadows',
});
