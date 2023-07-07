import { useContext } from 'react';
import './styles.css';
import { BugContext } from '../../context/BugContext/Context';

export default function GlitchAnimation1() {
  const { isBugFixed } = useContext(BugContext);
  return (
    <div className="glitch-wrapper font1 px-[10px] md:px-0">
      <div className={isBugFixed ? 'fixed' : 'glitch'} data-text="Bem vindo!">
        Leonardo Diman
      </div>
    </div>
  );
}
