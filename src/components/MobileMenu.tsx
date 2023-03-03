import React, { useContext, useState } from 'react';
import { PageContext } from '../context/PageContext/Context';

import { BiMenu } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

// GrFormClose

// BiMenu

const MobileMenu = () => {
  const { page, setPage } = useContext(PageContext);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className='flex flex-row items-center justify-between md:hidden'>
      <h2 onClick={() => setPage('home')} className='text-white text-[30px] font1 hover:cursor-pointer'>
        &nbsp;
        <span className='text-my-pink-300 font-700'>&lt;&nbsp;</span>
        dev<span className="text-my-pink-300">.</span>leo
        <span className='text-my-pink-300 font-700'>&nbsp;&nbsp;/&gt;</span>
      </h2>
      <nav>
        <button>
          {
            openMenu ? (
              <button onClick={() => setOpenMenu(!openMenu)}>
                <IoCloseOutline className='text-white text-[30px]' />
              </button>
            ) : (
              <button onClick={() => setOpenMenu(!openMenu)}>
                <BiMenu className='text-white text-[30px]' />
              </button>
            )
          }
        </button>
        <article>

        </article>
        {/* <p onClick={() => setPage('portfolio')} className="relative group hover:cursor-pointer font1 text-[24px] py-[5px]">
          <span className={page === 'portfolio' ? 'border-white border-b-[1px] text-white opacity-80 group-hover:opacity-100 duration-150 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>portfolio</span>
          <span className="absolute bottom-[3px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
        </p>
        <p onClick={() => setPage('resume')} className="relative group hover:cursor-pointer font1 text-[24px] py-[5px]">
          <span className={page === 'resume' ? 'border-white border-b-[1px] text-white opacity-80 group-hover:opacity-100 duration-150 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>currículo</span>
          <span className="absolute bottom-[3px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
        </p>
        <p onClick={() => setPage('about')} className="relative group hover:cursor-pointer font1 text-[24px] py-[5px]">
          <span className={page === 'about' ? 'border-white border-b-[1px] text-white opacity-80 group-hover:opacity-100 duration-150 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>sobre mim</span>
          <span className="absolute bottom-[3px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
        </p>
        <p onClick={() => setPage('contact')} className="relative group hover:cursor-pointer font1 text-[24px] py-[5px]">
          <span className={page === 'contact' ? 'border-white border-b-[1px] text-white opacity-80 group-hover:opacity-100 duration-150 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>contato</span>
          <span className="absolute bottom-[3px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
        </p> */}
      </nav>
    </section>
  )
};

export default MobileMenu;
