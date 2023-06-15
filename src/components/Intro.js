import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaTwitter, FaLinkedinIn, FaAngellist, FaMedium,
} from 'react-icons/fa';
import '../App.css';

const Intro = () => {
  const buttonClass = 'md:w-20 md:p-1 hover:text-center md:text-[#4f5461] md:rounded-full hover:bg-[#e8effa] hover:text-[#4456fb]';
  return (
    <section className="w-full md:static bg-[url('./img/mobile-background.svg')] bg-cover bg-no-repeat text-white font-sora">
      <div className="">
        <div className="p-6">
          <div className="flex justify-between md:flex-col">
            <div className="p-2 bg-[#4456fb] rounded-[50%] md:rounded-full md:w-10 md:mb-10 font-bold text-white">OK</div>
            <nav className="space-x-5 md:flex md:flex-col md:space-x-0 md:space-y-5">
              <a href="/intro" className={buttonClass}>Intro</a>
              <a href="/portfolio" className={buttonClass}>Portfolio</a>
              <a href="/about" className={buttonClass}>About</a>
              <a href="/contact" className={buttonClass}>Contact</a>
            </nav>
          </div>
          <div className="md:absolute md:left-1/3 md:top-10">
            <h1 className="mt-5 text-5xl font-bold">Okechukwu</h1>
            <h2 className="py-2 text-xl font-bold">Software Developer</h2>
            <p className="mt-4 py-2">
              Hello I am a software developer! I can help you build a product, featre or website.
              Look through some of my work and experience! If you like what you see and have
              project you need coded, don’t hesistate to contact me.
            </p>
            <div className="md:relative md:flex md:justify-between md:w-[600px] md:left-2 md:top-2 mt-2 rounded-3xl md:rounded-full bg-white p-4 md:left-10 md:p-1 text-[#4456fb]">
              <p className="p-2 text-black">My works in social networks</p>
              <div className="flex justify-between text-2xl p-2 md:space-x-2">
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
    </section>
  );
};

export default Intro;
