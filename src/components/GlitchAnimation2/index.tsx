import { useContext } from 'react';
import './styles.css';
import { BugContext } from '../../context/BugContext/Context';

export default function GlitchAnimation2() {
  const { isBugFixed } = useContext(BugContext);
  return (
    <div className="glitch-wrapper2">
      <div
        className={isBugFixed ? 'fixed2' : 'glitch2'}
        data-text="Desenvolvedor Fullstack"
      >
        Desenvolvedor Fullstack
      </div>
    </div>
  );
}
