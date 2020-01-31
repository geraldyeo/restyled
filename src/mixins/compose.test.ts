import defaultTheme from '../index';
import * as StyledSystem from '../system';
import compose from './compose';

const theme = {
  ...defaultTheme,
  colors: { white: '#fff', black: '#000', grey: '#333' },
};

describe('compose', () => {
  it('should compose a style function', () => {
    const fn = compose(
      StyledSystem.backgroundColor('white'),
      StyledSystem.color('black'),
      StyledSystem.fontFamily('Arial'),
      StyledSystem.fontSize([0, 2, 4]),
      StyledSystem.fontWeight(['light', 'normal', 'medium']),
    );
    const style = fn({ theme });
    expect(style).toEqual({
      backgroundColor: '#fff',
      color: '#000',
      fontFamily: 'Arial',
      fontSize: 12,
      fontWeight: 300,
      '@media screen and (min-width: 40em)': {
        fontSize: 16,
        fontWeight: 400,
      },
      '@media screen and (min-width: 52em)': {
        fontSize: 22,
        fontWeight: 500,
      },
    });
  });
});
