import React from 'react';
import Intro from '../components/intro/Intro';
import Portfolio from '../components/portfolio/Portfolio';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Sidebar from '../components/sidebar/Sidebar';

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
