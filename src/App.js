import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cover } from './components/Cover';
import { Navbar } from './components/NavBar';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { GoTop } from './components/GoTop';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight]);

  return (
    <>
      <div className='App'>
        <Navbar isScrolling={scrollHeight} />
        <GoTop isScrolling={scrollHeight} />
        <Cover />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
