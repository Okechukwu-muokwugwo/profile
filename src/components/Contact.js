import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaTwitter, FaLinkedinIn, FaAngellist, FaMedium,
} from 'react-icons/fa';

const Contact = () => (
  <div className="contianer mx-auto border-box">
    <div className="w-full mt-3 mb-3 p-6">
      <div>
        <h1 className="mb-2 text-3xl font-bold text-[#4f5461]">Interested in collaborating?</h1>
        <p className="mt-3 mb-3 text-[#737986]">
          If you have an application you are interested in developing,
          a feature that you need built or a project that need coding,
          I&apos;d love to help you with it.
        </p>
      </div>
    </div>
    <div
      className="w-full bg-scroll bg-[url('./img/contact-background.png')] bg-cover bg-no-repeat font-sora"
    >
      <form className="flex flex-col p-6">
        <label htmlFor="name">
          <input
            className="w-full mb-4 p-5 border rounded-3xl focus:outline-none"
            type="text"
            id="name"
            placeholder="Full name*"
            required
          />
        </label>
        <label htmlFor="email">
          <input
            className="w-full mb-4 p-5 border rounded-3xl outline-none"
            type="email"
            id="email"
            placeholder="email@gmail.com*"
          />
        </label>
        <textarea
          className="w-full mb-4 p-5 border rounded-3xl outline-none placeholder:pl-5 placeholder:pt-5"
          name="message"
          id="message"
          placeholder="Message*"
          rows="10"
          cols="100"
        />
        <button
          type="submit"
          className="w-4/5 mx-auto p-4 rounded-3xl bg-[#fa4969] font-bold text-white"
        >
          Get in touch
        </button>
      </form>
      <p className="px-6 mt-3 text-center text-[#c5cbfe]">okei.muokwugwo@gmail.com</p>
      <div className="flex justify-around space-x-4 p-6 text-3xl text-white">
        <AiFillGithub />
        <FaTwitter />
        <FaLinkedinIn />
        <FaAngellist />
        <FaMedium />
      </div>
      <hr />
      <p className="p-6 text-center text-[#c5cbfe] text-lg">&copy; Okechukwu 2023</p>
    </div>
  </div>
);

export default Contact;
