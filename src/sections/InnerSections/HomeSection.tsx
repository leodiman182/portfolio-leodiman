import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../../styles/styles.css'

const HomeTyping1 = () => {
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

const HomeSection = () => {
  const [showMessage, setShowMessage] = useState(false)
  useEffect(() => {
    setInterval(() => setShowMessage(true), 6500);
  }, [])

  return (
    <section className="px-[20px]">
      <h2 className="font1 text-my-pink-300 text-[28px] py-[15px] font-bold text-left pl-[30px]">
        <HomeTyping1 />
      </h2>
      {
        showMessage ? (
          <h2 className="font1 text-white text-[28px] font-bold text-left pl-[50px] fadeIn">
            Desenvolvedor Fullstack
          </h2>
        ) : (
          <div className='h-[42px]'></div>
        )
      }
      <article className='font2 w-[750px] mx-auto mt-[40px] mb-[60px] text-my-pink-300 px-[40px] text-[45px] text-center font-bold'>
        Movido pela paixão por diferentes culturas, experiências e soluções de problemas.
      </article>      
    </section>
  )
}

export default HomeSection;