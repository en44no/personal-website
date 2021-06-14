import React from 'react';
import coverVideo from '.././media/coverVideo.mov';
import ReactSpinner from 'react-bootstrap-spinner';
import '../css/Cover.css';

export const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted></video>
      <h1>Hello, I'm Nahuel</h1>
      <h4 className="mb-4">A programmer in process</h4>
      <ReactSpinner type="border" color="light" size="1.5" />
    </div>
  );
};

export default Cover;
