import React from 'react';

const Header = (props) => {

  let { marca } = props;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">{marca}</a>
    </nav>
  );
}

export default Header;
