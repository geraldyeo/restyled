import defaultTheme from '../index';
import {
  border,
  borderBottomColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderBottomStyle,
  borderBottomWidth,
  borderLeftColor,
  borderLeftStyle,
  borderLeftWidth,
  borderRightColor,
  borderRightStyle,
  borderRightWidth,
  borderTopColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderTopStyle,
  borderTopWidth,
} from './border';

const theme = {
  ...defaultTheme,
  borderWidths: { thin: 1 },
  colors: { primary: 'red' },
  borderStyles: { thick: 'solid' },
  radii: { small: 5 },
};

describe('style systems (border)', () => {
  it('returns border styles', () => {
    const style = border('1px solid gold')({ theme });
    expect(style).toEqual({ border: '1px solid gold' });
  });

  it('returns individual border styles', () => {
    let style;

    style = borderTopWidth('thin')({ theme });
    expect(style).toEqual({ borderTopWidth: 1 });

    style = borderRightWidth('thin')({ theme });
    expect(style).toEqual({ borderRightWidth: 1 });

    style = borderBottomWidth('thin')({ theme });
    expect(style).toEqual({ borderBottomWidth: 1 });

    style = borderLeftWidth('thin')({ theme });
    expect(style).toEqual({ borderLeftWidth: 1 });

    style = borderTopColor('primary')({ theme });
    expect(style).toEqual({ borderTopColor: 'red' });

    style = borderRightColor('primary')({ theme });
    expect(style).toEqual({ borderRightColor: 'red' });

    style = borderBottomColor('primary')({ theme });
    expect(style).toEqual({ borderBottomColor: 'red' });

    style = borderLeftColor('primary')({ theme });
    expect(style).toEqual({ borderLeftColor: 'red' });

    style = borderTopStyle('thick')({ theme });
    expect(style).toEqual({ borderTopStyle: 'solid' });

    style = borderRightStyle('thick')({ theme });
    expect(style).toEqual({ borderRightStyle: 'solid' });

    style = borderBottomStyle('thick')({ theme });
    expect(style).toEqual({ borderBottomStyle: 'solid' });

    style = borderLeftStyle('thick')({ theme });
    expect(style).toEqual({ borderLeftStyle: 'solid' });

    style = borderTopLeftRadius('small')({ theme });
    expect(style).toEqual({ borderTopLeftRadius: 5 });

    style = borderTopRightRadius('small')({ theme });
    expect(style).toEqual({ borderTopRightRadius: 5 });

    style = borderBottomLeftRadius('small')({ theme });
    expect(style).toEqual({ borderBottomLeftRadius: 5 });

    style = borderBottomRightRadius('small')({ theme });
    expect(style).toEqual({ borderBottomRightRadius: 5 });
  });
});
