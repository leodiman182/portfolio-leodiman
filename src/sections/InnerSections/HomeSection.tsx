import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../../styles/styles.css'

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

const HomeSection = () => {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    setInterval(() => setShowMessage(true), 6500);
  }, [])

  return (
    <>
      {/* MOBILE */}
      <section className="flex flex-col md:hidden items-center pt-[40px] md:pt-0">
        <div className='flex flex-col items-center'>
          <h2 className="font1 text-my-pink-300 text-center">
            <MobileTyping />
          </h2>
          {
            showMessage ? (
              <h2 className="font1 text-my-pink-300 text-[16px] text-center fadeIn">
                Desenvolvedor Fullstack
              </h2>
            ) : (
              <div className='h-[30px]'></div>
              )
            }
        </div>
        <article className='font2 mx-auto mt-[50px] mb-[90px] text-white text-[28px] text-center font-medium'>
          Movido pela paixão por diferentes culturas, experiências e soluções de problemas.
        </article>      
      </section>

      {/* DESKTOP */}
      <section className="hidden px-[20px] md:flex flex-col items-center pt-[40px] md:pt-0">
        <div className='flex flex-col items-end'>
          <h2 className="font1 text-my-pink-300 text-[28px] text-left">
            <DesktopTyping />
          </h2>
          {
            showMessage ? (
              <h2 className="font1 text-my-pink-300 text-[20px] text-left fadeIn mr-[10px]">
                Desenvolvedor Fullstack
              </h2>
            ) : (
              <div className='h-[30px]'></div>
            )
          }
        </div>
        <article className='font2 w-[768px] mx-auto mt-[50px] mb-[90px] text-white px-[40px] text-[50px] text-center font-medium leading-[4rem]'>
          Movido pela paixão por diferentes culturas, experiências e soluções de problemas.
        </article>      
      </section>    
    </>
  )
}

export default HomeSection;