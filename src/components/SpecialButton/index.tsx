import { useContext } from 'react';
import './styles.css';
import { BugContext } from '../../context/BugContext/Context';
import useSound from 'use-sound';
import clickSound from '../../sounds/menu-item-click.mp3';

export default function SpecialButton() {
  const [playClickSound] = useSound(clickSound);
  const { isBugFixed, setIsBugFixed } = useContext(BugContext);
  console.log(isBugFixed);

  function handleClick() {
    playClickSound();
    setIsBugFixed(!isBugFixed);
  }

  return (
    <button onClick={handleClick} className="glow-on-hover font1">
      Fix bug
    </button>
  );
}
