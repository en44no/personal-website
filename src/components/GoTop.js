import React from 'react';
import '../css/GoTop.css';

export const GoTop = ({ isScrolling }) => {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <i
      className={`up-arrow fad fa-chevron-circle-up ${
        isScrolling > 40 ? 'up-arrow-scrolling' : null
      }`}
      onClick={goToTop}
    ></i>
  );
};

export default GoTop;
