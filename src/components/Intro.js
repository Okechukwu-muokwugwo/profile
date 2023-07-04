import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaTwitter, FaLinkedinIn, FaAngellist, FaMedium,
} from 'react-icons/fa';
import '../App.css';

const Intro = () => (
  <div className="w-full md:h-[60vw] bg-[url('./resources/mobile-background.svg')] md:bg-[url('./resources/header-shape.svg')] md:bg-[top_left_250px] bg-cover bg-no-repeat text-white font-sora md:font-roboto" id="intro">
    <div className="p-6">
      <div className="md:absolute md:mx-10 md:left-1/3 md:top-10 ">
        <h1 className="title">Okechukwu</h1>
        <p className="text-lg font-bold">Software Developer</p>
        <p className="md:w-4/5 mt-4 py-2">
          Hello I am a software developer! I can help you build a product, feature or website.
          Look through some of my work and experience! If you like what you see and have
          project you need coded, don’t hesistate to contact me.
        </p>
        <div className="md:relative md:flex md:justify-between md:w-4/5 md:left-2 md:top-2 mt-2 rounded-3xl md:rounded-full bg-white p-4 md:left-10 md:p-1 text-[#4456fb]">
          <p className="p-2 text-black">My works in social networks</p>
          <div className="flex justify-between text-2xl p-2 md:space-x-3">
            <AiFillGithub />
            <FaTwitter />
            <FaLinkedinIn />
            <FaAngellist />
            <FaMedium />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
