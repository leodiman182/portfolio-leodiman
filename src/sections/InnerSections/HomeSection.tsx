import { useEffect, useState } from 'react';
import '../../styles/styles.css'
import { MobileTyping, DesktopTyping } from '../../utils/TypingAnimation';

const HomeSection = () => {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    setInterval(() => setShowMessage(true), 6500);
  }, [])

  return (
    <>
      {/* MOBILE */}
      <section data-testid="home-section-mobile" className="flex flex-col md:hidden items-center pt-[40px] md:pt-0">
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
              <div className='h-[24px]'></div>
              )
            }
        </div>
        <article className='font2 mx-auto mt-[50px] mb-[90px] text-white text-[28px] text-center font-medium'>
          Amante das artes, comunicador por natureza e solucionador de problemas
        </article>      
      </section>

      {/* DESKTOP */}
      <section data-testid="home-section-desktop" className="hidden px-[20px] md:flex flex-col items-center pt-[40px] md:pt-0">
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
        <article className='font2 w-[768px] mx-auto mt-[50px] mb-[120px] text-white px-[40px] text-[50px] text-center font-medium leading-[4rem]'>
          Amante das artes, comunicador por natureza e solucionador de problemas
        </article>
      </section>    
    </>
  )
}

export default HomeSection;