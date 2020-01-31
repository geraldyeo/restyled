import React, { forwardRef, createElement } from 'react';

/**
 * Filter out unwanted props before it reaches the dom
 *
 * @see {@link https://github.com/styled-components/styled-components/issues/2878#issuecomment-555199583}
 * @param {React.ComponentType<any>} Component
 * @param {string[]} [propsToFilter=[]]
 * @returns
 */
function filterProps(
  Component: React.ElementType<any>,
  propsToFilter: string[] = [],
) {
  return forwardRef((props, ref) => {
    const filteredProps: Record<string, any> = { ref, ...props };
    propsToFilter.forEach(prop => delete filteredProps[prop]);
    if (typeof Component === 'string') {
      return createElement(Component, filteredProps);
    }
    return <Component {...filteredProps} />;
  });
}

export default filterProps;
