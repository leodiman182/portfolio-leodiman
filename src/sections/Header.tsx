import { useContext } from "react"
import { PageContext } from "../context/PageContext/Context"

const Header = () => {
  const { page, setPage } = useContext(PageContext);
  return (
    <header className='pt-[20px] px-[20px] xl:px-0'>
      {/* MOBILE */}
      <section className='flex flex-col items-center justify-between md:hidden'>
        <h2 onClick={() => setPage('home')} className='text-white text-[50px] font1 pb-[30px] hover:cursor-pointer'>
          &nbsp;
          <span className='text-my-pink-300 font-700'>&lt;&nbsp;</span>
          dev<span className="text-my-pink-300">.</span>leo
          <span className='text-my-pink-300 font-700'>&nbsp;&nbsp;/&gt;</span>
        </h2>
        <p onClick={() => setPage('portfolio')} className="relative group hover:cursor-pointer font1 text-[24px] py-[5px]">
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
        </p>
      </section>

      {/* DESKTOP */}
      <section className='hidden md:flex flex-row items-center justify-between'>
        <p onClick={() => setPage('portfolio')} className="relative group hover:cursor-pointer font1">
          <span className={page === 'portfolio' ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 group-hover:opacity-100 duration-150 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>portfolio</span>
          <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-100 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
        </p>
        <p onClick={() => setPage('resume')} className="relative group hover:cursor-pointer font1">
          <span className={page === 'resume' ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 group-hover:opacity-100 duration-150 uppercase' : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'}>currículo</span>
          <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-100 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
        </p>
        <h2 onClick={() => setPage('home')} className='text-white text-[50px] font1 mb-[30px] hover:cursor-pointer hover:scale-105 duration-150'>
          &nbsp;
          <span className='text-my-pink-300 font-700 group-hover:cursor-pointer'>&lt;&nbsp;</span>
          dev<span className="text-my-pink-300 group-hover:cursor-pointer">.</span>leo
          <span className='text-my-pink-300 font-700 group-hover:cursor-pointer'>&nbsp;&nbsp;/&gt;</span>
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
    </header>
  )
}

export default Header