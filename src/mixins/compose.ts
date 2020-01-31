import { merge } from 'lodash';
import { StyledProps } from 'styled-components';

const compose = (...fns: Function[]) => (props: StyledProps<{}>) =>
  fns.map(fn => fn(props)).reduce((prev, curr) => merge({}, prev, curr), {});

export default compose;
