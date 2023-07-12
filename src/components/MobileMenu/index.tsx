/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../context/PageContext/Context';
import Logo from '../Logo';
import { Page } from '../../context/PageContext/Types';
import openMenuSound from '../../sounds/pop.mp3';
import useSound from 'use-sound';
import { menuLinks } from '../../utils/menuLinks';
import './styles.css';

const MobileMenu = () => {
  const { page, setPage } = useContext(PageContext);
  const [playMenuSound] = useSound(openMenuSound);
  const [openMenu, setOpenMenu] = useState(false);
  const mobileMenuButton = document.getElementById('mobile-menu-button');

  function handleMenu(e: any) {
    playMenuSound();
    mobileMenuButton?.classList.toggle('opened');
    setOpenMenu(!openMenu);

    mobileMenuButton?.setAttribute(
      'aria-expanded',
      mobileMenuButton?.classList.contains('opened').toString()
    );
  }

  useEffect(() => {
    playMenuSound();
    mobileMenuButton?.classList.toggle('opened');

    setOpenMenu(!openMenu);
  }, [page]);

  return (
    <nav className="flex flex-row items-center justify-between md:hidden">
      <Logo />
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
      {!openMenu && (
        <article
          id="mobile-menu"
          className="menu-color absolute top-[90px] right-[20px] w-2/3 overflow-y-hidden z-10 text-right rounded-md"
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
      )}
    </nav>
  );
};

export default MobileMenu;
