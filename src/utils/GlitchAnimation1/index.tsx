import './styles.css';
import useSound from 'use-sound';
import glitchSound from '../../sounds/glitch.mp3';
import { useEffect, useState } from 'react';

export default function GlitchAnimation1() {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);

  const [play] = useSound(glitchSound, {
    volume: 0.1,
  });

  useEffect(() => {}, [isSoundPlaying]);

  play();
  return (
    <div className="glitch-wrapper font1 px-[10px] md:px-0">
      <div className="glitch" data-text="Bem vindo!">
        Bem vindo!
      </div>
    </div>
  );
}
