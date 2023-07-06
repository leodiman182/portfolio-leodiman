import '../../styles/styles.css';
import GlitchAnimation from '../../utils/GlitchAnimation1';
import GlitchAnimation2 from '../../utils/GlitchAnimation2';

const HomeSection = () => {
  return (
    <>
      {/* MOBILE */}
      <section
        data-testid="home-section-mobile"
        className="flex flex-col md:hidden items-center pt-[40px] md:pt-0"
      >
        <div className="flex flex-col items-center">
          <GlitchAnimation />
          <GlitchAnimation2 />
        </div>
        <article className="font2 mx-auto mt-[50px] mb-[90px] text-white text-[28px] text-center font-medium px-[16px]">
          Amante das artes, comunicador por natureza e solucionador de problemas
        </article>
      </section>

      {/* DESKTOP */}
      <section
        data-testid="home-section-desktop"
        className="hidden px-[20px] md:flex flex-col items-center pt-[40px] md:pt-0"
      >
        <div className="flex flex-col items-end">
          <GlitchAnimation />
          <GlitchAnimation2 />
        </div>
        <article className="font2 w-[768px] mx-auto mt-[50px] mb-[120px] text-white px-[40px] text-[50px] text-center font-medium leading-[4rem]">
          Amante das artes, comunicador por natureza e solucionador de problemas
        </article>
      </section>
    </>
  );
};

export default HomeSection;
