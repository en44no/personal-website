import React from 'react';
import coverVideo from '.././media/coverVideo.mov';
import '../css/Cover.css';

export const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted></video>
      <h1>Hello, I'm Nahuel</h1>
      <h4 className="mb-4">A programmer in process</h4>
      <i class="spinner fas fa-spinner fa-spin"></i>
      <i className="down-arrow fad fa-chevron-double-down"></i>
    </div>
  );
};

export default Cover;
