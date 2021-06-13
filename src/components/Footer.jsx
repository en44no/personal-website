import React from 'react';

export const Footer = () => {
  return (
    <>
      <body className="d-flex flex-column min-vh-100">
        <div className="wrapper flex-grow-1"></div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg p-3 mb-3">
          <div className="container">
            <h1 className="navbar-brand" href="/">
              This is my Footer
            </h1>
          </div>
        </nav>
      </body>
    </>
  );
};

export default Footer;
