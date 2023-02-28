import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../../styles/styles.css'

const HomeTyping1 = () => {
  return (
    <TypeAnimation
      sequence={[
        'Olá!', // Types 'One'
        1000, // Waits 1s
        'Muito prazer,', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'eu sou o Léo :)', // Types 'Three' without deleting 'Two'
        2500,
      ]}
      wrapper="div"
      cursor={true}
      repeat={0}
      style={{ fontSize: '50px' }}
    />
  );
};

const HomeSection = () => {
  const [showMessage, setShowMessage] = useState(false)
  useEffect(() => {
    setInterval(() => setShowMessage(true), 6500);
  }, [])

  return (
    <section className="px-[20px]">
      <h2 className="font1 text-my-pink-300 text-[28px] py-[15px] font-bold text-left pl-[50px]">
        <HomeTyping1 />
      </h2>
      {
        showMessage && (
          <h2 className="font2 text-white text-[35px] font-bold text-left pl-[50px] fadeIn">
            Desenvolvedor Fullstack
          </h2>
        )
      }
    </section>
  )
}

export default HomeSection;