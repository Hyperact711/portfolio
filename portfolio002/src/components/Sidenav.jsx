// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a onClick={handleNav} href="#main"
            className="btn btn-primary w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            role="button"
          >
            <span>
              <div className="flex justify-center items-center">
                <AiOutlineHome size={20} />
                <span className="pl-4">Home</span>
              </div>
            </span>
          </a>
          <a onClick={handleNav} href="#work"
            className="btn btn-primary w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            role="button"
          >
            <span>
              <div className="flex justify-center items-center">
                <AiOutlineProject size={20} />
                <span className="pl-4">Work</span>
              </div>
            </span>
          </a>
          <a onClick={handleNav} href="#projects"
            className="btn btn-primary w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            role="button"
          >
            <span>
              <div className="flex justify-center items-center">
                <BsPerson size={20} />
                <span className="pl-4">Projects</span>
              </div>
            </span>
          </a>
          <a onClick={handleNav}href="#contact"
            className="btn btn-primary w-[75%] flex justify-center items-center  rounded-full shadow-lg bg-blue-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            role="button"
          >
            <span>
              <div className="flex justify-center items-center">
                <AiOutlineMail size={20} />
                <span className="pl-4">Contact</span>
              </div>
            </span>
          </a>
        </div>
      )
        : (
          ''
    )}
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineHome size={20} />
          </a>
          <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineProject size={20} />
          </a>
          <a href='#about' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsPerson size={20} />
          </a>
          <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
      
    </div>
  );
};
export default Sidenav;
