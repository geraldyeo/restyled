import defaultTheme from '../index';
import { color, backgroundColor } from './color';

const theme = {
  ...defaultTheme,
  colors: { primary: 'red', secondary: 'blue' },
};

describe('style systems (color)', () => {
  it('returns color styles', () => {
    let style = color('primary')({ theme });
    expect(style).toEqual({ color: 'red' });

    style = backgroundColor('secondary')({ theme });
    expect(style).toEqual({ backgroundColor: 'blue' });
  });
});
