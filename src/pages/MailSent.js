import React from 'react';
import mailSent from '../resources/undraw_check.svg';

const MailSent = () => (
  <div className="mail-container">
    <div className="mail-content">
      <h1 className="p-4 text-3xl text-slate-400">
        Message sent
        <span className="text-purple-500"> successfully!</span>
      </h1>
      <p className="p-4 text-2xl text-slate-500">Thank you</p>
      <img
        src={mailSent}
        alt="message sent"
        className="w-[91px] h-[61px] mt-4 animate-bounce"
      />
    </div>
  </div>
);

export default MailSent;
