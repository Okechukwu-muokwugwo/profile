import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './sidebar.css';

const Sidebar = () => (
  <>
    <nav className="nav-bar">
      <div className="logo">
        <p className="text-center pt-1">OK</p>
      </div>
      {[
        ['Home', '#intro'],
        ['Portfolio', '#portfolio'],
        ['About', '#about'],
        ['Contact', '#contact'],
      ].map(([title, url]) => (
        <a
          key={uuidv4()}
          href={url}
          className="w-auto rounded-full md:hover:bg-[#e8effa] text-white text-center md:text-[#4F5461] p-1 text-sm hover:text-[#4456fb]"
        >
          {title}
        </a>
      ))}
    </nav>
  </>
);

export default Sidebar;
