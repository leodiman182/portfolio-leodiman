const Header = () => {
  return (
    <header className='pt-[100px] p-[20px]'>
      <section className='flex flex-row items-center justify-between'>
        <p className="relative group hover:cursor-pointer font1">
          <span className="text-white opacity-80 group-hover:opacity-100 duration-150 uppercase">portfolio</span>
          <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
        </p>
        <p className="relative group hover:cursor-pointer font1">
          <span className="text-white opacity-80 group-hover:opacity-100 duration-150 uppercase">currículo</span>
          <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
        </p>
        <p className='text-white text-[50px] font1 pb-[30px]'>
          &nbsp;
          <span className='text-my-pink-300 font-700'>&lt;&nbsp;</span>
          dev<span className="text-my-pink-300">.</span>leo
          <span className='text-my-pink-300 font-700'>&nbsp;&nbsp;/&gt;</span>
        </p>
        <p className="relative group hover:cursor-pointer font1">
          <span className="text-white opacity-80 group-hover:opacity-100 duration-150 uppercase">sobre mim</span>
          <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
        </p>
        <p className="relative group hover:cursor-pointer font1">
          <span className="text-white opacity-80 group-hover:opacity-100 duration-150 uppercase">contato</span>
          <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
        </p>
      </section>
      
    </header>
  )
}

export default Header