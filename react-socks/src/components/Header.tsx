import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCartLink from './HeaderCartLink';

const Header: React.FC = () => (
  <div className="nav-bar">
    <h1>
      <Link to="/">Socks Store</Link>
    </h1>

    <HeaderCartLink />
  </div>
);

export default Header;
