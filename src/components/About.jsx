import React from 'react';
import '../css/About.css';
import mePhoto from '.././media/me.jpeg';

export const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-desc">
          <h3>About me here</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus
            ipsa nostrum? Accusamus autem rerum odit, ut eaque facilis! Autem
            dolores voluptate neque quaerat nulla sit provident officia,
            excepturi hic?
          </p>
        </div>
        <div className="about-img">
          <img src={mePhoto} alt="me" />
        </div>
      </div>
    </>
  );
};

export default About;
