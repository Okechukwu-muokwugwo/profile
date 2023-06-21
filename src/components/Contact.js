import React from 'react';
import { Form } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaTwitter, FaLinkedinIn, FaAngellist, FaMedium,
} from 'react-icons/fa';

const Contact = () => {
  const inputClass = 'w-[82vw] md:w-[22.5vw] mt-[18px] md:mb-[21px] p-4 border rounded-2xl focus:outline-none';
  return (
    <div className="w-full mx-auto font-roboto" id="contact">
      <h1 className="contact-title">Interested in collaborating?</h1>
      <p className="contact-msg">
        If you have an application you are interested in developing,
        a feature that you need built or a project that need coding,
        I’d love to help you with it.
      </p>
      <Form method="post" action="#contact" className="w-full bg-[url('./img/contact-background.png')] md:bg-[url('./img/footer-shape.svg')] bg-cover bg-no-repeat">
        <div className="mx-6 md:ml-72 md:mx-20 flex flex-col md:flex-row md:space-x-10">
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              placeholder="Full name*"
              className={inputClass}
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="E-mail*"
              className={inputClass}
            />
          </label>
        </div>
        <textarea
          minLength={10}
          rows={6}
          placeholder="Message*"
          className="w-5/6 md:w-1/2 mx-6 mt-[16px] md:ml-72 md:mx-20 md:pl-20 mb-[21px] md:pe-s p-2 border rounded-3xl outline-none placeholder:pl-5 placeholder:pt-5"
        />
        <div className="mx-6 md:ml-56">
          <button
            type="submit"
            className="w-full mb-[36px] md:w-1/5 md:ml-16 p-4 rounded-full bg-[#fa4969] font-bold text-white"
          >
            Get in touch
          </button>
          <div className="flex justify-center md:justify-end items-center md:items-end flex-col md:content-end md:flex-wrap text-[#c5cbfe] md:pr-20">
            <p className="p-2 text-sm">okei.muokwugwo@gmail.com</p>
            <div className="w-full flex justify-between md:justify-end p-2 text-xl text-white border-b-2">
              <AiFillGithub />
              <FaTwitter />
              <FaLinkedinIn />
              <FaAngellist />
              <FaMedium />
            </div>
            <p className="p-2 text-sm">&copy; Okechukwu 2023</p>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
