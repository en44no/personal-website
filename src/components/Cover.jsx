/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import '../css/Cover.css?vers=1';

export const Cover = () => {
  return (
    <div className="cover-container">
      <img
        className="video"
        src="https://media.giphy.com/media/lhrt3UOtzMHLDuO7oo/giphy.gif"
        alt="Person typing in his keyboard by media.giphy.com"
      ></img>
      <h1 data-aos="fade-up" data-aos-duration="500" data-aos-mirror="true">
        Hello, I'm Nahuel
      </h1>
      <h4
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-mirror="true"
        className="mb-4"
      >
        A programmer in process
      </h4>
      <i
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-mirror="true"
        class="spinner fas fa-spinner fa-spin"
      ></i>
      <a href="#about" className="down-arrow fad fa-chevron-double-down"></a>
    </div>
  );
};

export default Cover;
