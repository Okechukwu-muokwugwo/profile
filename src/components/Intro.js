import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaTwitter, FaLinkedinIn, FaAngellist, FaMedium,
} from 'react-icons/fa';
import '../App.css';

const Intro = () => (
  <section className="w-full bg-[url('./img/mobile-background.svg')] bg-cover bg-no-repeat text-white font-sora">
    <div className="">
      <div className="p-6">
        <div className="flex justify-between py-2 nav-large">
          <div className="p-2 bg-[#4456fb] rounded-[50%] text-white">OK</div>
          <nav className="space-x-5">
            <a href="/portfolio">Portfolio</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
        <h1 className="mt-5 text-5xl font-bold">Okechukwu</h1>
        <h2 className="py-2 text-xl font-bold">Software Developer</h2>
        <p className="mt-4 py-2">
          Hello I am a software developer! I can help you build a product, featre or website.
          Look through some of my work and experience! If you like what you see and have
          project you need coded, don’t hesistate to contact me.
        </p>
        <div className="mt-2 rounded-3xl bg-white p-4 text-[#4456fb]">
          <p className="text-black">My works in social networks</p>
          <div className="flex justify-between text-3xl">
            <AiFillGithub />
            <FaTwitter />
            <FaLinkedinIn />
            <FaAngellist />
            <FaMedium />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
