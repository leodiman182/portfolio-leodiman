import React, { useContext } from 'react';
import { PageContext } from '../context/PageContext/Context';

const Logo = () => {
  const { page, setPage } = useContext(PageContext);
  return (
    <h2 onClick={() => setPage('home')} className='text-white text-[50px] font1 mb-[30px] hover:cursor-pointer duration-150'>
      &nbsp;
      <span className={page === 'home' ? 'text-my-pink-100 font-700 group-hover:cursor-pointer duration-150 ease-in-out' : 'text-slate-900 font-700 group-hover:cursor-pointer duration-150 ease-in-out'}>&#x0007B; </span>
      dev<span className={page === 'home' ? "text-my-pink-100 group-hover:cursor-pointer duration-150 ease-in-out" : 'text-my-pink-500 group-hover:cursor-pointer duration-150 ease-in-out'}>.</span>leo
      <span className={page === 'home' ? 'text-my-pink-100 font-700 group-hover:cursor-pointer duration-150 ease-in-out' : 'text-slate-900 font-700 group-hover:cursor-pointer duration-150 ease-in-out'}> &#x0007D;</span>
    </h2>
  )
}

export default Logo;