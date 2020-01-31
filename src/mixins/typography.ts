import { css } from 'styled-components';

export const truncate = (width = '100%') => css`
  display: inline-block;
  max-width: ${width};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const textOverflow = css`
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;
