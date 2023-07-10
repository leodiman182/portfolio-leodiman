/* eslint-disable react-hooks/exhaustive-deps */
import useSound from 'use-sound';
import GlitchAnimation from '../../components/GlitchAnimation1';
import GlitchAnimation2 from '../../components/GlitchAnimation2';
import homeGlitchSound from '../../sounds/home-glitch.mp3';
import turnOnSound from '../../sounds/menu-item-click.mp3';
import turnOffSound from '../../sounds/switch-off.mp3';
import '../../styles/styles.css';
import './styles/home.css';
import { useContext, useEffect, useState } from 'react';
import PowerSwitch from '../../components/PowerSwitch';
import { BugContext } from '../../context/BugContext/Context';
import CustomButtom from '../../components/CustomButton';
import { Tooltip } from '@mui/material';

const HomeSection = () => {
  const { isBugFixed, setIsBugFixed } = useContext(BugContext);
  const [playGlitchSound, { stop }] = useSound(homeGlitchSound, {
    volume: 0.1,
    interrupt: true,
  });
  const [playTurnOnSound] = useSound(turnOnSound);
  const [playTurnOffSound] = useSound(turnOffSound);
  const [showMessage, setShowMessage] = useState(false);

  function handleClick() {
    playTurnOnSound();
    setIsBugFixed(!isBugFixed);
  }

  useEffect(() => {
    if (showMessage) {
      playGlitchSound();
    }
  }, [showMessage]);

  return (
    <>
      {/* MOBILE */}
      <section
        data-testid="home-section-mobile"
        className="flex flex-col md:hidden items-center justify-evenly h-full"
      >
        <div className="flex flex-col relative">
          <GlitchAnimation />
          <GlitchAnimation2 />
          <div className="flex flex-row items-center justify-around mt-[20px]">
            <Tooltip title="Help me fix the bug!" arrow>
              <CustomButtom onClick={handleClick} children="Fix the Bug" />
            </Tooltip>
            {isBugFixed ? (
              <span className="green-neon ml-[4px] text-[20px]">fixed</span>
            ) : (
              <span className="red-neon ml-[4px] text-[20px]">not fixed</span>
            )}
          </div>
          <PowerSwitch
            onClick={() => {
              if (!showMessage) {
                playTurnOnSound();
              } else {
                playTurnOffSound();
                stop();
              }
              setShowMessage(!showMessage);
            }}
          />
        </div>
        <article className="mb-[20px] relative">
          {showMessage ? (
            <h3 className="text-flicker-in-glow font-neon mx-auto text-white text-[32px] text-center font-medium px-[8px]">
              Amante das artes, comunicador por natureza e solucionador de
              problemas
            </h3>
          ) : (
            <h3 className="font-neon mx-auto text-black text-[32px] text-center font-medium px-[8px]">
              Amante das artes, comunicador por natureza e solucionador de
              problemas
            </h3>
          )}
        </article>
      </section>

      {/* DESKTOP */}
      <section
        data-testid="home-section-desktop"
        className="hidden px-[20px] md:flex md:flex-col md:items-center md:justify-evenly h-full"
      >
        <div className="flex flex-col relative">
          <GlitchAnimation />
          <GlitchAnimation2 />
          <div className="flex flex-row items-center justify-around mt-[20px] w-2/3 mx-auto">
            <Tooltip title="Me ajude a arrumar esse bug..." arrow>
              <CustomButtom onClick={handleClick} children="Fix the Bug" />
            </Tooltip>
            <PowerSwitch
              onClick={() => {
                if (!showMessage) {
                  playTurnOnSound();
                } else {
                  playTurnOffSound();
                  stop();
                }
                setShowMessage(!showMessage);
              }}
            />
            {isBugFixed ? (
              <span className="green-neon text-[20px]">fixed</span>
            ) : (
              <span className="red-neon text-[20px]">not fixed</span>
            )}
          </div>
        </div>
        <article className="relative">
          {showMessage ? (
            <h3 className="text-flicker-in-glow font-neon w-[768px] mx-auto text-white px-[28px] text-[50px] text-center font-medium leading-[4rem] ">
              Amante das artes, comunicador por natureza e solucionador de
              problemas
            </h3>
          ) : (
            <h3 className="font-neon w-[768px] mx-auto text-black px-[28px] text-[50px] text-center font-medium leading-[4rem] ">
              Amante das artes, comunicador por natureza e solucionador de
              problemas
            </h3>
          )}
          Amante das artes, comunicador por natureza e solucionador de problemas
        </article>
      </section>
    </>
  );
};

export default HomeSection;
