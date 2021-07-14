import React from 'react';
import '../css/Navbar.css?vers=1';

export const Navbar = ({ isScrolling }) => {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

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
        <div className="navbar-border"></div>
      </nav>
    </>
  );
};

export default Navbar;
