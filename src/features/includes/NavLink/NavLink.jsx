import React from 'react';
import { Link } from '@reach/router';

const NavLink = props => {
  const newProps = { ...props };
  const { activeClass } = props;
  delete newProps.activeClass;
  return (
    <Link
      {...newProps}
      getProps={({ isCurrent }) => ({
        className: isCurrent
          ? `${props.className} ${activeClass}`
          : props.className,
      })}
    />
  );
};

export default NavLink;
