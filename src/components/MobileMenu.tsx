import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from '../context/PageContext/Context';

import { BiMenu } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

// GrFormClose

// BiMenu

const MobileMenu = () => {
  const { page, setPage } = useContext(PageContext);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    function handleMenu() {
      const mobileMenu = document.getElementById('mobile-menu');
      console.log(mobileMenu);
      

      if (openMenu === false) {
        mobileMenu?.classList.add('hidden');
      } else {
        mobileMenu?.classList.remove('hidden');        
      }
    }
    handleMenu();

  }, [openMenu]);

  useEffect(() => {
    console.log(page);
    
    setOpenMenu(false);
    console.log(openMenu);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])


  return (
    <section className='flex flex-row items-center justify-between md:hidden'>
      <h2 onClick={() => setPage('home')} className='text-white text-[30px] font1 hover:cursor-pointer'>
        &nbsp;
        <span className='text-my-pink-300 font-700'>&lt;&nbsp;</span>
        dev<span className="text-my-pink-300">.</span>leo
        <span className='text-my-pink-300 font-700'>&nbsp;&nbsp;/&gt;</span>
      </h2>
      <nav className='z-20'>
        <button onClick={() => {setOpenMenu(!openMenu)}}>
          {
            openMenu ? (
              <IoCloseOutline className='text-white text-[30px]' />
            ) : (
              <BiMenu className='text-white text-[30px]' />
            )
          }
        </button>
        <article id='mobile-menu' className='bg-black fixed top-[65px] left-0 w-screen h-full p-[25px] overflow-y-hidden z-10 dropdown_menu'>
          <p onClick={() => setPage('portfolio')} className="relative group hover:cursor-pointer font1 text-[35px] py-[15px]">
            <span className={page === 'portfolio' ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>portfolio</span>
            <span className="absolute bottom-[3px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
          </p>
          <p onClick={() => setPage('resume')} className="relative group hover:cursor-pointer font1 text-[35px] py-[15px]">
            <span className={page === 'resume' ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>currículo</span>
            <span className="absolute bottom-[3px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
          </p>
          <p onClick={() => setPage('about')} className="relative group hover:cursor-pointer font1 text-[35px] py-[15px]">
            <span className={page === 'about' ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>sobre mim</span>
            <span className="absolute bottom-[3px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
          </p>
          <p onClick={() => setPage('contact')} className="relative group hover:cursor-pointer font1 text-[35px] py-[15px]">
            <span className={page === 'contact' ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>contato</span>
            <span className="absolute bottom-[3px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
          </p>
        </article>
      </nav>
    </section>
  )
};

export default MobileMenu;
