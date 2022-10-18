import React, {useState} from "react";
import { motion } from "framer-motion";
import logo from "../../assets/imgs/logo.png";

const NavButton = ({ name, active, setActiveNav, setActive}: any) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{
        scale: 0.8,
      }}

      onClick={()=> {
        setActiveNav(name);
        setActive(false);
      }}
      className={`font-[700] ${active === name && "bg-white w-full "} `}
    >
      {name}
    </motion.button>
  );
};

const Nav = (props:any) => {

    const [activeNav, setActiveNav] = useState("")

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 0.8,
        }}
        className=" backdrop-blur-md "
      >
        <img className="md:w-[10em] w-[7em]" src={logo} alt="logo" />
      </motion.div>
      <div className="absolute inset-0 h-screen backdrop-blur-md z-[999] w-full">
        <p
          onClick={() => props.setActive(false)}
          className="text-right font-[700]  text-[1.5rem] p-[1.4rem]"
        >
          x
        </p>
        <motion.div className="flex flex-col gap-5  py-[2rem] ">
          <NavButton
            name="Home"
            active={activeNav}
            setActiveNav={setActiveNav}
            setActive={props.setActive}
          />
          <NavButton
            name="About Us"
            active={activeNav}
            setActiveNav={setActiveNav}
            setActive={props.setActive}
          />
          <NavButton
            name="Contact Us"
            active={activeNav}
            setActiveNav={setActiveNav}
            setActive={props.setActive}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Nav;
