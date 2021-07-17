import React from 'react';
import '../css/GoTop.css?vers=1';

export const GoTop = ({ isScrolling }) => {
  return (
    <i
      className={`up-arrow fad fa-chevron-circle-up ${
        isScrolling > 40 ? 'up-arrow-scrolling' : null
      }`}
      onClick={goToTop}
    ></i>
  );
};

const goToTop = () => {
  document.getElementById('cover').scrollIntoView({ behavior: 'smooth' });
};

export default GoTop;
