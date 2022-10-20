import React from "react";
import logo from "../../assets/imgs/logo.png";
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="lg:px-[4rem] md:p-[3rem] p-[1rem] bg-blue-900">
      <div className="flex md:flex-row flex-col md:gap-[4rem] gap-[1rem] ">
        <div>
          <div className="text-blue-400 font-[600] text-[1.1rem]">
            <div className="w-full bg-white">
              <img className="w-[6em] " src={logo} alt="logo" />
            </div>
            <span>
              We can deliver a total solution - bespoke for you. <br />
              We work with you to provide solutions that reflects your <br />
              aspirations and protects your brand values .
            </span>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4 text-white font-[800] text-[1.1rem]">
            <p>Company</p>
            <NavLink to={"/about"}>About </NavLink>
            <NavLink to={"/contact"}>Contact </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
