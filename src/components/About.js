import React from 'react';

const About = () => (
  <section className="container mx-auto">
    <main className="p-6">
      <h1 className="m-3 text-4xl font-bold text-[#4f5461]">About me</h1>
      <p className="text-[#737986] text-justify py-2">
        I&apos;m a frontend developer with a passion for aesthetic and intuitive design.
        I specialize in creating visually appealing and user-friendly interfaces using
        HTML, CSS, and JavaScript.
        My goal is to enhance the overall user experience by staying up-to-date with the
        latest industry trends and technologies.
      </p>
      <button
        type="submit"
        className="w-[50%] m-3 p-4 rounded-3xl bg-[#4456fb] font-bold text-white"
      >
        Get my resume
      </button>
      <div className="mt-3 mb-3 bg-[#f5f8fd] rounded-2xl">
        <h1 className="p-4 font-bold text-3xl">Languages</h1>
        <ul className="list-none p-6 space-y-4 text-[#737986] text-xl">
          <li>JavaScript(ES5/ES6)</li>
          <li>Ruby</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <div className="mt-3 mb-3 bg-[#f5f8fd] rounded-2xl">
        <h1 className="p-4 font-bold text-3xl">Frameworks</h1>
        <ul className="list-none p-6 space-y-4 text-[#737986] text-xl">
          <li>React</li>
          <li>Node.js</li>
          <li>Ruby on Rails</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className="mt-3 mb-3 bg-[#f5f8fd] rounded-2xl">
        <h1 className="p-4 font-bold text-3xl">Skills</h1>
        <ul className="list-none p-6 space-y-4 text-[#737986] text-xl">
          <li>Git</li>
          <li>Github</li>
          <li>Gitlab</li>
          <li>Heroku</li>
          <li>Netlify</li>
        </ul>
      </div>
    </main>
  </section>
);

export default About;
