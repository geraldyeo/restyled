import defaultTheme from '../index';
import {
  fontFamily,
  fontSize,
  fontSizeEm,
  fontWeight,
  lineHeight,
  letterSpacing,
} from './typography';

const theme = {
  ...defaultTheme,
  fontSizes: [14, 16, 18],
  fontWeights: {
    normal: 400,
    medium: 500,
  },
};

describe('style systems (typography)', () => {
  it('returns typography styles', () => {
    let style = fontFamily()({ theme });
    expect(style).toEqual(undefined);

    style = fontFamily('Arial')({ theme });
    expect(style).toEqual({ fontFamily: 'Arial' });

    style = fontSize(1)({ theme });
    expect(style).toEqual({ fontSize: 16 });
    // out of range, use value verbatim
    style = fontSize(3)({ theme });
    expect(style).toEqual({ fontSize: 3 });

    style = fontSizeEm(1)({ theme });
    expect(style).toEqual({ fontSize: '1em' });

    style = fontSizeEm([1, 2])({ theme });
    expect(style).toEqual({
      '@media screen and (min-width: 40em)': { fontSize: '1.125em' },
      fontSize: '1em',
    });

    style = fontSizeEm('32px')({ theme });
    expect(style).toEqual({ fontSize: '2em' });

    style = fontSizeEm('32pp')({ theme });
    expect(style).toEqual({ fontSize: '32pp' });

    style = fontWeight('medium')({ theme });
    expect(style).toEqual({ fontWeight: 500 });

    style = lineHeight(2)({ theme });
    expect(style).toEqual({ lineHeight: 2 });

    style = letterSpacing(10)({ theme });
    expect(style).toEqual({ letterSpacing: 10 });
  });
});
