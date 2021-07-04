import React from 'react';
import '../css/About.css';
import mePhoto from '.././media/me.jpeg';

export const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <div className="about-desc">
          <h3>About me</h3>
          <p>
            Studying the final project of the Programmer Analyst career at ORT
            Uruguay. <br /> Working as an administrative officer in 'Intendencia
            de Maldonado' in the Tax sector. <br /> I am from Piriápolis,
            Uruguay, I currently work there, I study in Maldonado at the CEI
            Institute certified by ORT. <br /> I really enjoy teamwork and
            growing with other people, both at work, in the study, and in life
            itself.
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
