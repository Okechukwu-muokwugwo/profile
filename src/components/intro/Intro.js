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
        <h1 className="author-name">Okechukwu</h1>
        <p className="author-role">Software Developer</p>
        <p className="author-summary">
          Hello I am a software developer! I can help you build a product, feature or website.
          Look through some of my work and experience! If you like what you see and have
          project you need coded, don’t hesistate to contact me.
        </p>
      </div>
      <div className="search-bar">
        <p className="p-2 text-black">My works in social networks</p>
        <div className="social-media">
          <AiFillGithub />
          <FaTwitter />
          <FaLinkedinIn />
          <FaAngellist />
          <FaMedium />
        </div>
      </div>

    </div>
  </div>
);

export default Intro;
