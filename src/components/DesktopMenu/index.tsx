import { useContext } from 'react';
import { PageContext } from '../../context/PageContext/Context';
import Logo from '../Logo';

const DesktopMenu = () => {
  const { page, setPage } = useContext(PageContext);
  return (
    <section className="hidden md:flex flex-row items-center justify-between">
      <button
        data-testid="desktop-portfolio-button"
        onClick={() => setPage('portfolio')}
        className="relative group hover:cursor-pointer font1"
      >
        <span
          className={
            page === 'portfolio'
              ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 group-hover:opacity-100 duration-150 uppercase'
              : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'
          }
        >
          portfolio
        </span>
        <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-100 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
      </button>
      <button
        data-testid="desktop-resume-button"
        onClick={() => setPage('resume')}
        className="relative group hover:cursor-pointer font1"
      >
        <span
          className={
            page === 'resume'
              ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 group-hover:opacity-100 duration-150 uppercase'
              : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'
          }
        >
          currículo
        </span>
        <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-100 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
      </button>
      <Logo />
      <button
        data-testid="desktop-about-button"
        onClick={() => setPage('about')}
        className="relative group hover:cursor-pointer font1"
      >
        <span
          className={
            page === 'about'
              ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 group-hover:opacity-100 duration-150 uppercase'
              : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'
          }
        >
          sobre mim
        </span>
        <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-100 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
      </button>
      <button
        data-testid="desktop-contact-button"
        onClick={() => setPage('contact')}
        className="relative group hover:cursor-pointer font1"
      >
        <span
          className={
            page === 'contact'
              ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 group-hover:opacity-100 duration-150 uppercase'
              : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'
          }
        >
          contato
        </span>
        <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-my-pink-100 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
      </button>
    </section>
  );
};

export default DesktopMenu;
