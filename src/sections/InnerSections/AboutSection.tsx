import { useContext } from 'react';
import { PageContext } from '../../context/PageContext/Context';
import profilePic from '../../assets/pictures/PERFIL1X1BRANCO.jpg';

import image1 from '../../assets/pictures/album/1.jpg';
import image2 from '../../assets/pictures/album/2.jpg';
import image3 from '../../assets/pictures/album/3.jpg';
import image4 from '../../assets/pictures/album/4.jpg';
import image5 from '../../assets/pictures/album/5.jpg';
import image7 from '../../assets/pictures/album/7.jpg';
import image9 from '../../assets/pictures/album/9.jpg';
import image10 from '../../assets/pictures/album/10.jpg';

const galleryImages = [
  {
    alt: 'Fazendo umas das coisas que mais amo - tocar!',
    src: image10,
    className: '',
  },
  {
    alt: 'Prosa Interior - um podcast de Bariri para o mundo',
    src: image1,
    className: '',
  },
  {
    alt: 'Evento de tecnologia no interior de São Paulo com a AGA!',
    src: image3,
    className: '',
  }, 
  {
    alt: 'Cachoeira Monte Sião em Analândia - SP',
    src: image5,
    className: 'object-top',
  },
  {
    alt: 'Viajando com minha mãe para o Chile',
    src: image4,
    className: '',
  },
  {
    alt: 'Evento beneficente realizado pelo Prosa Interior',
    src: image2,
  },
  {
    alt: 'Intercâmbio de 2011 nos EUA',
    src: image7,
    className: '',
  },
  {
    alt: 'Intercâmbio voluntário na República Tcheca em 2018',
    src: image9,
    className: 'object-top',
  },
]

const AboutSection = () => {
  const { setPage } = useContext(PageContext);

  return (
    <section className='pb-[50px] md:pb-0'>
      <h2 className="font2 text-my-pink-300 text-[26px] md:text-[34px] py-[40px] font-bold text-center md:px-[150px]">
        Buscando a presença, comunicação e arte nas coisas mais simples da vida
      </h2>
      <article className="flex flex-col justify-center md:grid md:grid-cols-2 md:mb-[40px]">
        <aside className="mb-[28px] md:mb-0 md:col-span-1">
          <img className='p-[8px] bg-my-pink-300 hover:bg-my-pink-100 w-[250px] rounded-full mx-auto duration-150 md:mt-[40px]' src={ profilePic } alt="Profile pic Leonardo" />
        </aside>
        <aside className="md:col-span-1 md:pr-[75px] px-[10px] md:px-0">
          <h4 className="font1 text-my-pink-300 text-[20px] text-justify md:text-left uppercase mb-[20px] md:mb-[10px] font-medium">
            Muito prazer! Eu sou o Léo :)
          </h4>
          <p className="font1 text-white text-[18px] font-normal">
            Atualmente, atuo como desenvolvedor fullstack e descobri o prazer por aprender através do desenvolvimento. Aprecio cada pequena solução encontrada no dia a dia. 
            Em grande escala, sonho contribuir com projetos que impactem positivamente a vida de muitas pessoas e me tornar referência em alguma tecnologia.
            <br /><br />
            Fora do trabalho, amo música (já fiz mais de 200 shows e lancei álbuns nas plataformas digitais), sou gamer (coleciono videogames e passo horas jogando, se puder) e fui co-host de um podcast descontraído (com a marca de 50 episódios no ar) chamado <a className='text-my-pink-300 md:text-white hover:text-my-pink-300 duration-150' target='_blank' href="https://www.youtube.com/watch?v=-f7KWPMzFTk&t=3s&ab_channel=DevChallenge" rel="noreferrer">Prosa Interior</a>
            <br /><br />
            Amo viajar e conhecer pessoas de diferentes lugares, idiomas e culturas. Também amo estar em contato com a natureza, acampando ou explorando.
          </p>
        </aside>
      </article>
      <div className='w-full mx-auto flex flex-col items-center my-[50px]'>
        <button onClick={() => setPage('contact')} className="bg-black text-my-pink-300 border-my-pink-300 border-[2px] py-[2px] text-[26px] px-[30px] duration-150 hover:bg-my-pink-100 hover:border-my-pink-100 hover:text-black">
          FALE COMIGO
        </button>
      </div>
      <aside>
        <h3 className="font2 text-my-pink-300 text-[26px] md:text-[34px] py-[40px] md:py-[20px] font-bold text-center md:px-[150px]">
          Um pouco mais de mim
        </h3>
        <div className='grid md:grid-cols-2 w-full xl:w-[1000px] gap-[30px]'>
          {
            galleryImages.map(img => (
            <div className='col-span-1 relative w-full h-[300px]'>
              <div className='w-full h-full bg-my-pink-300 opacity-0 hover:opacity-90 absolute flex flex-col justify-center items-center duration-150 px-[30px] text-center'>
                <h3 className='font2 text-white font-bold text-[28px] hover:cursor-default'>
                  { img.alt }
                </h3>
              </div>
              <img className={`w-full h-full object-cover ${ img.className}`} src={ img.src } alt={ img.src } />
            </div>
            ))
          }
        </div>
      </aside>
    </section>
  )
}

export default AboutSection;