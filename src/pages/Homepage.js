import React from 'react';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Sidebar from '../components/Sidebar';

const Home = () => (
  <>
    <Sidebar />
    <Intro />
    <Portfolio />
    <About />
    <Contact />
  </>
);

export default Home;
