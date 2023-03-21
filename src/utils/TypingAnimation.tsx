import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const DesktopTyping = () => {
  return (
    <TypeAnimation
      sequence={[
        'OLÁ!',
        1000,
        'MUITO PRAZER,',
        2000,
        'EU SOU O LÉO :)',
        2500,
      ]}
      wrapper="div"
      cursor={true}
      repeat={0}
      style={{ fontSize: '45px' }}
    />
  );
};

const MobileTyping = () => {
  return (
    <TypeAnimation
      sequence={[
        'OLÁ!',
        1000,
        'MUITO PRAZER,',
        2000,
        'EU SOU O LÉO :)',
        2500,
      ]}
      wrapper="div"
      cursor={true}
      repeat={0}
      style={{ fontSize: '25px' }}
    />
  );
};

export { DesktopTyping, MobileTyping };