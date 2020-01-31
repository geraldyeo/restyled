import theme from '../index';
import { gridGap, gridColumnGap, gridRowGap } from './grid';

describe('style systems (grid)', () => {
  it('returns grid styles', () => {
    let style = gridGap(1)({ theme });
    expect(style).toEqual({ gridGap: 4 });

    style = gridColumnGap(2)({ theme });
    expect(style).toEqual({ gridColumnGap: 8 });

    style = gridRowGap(3)({ theme });
    expect(style).toEqual({ gridRowGap: 12 });
  });
});
