import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaTwitter, FaLinkedinIn, FaAngellist, FaMedium,
} from 'react-icons/fa';
import './intro.css';

const Intro = () => (
  <div className="intro-container" id="intro">
    <div className="intro-content">
      <div className="author">
        <h1 className="author-name">Pete</h1>
        <p className="author-role">Software Developer</p>
        <p className="author-summary">
          Hello I am a software developer! I can help you build a product, feature or website.
          Look through some of my work and experience! If you like what you see and have
          project you need coded, don’t hesistate to contact me.
        </p>
      </div>
      <div className="search-bar">
        <p className="p-2 text-black">My works in social networks</p>
        <ul className="social-media">
          <li><a href="https://github.com/apt2tell" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><AiFillGithub /></a></li>
          <li><a href="https://twitter.com/@excel4eva" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a></li>
          <li><a href="https://www.linkedin.com/in/okeimuokwugwo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
          <li><a href="https://wellfound.com/u/okechukwu-muokwugwo" target="_blank" rel="noopener noreferrer" aria-label="AngelList"><FaAngellist /></a></li>
          <li><a href="https://medium.com/@excel4va" target="_blank" rel="noopener noreferrer" aria-label="Medium"><FaMedium /></a></li>
        </ul>
      </div>

    </div>
  </div>
);

export default Intro;
