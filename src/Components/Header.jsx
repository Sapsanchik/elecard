import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-4">
      <nav className="flex justify-around align-middle">
        <Link to="/">Home</Link>

        <Link to="/tree">Tree</Link>

        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
