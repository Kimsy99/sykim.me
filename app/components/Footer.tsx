import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center text-center md:flex-row md:justify-between gap-y-4">
      <div className="text-gray-500">© 2021 Kim Sheng Yong. All reserved</div>
      <div className="grid grid-cols-3 gap-x-4 self-center">
        <a href="https://github.com/Kimsy99" target="_blank" rel="noreferrer">
          <img
            className="footer__icon transition ease-in-out hover:scale-110	 duration-700"
            src="/svg/github.svg"
            alt=""
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kimsy99/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="footer__icon transition ease-in-out hover:scale-110	 duration-700"
            src="/svg/linkedin.svg"
            alt=""
          />
        </a>
        <a
          href="https://twitter.com/kimsyyy99"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="footer__icon transition ease-in-out hover:scale-110	 duration-700 mt-0.5"
            src="/svg/twitter.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
