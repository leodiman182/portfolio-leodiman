import React, { useContext, useEffect } from 'react';
import { PageContext } from '../context/PageContext/Context';
import useSound from 'use-sound';
import switchSound from '../sounds/lightswitch.mp3';
import menuSound from '../sounds/menu.mp3';

const Logo = () => {
  const { page, setPage } = useContext(PageContext);
  const [play] = useSound(switchSound, { volume: 1 });
  const [play2] = useSound(menuSound, { volume: 0.35 });

  useEffect(() => {
    page !== 'home' ? play2() : play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <h2
      onClick={() => setPage('home')}
      className="text-white text-[25px] md:text-[50px] font1 mb-[5px] md:mb-[30px] hover:cursor-pointer duration-150"
    >
      &nbsp;
      <span
        className={
          page === 'home'
            ? 'text-my-pink-100 font-700 group-hover:cursor-pointer duration-150 ease-in-out'
            : 'text-slate-900 font-700 group-hover:cursor-pointer duration-150 ease-in-out'
        }
      >
        &#x0007B;{' '}
      </span>
      dev
      <span
        className={
          page === 'home'
            ? 'text-my-pink-100 group-hover:cursor-pointer duration-150 ease-in-out'
            : 'text-my-pink-500 group-hover:cursor-pointer duration-150 ease-in-out'
        }
      >
        .
      </span>
      leo
      <span
        className={
          page === 'home'
            ? 'text-my-pink-100 font-700 group-hover:cursor-pointer duration-150 ease-in-out'
            : 'text-slate-900 font-700 group-hover:cursor-pointer duration-150 ease-in-out'
        }
      >
        {' '}
        &#x0007D;
      </span>
    </h2>
  );
};

export default Logo;
