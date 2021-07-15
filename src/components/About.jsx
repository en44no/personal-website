import React from 'react';
import '../css/About.css?vers=1';
import mePhoto from '.././media/me.jpeg';

export const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <div className="about-desc">
          <h3
            data-aos="zoom-in-right"
            data-aos-duration="200"
            data-aos-mirror="true"
            data-aos-delay="1"
          >
            About me
          </h3>
          <p
            data-aos="zoom-in-right"
            data-aos-duration="200"
            data-aos-mirror="true"
          >
            Studying the final project of the Programmer Analyst career at ORT
            Uruguay. <br /> Working as an administrative officer in 'Intendencia
            de Maldonado' in the Tax sector. <br /> I am from Piriápolis,
            Uruguay, I currently work there, I study in Maldonado at the CEI
            Institute certified by ORT. <br /> I really enjoy teamwork and
            growing with other people.
          </p>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-duration="200"
          data-aos-mirror="true"
          data-aos-delay="1"
          className="about-img"
        >
          <img src={mePhoto} alt="me" />
        </div>
      </div>
    </>
  );
};

export default About;
