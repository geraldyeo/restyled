import matchUnit from './matchUnit';

describe('matchUnit', () => {
  it('returns value and unit', () => {
    expect(matchUnit('100vh')).toEqual([100, 'vh']);
    expect(matchUnit('80vw')).toEqual([80, 'vw']);
    expect(matchUnit('500px')).toEqual([500, 'px']);
    expect(matchUnit('1em')).toEqual([1, 'em']);
    expect(matchUnit('2rem')).toEqual([2, 'rem']);
    expect(matchUnit('100blah')).toEqual(['100blah', undefined]);
    expect(matchUnit(100)).toEqual([100, undefined]);
    expect(matchUnit('100')).toEqual(['100', undefined]);
  });
});
