/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../context/PageContext/Context';
import Logo from '../Logo';
import { Page } from '../../context/PageContext/Types';
import openMenuSound from '../../sounds/open-menu.mp3';
import useSound from 'use-sound';
import { menuLinks } from '../../utils/menuLinks';
import './styles.css';

const MobileMenu = () => {
  const { page, setPage } = useContext(PageContext);
  const [playMenuOpenSound] = useSound(openMenuSound);
  const [openMenu, setOpenMenu] = useState(false);
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuButton = document.getElementById('mobile-menu-button');

  // function handleMenu() {
  //   playMenuOpenSound();
  //   setOpenMenu(!openMenu);

  //   if (
  //     mobileMenu?.classList.contains('hidden') ||
  //     mobileMenu?.classList.contains('slide-out-blurred-bottom')
  //   ) {
  //     mobileMenu?.classList.add('slide-in-blurred-bottom');
  //     mobileMenu?.classList.remove('slide-out-blurred-bottom');
  //     mobileMenu?.classList.remove('hidden');
  //   } else {
  //     mobileMenu?.classList.add('slide-out-blurred-bottom');
  //     mobileMenu?.classList.remove('slide-in-blurred-bottom');
  //   }
  // }

  function handleMenu(e: any) {
    mobileMenuButton?.classList.toggle('opened');
    mobileMenuButton?.setAttribute(
      'aria-expanded',
      mobileMenuButton?.classList.contains('opened').toString()
    );
    playMenuOpenSound();
    setOpenMenu(!openMenu);

    if (
      mobileMenu?.classList.contains('hidden') ||
      mobileMenu?.classList.contains('slide-out-blurred-bottom')
    ) {
      mobileMenu?.classList.add('slide-in-blurred-bottom');
      mobileMenu?.classList.remove('slide-out-blurred-bottom');
      mobileMenu?.classList.remove('hidden');
    } else {
      mobileMenu?.classList.add('slide-out-blurred-bottom');
      mobileMenu?.classList.remove('slide-in-blurred-bottom');
    }
  }

  useEffect(() => {
    mobileMenu?.classList.add('slide-out-blurred-bottom');
    mobileMenu?.classList.remove('slide-in-blurred-bottom');
    setOpenMenu(false);

    mobileMenuButton?.classList.toggle('opened');
    mobileMenuButton?.setAttribute(
      'aria-expanded',
      mobileMenuButton?.classList.contains('opened').toString()
    );
    if (page !== 'home') {
      playMenuOpenSound();
    }
  }, [page]);

  // useEffect(() => {
  //   if (!openMenu) {
  //     mobileMenu?.classList.add('hidden');
  //   } else {
  //     mobileMenu?.classList.remove('hidden');
  //   }
  // }, [openMenu]);

  return (
    <nav className="flex flex-row items-center justify-between md:hidden">
      <Logo />
      {/* <button data-testid="mobile-menu-button" onClick={handleMenu}>
        {openMenu ? (
          <IoCloseOutline className="text-white text-[30px] hover:text-my-pink-300 duration-150" />
        ) : (
          <BiMenu className="text-white text-[30px] hover:text-my-pink-300 duration-150" />
        )}
      </button> */}
      <button
        id="mobile-menu-button"
        className="menu"
        onClick={(e) => handleMenu(e)}
        aria-label="Main Menu"
      >
        <svg viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <article
        id="mobile-menu"
        className="menu-color absolute top-[90px] right-[20px] w-2/3 overflow-y-hidden z-10 hidden text-right rounded-md"
      >
        <div className="w-full pr-[15px] flex flex-col items-end justify-end">
          {menuLinks.map((item, index) => (
            <button
              key={index}
              data-testid={`mobile-${item.ref}-button`}
              onClick={() => setPage(item.ref as Page)}
              className="relative group hover:cursor-pointer font1 text-[22px] md:text-[35px] py-[15px] block text-right"
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
            </button>
          ))}
        </div>
      </article>
    </nav>
  );
};

export default MobileMenu;
