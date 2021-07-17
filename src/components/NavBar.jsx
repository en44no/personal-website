import React from 'react';
import '../css/Navbar.css?vers=1';
import GoTop, { goToTop } from './GoTop';

export const Navbar = ({ isScrolling }) => {
  return (
    <>
      <nav
        className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}
        onClick={goToTop}
      >
        <div
          className={`navbar-logo ${
            isScrolling > 20 ? 'scrolling-logo' : null
          }`}
        >
          Nahuel Márquez
        </div>
        <div className="navbar-border" data-aos-id="super-duper"></div>
      </nav>
    </>
  );
};

export default Navbar;
