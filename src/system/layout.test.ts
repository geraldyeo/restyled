import defaultTheme from '../index';
import {
  width,
  height,
  size,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
} from './layout';

const theme = {
  ...defaultTheme,
  sizes: [24, 48, 96],
};

describe('style systems (layout)', () => {
  it('returns layout styles', () => {
    let style = width(0)({ theme });
    expect(style).toEqual({ width: 24 });

    style = width(0.4)({ theme });
    expect(style).toEqual({ width: '40%' });

    style = height(1)({ theme });
    expect(style).toEqual({ height: 48 });

    style = size(2)({ theme });
    expect(style).toEqual({ height: 96, width: 96 });

    style = minWidth(0)({ theme });
    expect(style).toEqual({ minWidth: 24 });

    style = minHeight(1)({ theme });
    expect(style).toEqual({ minHeight: 48 });

    style = maxWidth(0)({ theme });
    expect(style).toEqual({ maxWidth: 24 });

    style = maxHeight(1)({ theme });
    expect(style).toEqual({ maxHeight: 48 });
  });
});
