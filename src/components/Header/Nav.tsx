import React from 'react'
import {motion} from "framer-motion"

const NavButton = ({name, active}:any) => {
    return (
        <motion.button
         whileHover={{ scale: 1.2}}
        whileTap={{
          scale: 0.8,
        }}
   className={`font-[700] ${active && "text-white"} `}>{name}
        </motion.button>
    )
}

const Nav = () => {
  return (
    <div className='flex justify-between '>
        <motion.div
         whileHover={{ scale: 1.2}}
        whileTap={{
          scale: 0.8,
        }}
        className='border px-[.6em] '>
          <p className='font-[700] text-[1em] tracking-[.3em]  cursor-pointer'>SQAURE<span className='bg-white text-black'> ACRE</span></p>
        </motion.div>
        <div className='flex gap-5'>
           <NavButton name="Home" active={true} />
           <NavButton name="About Us" />
           <NavButton name="Contact Us" />
        </div>
    </div>
  )
}

export default Nav