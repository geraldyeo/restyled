import defaults from './defaults';

describe('style systems (media)', () => {
  it('returns media styles between breakpoints sm and md', () => {
    const style = defaults.medias.between('sm', 'md')``;
    expect(style).toMatchSnapshot();
  });

  it('returns media styles greater than breakpoint sm', () => {
    const style = defaults.medias.greaterThan('sm')``;
    expect(style).toMatchSnapshot();
  });

  it('returns media styles less than breakpoint lg', () => {
    const style = defaults.medias.lessThan('lg')``;
    expect(style).toMatchSnapshot();
  });
});
