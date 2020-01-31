import { get, identity, isArray, isNil, merge } from 'lodash';
import { StyledProps } from 'styled-components';
import defaults from './defaults';

type SxProperty = Record<string, number | string>;

type SxProperties = Record<string, number | string | SxProperty>;

export type SxPropKey = number | string | (number | string)[];

interface TransformFn {
  <T>(value: T, scale?: T[], key?: number | string): number;
  <T>(value: T, scale?: T[], key?: number | string): string;
}

interface SxConfig {
  properties: string[];
  scaleKey: string;
  transform?: TransformFn;
  defaultScale?: number[] | string[] | SxProperty;
}

const createMediaQuery = (n: string) => `@media screen and (min-width: ${n})`;

const createStyleFunction = ({
  properties,
  scaleKey,
  transform = identity,
  defaultScale,
}: SxConfig) => (key?: SxPropKey) => ({
  theme,
}: StyledProps<{}>): SxProperties | undefined => {
  if (isNil(key)) {
    return undefined;
  }
  const result: SxProperties = {};
  const scale = get(theme, scaleKey, defaultScale);
  if (isArray(key)) {
    const breakpoints = get(theme, 'breakpoints', defaults.breakpoints);
    const mediaQueries = [null, ...breakpoints.map(createMediaQuery)];
    const mqLength = mediaQueries.length;
    properties.forEach((prop: string) => {
      key.forEach((theKey: number | string, i: number) => {
        if (i < mqLength) {
          const media = mediaQueries[i];
          let value: number | string = get(scale, theKey, theKey);
          value = transform(value, scale, theKey);
          if (isNil(media)) {
            result[prop] = value;
          } else {
            result[media] = merge({}, result[media], { [prop]: value });
          }
        }
      });
    });
  } else {
    let value: number | string = get(scale, key, key);
    value = transform(value, scale, key);
    properties.forEach(prop => {
      result[prop] = value;
    });
  }
  return result;
};

export default createStyleFunction;
