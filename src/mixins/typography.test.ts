import { SimpleInterpolation } from 'styled-components';
import { truncate, textOverflow } from './typography';

describe('Typography mixins', () => {
  it('truncate should return css FlattenSimpleIteration', () => {
    const value = truncate().map((v: SimpleInterpolation) =>
      (v as string).replace(/\s+/g, ''),
    );
    expect(value).toEqual([
      'display:inline-block;max-width:',
      '100%',
      ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap;',
    ]);
  });

  it('textOverflow should return css FlattenSimpleIteration', () => {
    const value = textOverflow.map((v: SimpleInterpolation) =>
      (v as string).replace(/\s+/g, ''),
    );
    expect(value).toEqual([
      'overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;',
    ]);
  });
});
