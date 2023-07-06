/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../context/PageContext/Context';

import { BiMenu } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import Logo from './Logo';
import { Page } from '../context/PageContext/Types';
import closeMenuSound from '../sounds/close-menu.mp3';
import openMenuSound from '../sounds/open-menu.mp3';
import useSound from 'use-sound';

const MobileMenu = () => {
  const { page, setPage } = useContext(PageContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [playMenuOpenSound] = useSound(openMenuSound);
  const [playMenuCloseSound] = useSound(closeMenuSound);

  const menuLinks = [
    {
      name: 'portfolio',
      ref: 'portfolio',
    },
    {
      name: 'currículo',
      ref: 'resume',
    },
    {
      name: 'sobre mim',
      ref: 'about',
    },
    {
      name: 'contato',
      ref: 'contact',
    },
  ];

  useEffect(() => {
    function handleMenu() {
      const mobileMenu = document.getElementById('mobile-menu');

      if (openMenu === false) {
        mobileMenu?.classList.add('hidden');
      } else {
        mobileMenu?.classList.remove('hidden');
      }
    }
    handleMenu();
  }, [openMenu]);

  useEffect(() => {
    setOpenMenu(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <section className="flex flex-row items-center justify-between md:hidden">
      <Logo />
      <nav className="z-20 items-center">
        <button
          data-testid="mobile-menu-button"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          {openMenu ? (
            <IoCloseOutline
              onClick={() => playMenuCloseSound()}
              className="text-white text-[30px]"
            />
          ) : (
            <BiMenu
              onClick={() => playMenuOpenSound()}
              className="text-white text-[30px]"
            />
          )}
        </button>
        <article
          id="mobile-menu"
          className="bg-black fixed top-[65px] left-0 w-screen h-full p-[25px] overflow-y-hidden z-10 dropdown_menu flex flex-col items-start"
        >
          {menuLinks.map((item, index) => (
            <button
              key={index}
              data-testid={`mobile-${item.ref}-button`}
              onClick={() => setPage(item.ref as Page)}
              className="relative group hover:cursor-pointer font1 text-[35px] py-[15px]"
            >
              <span
                className={
                  page === item.ref
                    ? 'bg-my-pink-100 py-[4px] font-medium text-black opacity-100 uppercase'
                    : 'text-white opacity-80 group-hover:opacity-100 duration-150 uppercase'
                }
              >
                {item.name}
              </span>
              <span className="absolute bottom-[3px] right-0 w-0 h-[1.5px] bg-my-pink-300 group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
            </button>
          ))}
        </article>
      </nav>
    </section>
  );
};

export default MobileMenu;
