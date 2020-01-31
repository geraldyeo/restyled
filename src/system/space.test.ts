import defaultTheme from '../index';
import { m, mt, mb, ml, mr, mx, my, p, pt, pb, pl, pr, px, py } from './space';

const theme = {
  ...defaultTheme,
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, '32em', '64em'],
};

describe('style systems (space)', () => {
  it('returns space values', () => {
    let style = m(0)({ theme });
    expect(style).toEqual({ margin: 0 });

    style = m(5)({ theme });
    expect(style).toEqual({ margin: '32em' });

    style = m(6)({ theme });
    expect(style).toEqual({ margin: '64em' });

    style = mt(1)({ theme });
    expect(style).toEqual({ marginTop: 4 });

    style = mr(2)({ theme });
    expect(style).toEqual({ marginRight: 8 });

    style = mb(3)({ theme });
    expect(style).toEqual({ marginBottom: 16 });

    style = ml(4)({ theme });
    expect(style).toEqual({ marginLeft: 32 });

    style = mx(1)({ theme });
    expect(style).toEqual({ marginLeft: 4, marginRight: 4 });

    style = my(3)({ theme });
    expect(style).toEqual({ marginTop: 16, marginBottom: 16 });

    style = p(0)({ theme });
    expect(style).toEqual({ padding: 0 });

    style = pt(1)({ theme });
    expect(style).toEqual({ paddingTop: 4 });

    style = pr(2)({ theme });
    expect(style).toEqual({ paddingRight: 8 });

    style = pb(3)({ theme });
    expect(style).toEqual({ paddingBottom: 16 });

    style = pl(4)({ theme });
    expect(style).toEqual({ paddingLeft: 32 });

    style = px(1)({ theme });
    expect(style).toEqual({ paddingLeft: 4, paddingRight: 4 });

    style = py(3)({ theme });
    expect(style).toEqual({ paddingTop: 16, paddingBottom: 16 });
  });

  it('returns negative margins', () => {
    let style = m(-2)({ theme });
    expect(style).toEqual({ margin: -8 });

    style = m(-5)({ theme });
    expect(style).toEqual({ margin: '-32em' });

    style = m(-6)({ theme });
    expect(style).toEqual({ margin: '-64em' });

    // out of theme token's range
    style = m(-128)({ theme });
    expect(style).toEqual({ margin: -128 });

    style = m('-128rem')({ theme });
    expect(style).toEqual({ margin: '-128rem' });

    style = m('-256em')({ theme });
    expect(style).toEqual({ margin: '-256em' });
  });

  it('returns responsive margins', () => {
    let style = mx([1, 2, 3])({ theme });
    expect(style).toEqual({
      marginLeft: 4,
      marginRight: 4,
      '@media screen and (min-width: 40em)': {
        marginLeft: 8,
        marginRight: 8,
      },
      '@media screen and (min-width: 52em)': {
        marginLeft: 16,
        marginRight: 16,
      },
    });
    // contains out of range values and missing breakpoints
    style = mx([1, 5, 200, '64rem', '200em'])({ theme });
    expect(style).toEqual({
      marginLeft: 4,
      marginRight: 4,
      '@media screen and (min-width: 40em)': {
        marginLeft: '32em',
        marginRight: '32em',
      },
      '@media screen and (min-width: 52em)': {
        marginLeft: 200,
        marginRight: 200,
      },
      '@media screen and (min-width: 64em)': {
        marginLeft: '64rem',
        marginRight: '64rem',
      },
    });
  });
});
