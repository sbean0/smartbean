import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/blog" className="nav-link">Blog List</Link> {/* Add the Blog List button */}

    </nav>
  );
};

export default Navbar;
