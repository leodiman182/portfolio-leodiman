import React, { useContext } from 'react';
import { PageContext } from '../context/PageContext/Context';

const DesktopMenu = () => {
  const { page, setPage } = useContext(PageContext);
  return (
    <section className='hidden md:flex flex-row items-center justify-between'>
      <p onClick={() => setPage('portfolio')} className="relative group hover:cursor-pointer font1">
        <span className={page === 'portfolio' ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 group-hover:opacity-100 duration-150 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>portfolio</span>
        <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-100 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
      </p>
      <p onClick={() => setPage('resume')} className="relative group hover:cursor-pointer font1">
        <span className={page === 'resume' ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 group-hover:opacity-100 duration-150 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>currículo</span>
        <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-100 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
      </p>
      <h2 onClick={() => setPage('home')} className='text-white text-[50px] font1 mb-[30px] hover:cursor-pointer duration-150'>
        &nbsp;
        <span className={page === 'home' ? 'text-my-pink-100 font-700 group-hover:cursor-pointer duration-150 ease-in-out' : 'text-my-pink-500 font-700 group-hover:cursor-pointer duration-150 ease-in-out'}>&lt;&nbsp;</span>
        dev<span className={page === 'home' ? "text-my-pink-100 group-hover:cursor-pointer duration-150 ease-in-out" : 'text-my-pink-500 group-hover:cursor-pointer duration-150 ease-in-out'}>.</span>leo
        <span className={page === 'home' ? 'text-my-pink-100 font-700 group-hover:cursor-pointer duration-150 ease-in-out' : 'text-my-pink-500 font-700 group-hover:cursor-pointer duration-150 ease-in-out'}>&nbsp;&nbsp;/&gt;</span>
      </h2>
      <p onClick={() => setPage('about')} className="relative group hover:cursor-pointer font1">
        <span className={page === 'about' ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 group-hover:opacity-100 duration-150 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>sobre mim</span>
        <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-100 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
      </p>
      <p onClick={() => setPage('contact')} className="relative group hover:cursor-pointer font1">
        <span className={page === 'contact' ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 group-hover:opacity-100 duration-150 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>contato</span>
        <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-100 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
      </p>
    </section> 
  )
}

export default DesktopMenu;