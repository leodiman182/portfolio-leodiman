import { useCallback, useContext, useState } from 'react';
import { PageContext } from '../../context/PageContext/Context';
import { AiOutlineLoading } from 'react-icons/ai';

import profilePic from '../../assets/pictures/PERFIL1X1BRANCO.jpg';
import { galleryImages } from '../../assets/pictures/album/exports';

import '../style.css';
import MuiButton from '../../components/MUIButton';
import useSound from 'use-sound';
import hoverSound from '../../sounds/hover.mp3';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const AboutSection = () => {
  const { setPage } = useContext(PageContext);
  const [loaded, setLoaded] = useState(false);
  const onLoad = useCallback(() => setLoaded(true), []);
  const [play] = useSound(hoverSound);

  return (
    <section data-testid="about-section" className="pb-[50px] md:pb-0">
      <h2 className="font2 text-my-pink-300 text-[26px] md:text-[34px] py-[40px] font-bold text-center md:px-[150px]">
        Buscando a presença, comunicação e arte nas coisas mais simples da vida
      </h2>
      <article className="flex flex-col justify-center md:grid md:grid-cols-2 md:mb-[40px]">
        <aside className="mb-[28px] md:mb-0 md:col-span-1">
          <AiOutlineLoading
            size={'3em'}
            className={classNames(
              loaded
                ? 'invisible hidden'
                : 'visible rotating mx-auto md:mt-[40px]'
            )}
          />
          <img
            onLoad={() => onLoad()}
            className={classNames(
              loaded
                ? 'visible p-[8px] bg-my-pink-300 hover:bg-my-pink-100 w-[250px] rounded-full mx-auto duration-150 md:mt-[40px]'
                : 'invisible'
            )}
            src={profilePic}
            alt="Profile pic Leonardo"
          />
        </aside>
        <aside className="animation-fade md:col-span-1 md:pr-[75px] px-[10px] md:px-0">
          <h4 className="font1 text-my-pink-300 text-[20px] text-justify md:text-left uppercase mb-[20px] md:mb-[10px] font-medium">
            Muito prazer! Eu sou o Léo :)
          </h4>
          <p className="font1 text-white text-[18px] font-normal">
            Atualmente, atuo como desenvolvedor fullstack e descobri o prazer
            por aprender através do desenvolvimento. Aprecio cada pequena
            solução encontrada no dia a dia. Em grande escala, sonho contribuir
            com projetos que impactem positivamente a vida de muitas pessoas e
            me tornar referência em alguma tecnologia.
            <br />
            <br />
            Fora do trabalho, amo música (já fiz mais de 200 shows e lancei
            álbuns nas plataformas digitais), sou gamer (coleciono videogames e
            passo horas jogando, se puder) e fui co-host de um podcast
            descontraído (com a marca de 50 episódios no ar) chamado{' '}
            <a
              className="text-my-pink-300 md:text-white hover:text-my-pink-300 duration-150"
              target="_blank"
              href="https://www.youtube.com/@ProsaInterior"
              rel="noreferrer"
            >
              Prosa Interior
            </a>
            <br />
            <br />
            Amo viajar e conhecer pessoas de diferentes lugares, idiomas e
            culturas. Também amo estar em contato com a natureza, acampando ou
            explorando.
          </p>
        </aside>
      </article>
      <div className="w-full mx-auto flex flex-col items-center my-[50px]">
        <MuiButton text="Fale Comigo" onClick={() => setPage('contact')} />
      </div>
      <aside>
        <h3 className="font2 text-my-pink-300 text-[26px] md:text-[34px] py-[40px] md:py-[20px] font-bold text-center md:px-[150px]">
          Um pouco mais de mim
        </h3>
        <div className="grid md:grid-cols-2 w-full xl:w-[1000px] gap-[30px]">
          {galleryImages.map((img, index) => (
            <div
              onMouseEnter={() => play()}
              key={index}
              className="col-span-1 relative w-full h-[300px]"
            >
              <div className="w-full h-full bg-my-pink-300 opacity-0 hover:opacity-90 absolute flex flex-col justify-center items-center duration-150 px-[30px] text-center">
                <h3 className="font2 text-white font-bold text-[28px] hover:cursor-default">
                  {img.alt}
                </h3>
              </div>
              <img
                className={`w-full h-full object-cover ${img.className}`}
                src={img.src}
                alt={img.src}
              />
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default AboutSection;
