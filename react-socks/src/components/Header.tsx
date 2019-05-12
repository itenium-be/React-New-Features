import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <div className="nav-bar">
    <h1>
      <Link to="/">Socks Store</Link>
    </h1>
  </div>
);

export default Header;
