import { merge } from 'lodash';
import { DefaultTheme } from 'styled-components';
import defaults from './system/defaults';
import * as mixins from './mixins';
import * as system from './system';
import * as tokens from './tokens';

export const StyledMixins = mixins;
export const StyledSystem = system;

const theme: DefaultTheme = merge({}, defaults, tokens);
export default theme;
