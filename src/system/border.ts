import createStyleFunction, { SxPropKey } from './createStyleFunction';

export interface BorderProps {
  border?: SxPropKey;
  borderWidth?: SxPropKey;
  borderStyle?: SxPropKey;
  borderColor?: SxPropKey;
  borderRadius?: SxPropKey;
  borderTop?: SxPropKey;
  borderRight?: SxPropKey;
  borderBottom?: SxPropKey;
  borderLeft?: SxPropKey;
  borderX?: SxPropKey;
  borderY?: SxPropKey;
  borderTopLeftRadius?: SxPropKey;
  borderTopRightRadius?: SxPropKey;
  borderBottomLeftRadius?: SxPropKey;
  borderBottomRightRadius?: SxPropKey;
  borderTopWidth?: SxPropKey;
  borderRightWidth?: SxPropKey;
  borderBottomWidth?: SxPropKey;
  borderLeftWidth?: SxPropKey;
  borderTopStyle?: SxPropKey;
  borderRightStyle?: SxPropKey;
  borderBottomStyle?: SxPropKey;
  borderLeftStyle?: SxPropKey;
  borderTopColor?: SxPropKey;
  borderRightColor?: SxPropKey;
  borderBottomColor?: SxPropKey;
  borderLeftColor?: SxPropKey;
}

export const border = createStyleFunction({
  properties: ['border'],
  scaleKey: 'borders',
});

export const borderWidth = createStyleFunction({
  properties: ['borderWidth'],
  scaleKey: 'borderWidths',
});

export const borderStyle = createStyleFunction({
  properties: ['borderStyle'],
  scaleKey: 'borderStyles',
});

export const borderColor = createStyleFunction({
  properties: ['borderColor'],
  scaleKey: 'colors',
});

export const borderRadius = createStyleFunction({
  properties: ['borderRadius'],
  scaleKey: 'radii',
});

export const borderTop = createStyleFunction({
  properties: ['borderTop'],
  scaleKey: 'borders',
});

export const borderRight = createStyleFunction({
  properties: ['borderRight'],
  scaleKey: 'borders',
});

export const borderBottom = createStyleFunction({
  properties: ['borderBottom'],
  scaleKey: 'borders',
});

export const borderLeft = createStyleFunction({
  properties: ['borderLeft'],
  scaleKey: 'borders',
});

export const borderX = createStyleFunction({
  properties: ['borderLeft', 'borderRight'],
  scaleKey: 'borders',
});

export const borderY = createStyleFunction({
  properties: ['borderTop', 'borderBottom'],
  scaleKey: 'borders',
});

export const borderTopLeftRadius = createStyleFunction({
  properties: ['borderTopLeftRadius'],
  scaleKey: 'radii',
});

export const borderTopRightRadius = createStyleFunction({
  properties: ['borderTopRightRadius'],
  scaleKey: 'radii',
});

export const borderBottomLeftRadius = createStyleFunction({
  properties: ['borderBottomLeftRadius'],
  scaleKey: 'radii',
});

export const borderBottomRightRadius = createStyleFunction({
  properties: ['borderBottomRightRadius'],
  scaleKey: 'radii',
});

export const borderTopWidth = createStyleFunction({
  properties: ['borderTopWidth'],
  scaleKey: 'borderWidths',
});

export const borderRightWidth = createStyleFunction({
  properties: ['borderRightWidth'],
  scaleKey: 'borderWidths',
});

export const borderBottomWidth = createStyleFunction({
  properties: ['borderBottomWidth'],
  scaleKey: 'borderWidths',
});

export const borderLeftWidth = createStyleFunction({
  properties: ['borderLeftWidth'],
  scaleKey: 'borderWidths',
});

export const borderTopStyle = createStyleFunction({
  properties: ['borderTopStyle'],
  scaleKey: 'borderStyles',
});

export const borderRightStyle = createStyleFunction({
  properties: ['borderRightStyle'],
  scaleKey: 'borderStyles',
});

export const borderBottomStyle = createStyleFunction({
  properties: ['borderBottomStyle'],
  scaleKey: 'borderStyles',
});

export const borderLeftStyle = createStyleFunction({
  properties: ['borderLeftStyle'],
  scaleKey: 'borderStyles',
});

export const borderTopColor = createStyleFunction({
  properties: ['borderTopColor'],
  scaleKey: 'colors',
});

export const borderRightColor = createStyleFunction({
  properties: ['borderRightColor'],
  scaleKey: 'colors',
});

export const borderBottomColor = createStyleFunction({
  properties: ['borderBottomColor'],
  scaleKey: 'colors',
});

export const borderLeftColor = createStyleFunction({
  properties: ['borderLeftColor'],
  scaleKey: 'colors',
});
