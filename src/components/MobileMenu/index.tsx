/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../context/PageContext/Context';
import { BiMenu } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
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

  function handleMenu() {
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

    if (page !== 'home') {
      playMenuOpenSound();
    }
  }, [page]);

  return (
    <nav className="flex flex-row items-center justify-between md:hidden">
      <Logo />
      <button data-testid="mobile-menu-button" onClick={handleMenu}>
        {openMenu ? (
          <IoCloseOutline className="text-white text-[30px] hover:text-my-pink-300 duration-150" />
        ) : (
          <BiMenu className="text-white text-[30px] hover:text-my-pink-300 duration-150" />
        )}
      </button>
      <article
        id="mobile-menu"
        className="menu-color absolute top-[90px] right-[20px] w-2/3 p-[25px] overflow-y-hidden z-10 hidden text-right rounded-md"
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
          </button>
        ))}
      </article>
    </nav>
  );
};

export default MobileMenu;
