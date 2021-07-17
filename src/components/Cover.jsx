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
      <h1
        data-aos="zoom-in-right"
        data-aos-duration="200"
        data-aos-mirror="true"
      >
        Hello, I'm Nahuel
      </h1>
      <h4
        data-aos="zoom-in-right"
        data-aos-duration="200"
        data-aos-mirror="true"
        className="mb-4"
      >
        A programmer in process
      </h4>
      <i
        data-aos="zoom-in-right"
        data-aos-duration="200"
        data-aos-mirror="true"
        class="spinner fas fa-spinner fa-spin"
      ></i>
      <button
        className="down-arrow fad fa-chevron-double-down"
        onClick={goToAbout}
      ></button>
    </div>
  );
};

function goToAbout() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

export default Cover;
