import defaultTheme from '../index';
import { boxShadow, textShadow } from './shadow';

const theme = {
  ...defaultTheme,
  shadows: ['0 0 12px black'],
};

describe('style systems (shadow)', () => {
  it('returns colors styles', () => {
    let style = boxShadow(0)({ theme });
    expect(style).toEqual({ boxShadow: '0 0 12px black' });

    style = textShadow(0)({ theme });
    expect(style).toEqual({ textShadow: '0 0 12px black' });
  });
});
