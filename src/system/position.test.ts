import defaultTheme from '../index';
import { zIndex, top, right, bottom, left } from './position';

const theme = {
  ...defaultTheme,
  space: [0, 4, 8, 16, 32],
};

describe('style systems (position)', () => {
  it('returns position styles', () => {
    let style = zIndex(0)({ theme });
    expect(style).toEqual({ zIndex: 0 });

    style = top(1)({ theme });
    expect(style).toEqual({ top: 4 });

    style = right(2)({ theme });
    expect(style).toEqual({ right: 8 });

    style = bottom(3)({ theme });
    expect(style).toEqual({ bottom: 16 });

    style = left(4)({ theme });
    expect(style).toEqual({ left: 32 });
  });
});
