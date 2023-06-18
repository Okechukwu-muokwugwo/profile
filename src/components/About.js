import React from 'react';

const About = () => (
  <div className="md:ml-56 p-6">
    <div className="md:mx-20">
      <h1 className="my-3 text-4xl font-bold text-[#4f5461]">About me</h1>
      <p className="md:w-1/2 text-[#737986] text-justify py-2">
        I&apos;m a frontend developer with a passion for aesthetic and intuitive design.
        I specialize in creating visually appealing and user-friendly interfaces using
        HTML, CSS, and JavaScript.
        My goal is to enhance the overall user experience by staying up-to-date with the
        latest industry trends and technologies.
      </p>
      <button
        type="submit"
        className="w-[50%] md:w-1/3 m-3 md:mb-[50px] p-4 rounded-3xl bg-[#4456fb] font-bold text-white"
      >
        Get my resume
      </button>
      <div className="m-full md:flex md:space-x-5 md:mb-[100px] text-[#4f5461]">
        <div className="md:w-2/3 mt-3 mb-3 bg-[#f5f8fd] rounded-2xl">
          <h1 className="p-4 font-bold text-xl">Languages</h1>
          <ul className="list-none p-6 space-y-4 text-[#737986] text-xl md:hover:bg-gradient-to-br from-slate-500 md:hover:text-slate-100">
            <li>JavaScript(ES5/ES6)</li>
            <li>Ruby</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="md:w-2/3 mt-3 mb-3 bg-[#f5f8fd] rounded-2xl">
          <h1 className="p-4 font-bold text-xl">Frameworks</h1>
          <ul className="list-none p-6 space-y-4 text-[#737986] text-xl md:hover:bg-gradient-to-br from-slate-500 md:hover:text-slate-100">
            <li>React</li>
            <li>Node.js</li>
            <li>Ruby on Rails</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className="md:w-2/3 mt-3 mb-3 bg-[#f5f8fd] rounded-2xl">
          <h1 className="p-4 font-bold text-xl">Skills</h1>
          <ul className="list-none p-6 space-y-4 text-[#737986] text-xl md:hover:bg-gradient-to-br from-slate-500 md:hover:text-slate-100">
            <li>Git</li>
            <li>Github</li>
            <li>Gitlab</li>
            <li>Heroku</li>
            <li>Netlify</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;
