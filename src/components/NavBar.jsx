import React from 'react';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg p-3 mb-3">
        <div className="container">
          <a className="navbar-brand navTextTitle" href="/">
            Personal Website
          </a>
          <ul class="nav navbar-nav">
            <li className="nav-item px-2">
              <a href="#" className="a-nav-item">
                Home
              </a>
            </li>
            <li className="nav-item px-2">
              <a href="#" className="a-nav-item">
                About Me
              </a>
            </li>
            <li className="nav-item px-2">
              <a href="#" className="a-nav-item">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
