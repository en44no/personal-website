import React from 'react';
import ReactSpinner from 'react-bootstrap-spinner';

export const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Nahuel Márquez</h1>
            <h4 className="text-center">Programmer in process</h4>
            <div className="text-center">
              <ReactSpinner type="border" color="light" size="1.5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
