import { useState, useContext, useEffect } from 'react';
import agaPic from '../../assets/portfolio/single-aga-site/pic-aga.jpg'
import dvittoPic from '../../assets/portfolio/single-dvitto/pic-dvitto.jpg'
import landingPic from '../../assets/portfolio/single-landing-bot/pic-landing.jpg'
import { PageContext } from '../../context/PageContext/Context';

import { AiOutlineCaretLeft } from "react-icons/ai";

const projectsGallery = [
  {
    name: 'site | AGA Tecnologia',
    description: 'Esse website foi desenvolvido para a empresa AGA Tecnologia, com o intuito de apresentar um pouco mais sobre a empresa e seus produtos e serviços, além de links para contato. O produto foi desenvolvido em ReactJS e TailwindCSS',
    singlePage: true,
    image: agaPic,
    link: 'https://agatecnologia.com/',
    color: 'project1',
  },
  {
    name: "site | Armazém D'Vitto",
    description: "Esse website foi desenvolvido para o Armazém D'Vitto, bar/restaurante com o intuito de apresentar um pouco mais sobre a empresa e seus produtos e serviços, além de links para contato. O produto foi desenvolvido em ReactJS e TailwindCSS",
    singlePage: true,
    image: dvittoPic,
    link: 'https://armazemdvitto.com.br/',
    color: 'project2',
  },
  {
    name: 'landing page | usain-bot',
    description: 'Esse website foi desenvolvido para a empresa AGA Tecnologia, com o intuito de apresentar um pouco mais sobre a empresa e seus produtos e serviços, além de links para contato. O produto foi desenvolvido em ReactJS e TailwindCSS',
    singlePage: true,
    image: landingPic,
    link: '',
    color: 'project3',
  },
];

const PortfolioSection = () => {
  const { page } = useContext(PageContext);

  const [selectedProject, setSelectedProject] = useState({
    name: '',
    description: '',
    image: '',
    link: '',
  });

  useEffect(() => {
    setSelectedProject({
      name: '',
      description: '',
      image: '',
      link: '',
    })
  }, [page])

  return (
    <section className="pb-[50px]">
      
      {
        selectedProject.name === '' ? (
          <>
            <h2 className="font2 text-my-pink-300 text-[26px] md:text-[34px] py-[40px] font-bold text-center md:px-[150px]">
              Criando, experimentando e resolvendo
            </h2>
            <div className='grid md:grid-cols-2 w-full xl:w-[1000px] gap-y-[70px] gap-x-[40px]'>
              {
                projectsGallery.map(project => (
                <div className='col-span-1 relative w-full h-[275px]'>
                  <h3 className='font1 text-white text-[20px] uppercase pb-[10px]'>
                    { project.name }
                  </h3>
                  <div onClick={() => setSelectedProject({
                    name: project.name,
                    description: project.description,
                    image: project.image,
                    link: project.link,
                  })} className={`w-full h-full bg-${project.color} opacity-0 hover:opacity-90 absolute flex flex-col justify-center items-center duration-150 px-[30px] text-center`}>
                    <h3 className='font2 text-white font-bold text-[28px] hover:cursor-default'>
                      Saiba mais
                    </h3>
                  </div>
                  <img className='w-full h-full object-cover object-top' src={ project.image } alt={ project.name } />
                </div>
                ))
              }
            </div>          
          </>
        ) : (
          <div className='flex flex-col items-center justify-center xl:w-[1000px] w-full'>
            <div className='flex flex-row items-center justify-center w-full'>
              <button onClick={() => setSelectedProject({
                name: '',
                description: '',
                image: '',
                link: '',
              })}>
                <AiOutlineCaretLeft className='text-my-pink-300 text-[50px] hover:scale-125 duration-150' />
              </button>
              <h3 className='font1 text-my-pink-300 text-[28px] uppercase'>
                { selectedProject.name }
              </h3>              
            </div>
            <div className='px-[100px] py-[30px]'>
              <p className='font1 text-white text-[24px] text-center'>
                { selectedProject.description }
              </p>
            </div>
            <div className='w-full'>
              <img className='w-full h-[500px] object-cover' src={ selectedProject.image } alt={ selectedProject.name } />
              <a className='text-white' href="">
                link  
              </a>              
            </div>
          </div>
        )
      }      
    </section>
  )
}

export default PortfolioSection;