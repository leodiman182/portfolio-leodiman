import { useState, useContext, useEffect } from 'react';
import { PageContext } from '../../context/PageContext/Context';

import { AiOutlineCaretLeft } from 'react-icons/ai';

import projectsGallery from '../../utils/projectsGallery';
import '../styles.css';
import stackList from '../../utils/stackIcons';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import theme from '../../theme';
import useSound from 'use-sound';
import hoverSound from '../../sounds/hover.mp3';

const PortfolioSection = () => {
  const { page } = useContext(PageContext);
  const [playHoverSound] = useSound(hoverSound);

  const [selectedProject, setSelectedProject] = useState({
    name: '',
    description: '',
    imageGallery: [''],
    link: '',
    stacks: [''],
    github: '',
  });

  useEffect(() => {
    setSelectedProject({
      name: '',
      description: '',
      imageGallery: [''],
      link: '',
      stacks: [],
      github: '',
    });
  }, [page]);

  return (
    <section data-testid="portfolio-section" className="pb-[100px]">
      {selectedProject.name === '' ? (
        <>
          <h2 className="font2 text-my-pink-300 text-[26px] md:text-[34px] font-bold text-center md:px-[150px] pt-[40px] pb-[25px] md:py-0">
            Criando, experimentando e resolvendo
          </h2>
          <h2 className="font1 text-white md:text-[18px] text-center md:px-[150px] -pt-[20px]">
            Conheça alguns dos projetos que atuei como desenvolvedor
          </h2>
          <div className="animation-fade pt-[50px] grid md:grid-cols-2 w-full xl:w-[1000px] gap-y-[100px] md:gap-y-[75px] gap-x-[40px]">
            {projectsGallery.map((project, index) => (
              <div
                key={index}
                className="col-span-1 relative w-full h-[200px] md:h-[275px]"
              >
                <h3 className="font1 text-white text-[20px] uppercase pb-[10px]">
                  {project.name}
                </h3>
                <div
                  onMouseEnter={() => playHoverSound()}
                  onClick={() =>
                    setSelectedProject({
                      name: project.name,
                      description: project.description,
                      imageGallery: project.imageGallery,
                      link: project.link,
                      stacks: project.stacks,
                      github: project.github,
                    })
                  }
                  className={`w-full h-full opacity-0 hover:opacity-90 absolute flex flex-col justify-center items-center duration-150 px-[30px] text-center bg-my-pink-300 hover:cursor-pointer`}
                >
                  <h3 className="font2 text-white font-bold text-[28px] hover:cursor-pointer">
                    Saiba mais sobre {project.alt}
                  </h3>
                </div>
                <img
                  className="w-full h-full object-cover object-top"
                  src={project.imageGallery[0]}
                  alt={project.name}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center xl:w-[1000px] w-full">
          <div className="flex flex-row items-center justify-center w-full mt-[25px] mb-[50px]">
            <button
              onClick={() =>
                setSelectedProject({
                  name: '',
                  description: '',
                  imageGallery: [''],
                  link: '',
                  stacks: [''],
                  github: '',
                })
              }
            >
              <AiOutlineCaretLeft className="text-my-pink-300 text-[30px] md:text-[50px] hover:scale-125 duration-150" />
            </button>
            <h3 className="font1 text-my-pink-300 text-[20px] md:text-[28px] uppercase">
              {selectedProject.name}
            </h3>
          </div>

          {selectedProject.github !== '' && (
            <a href={selectedProject.github} target="_blank" rel="noreferrer">
              <Button
                sx={{
                  fontSize: '20px',
                  color: 'black',
                  backgroundColor: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  borderRadius: '0px',
                  borderWidth: '2px',
                  '&:hover, &.Mui-focusVisible': {
                    backgroundColor: theme.palette.primary.light,
                    borderWidth: '2px',
                    color: 'black',
                    borderColor: theme.palette.primary.light,
                  },
                }}
                variant="contained"
                startIcon={<GitHubIcon />}
              >
                Confira o repositório
              </Button>
            </a>
          )}

          <div className={`w-full h-[500px] flex overflow-x-scroll hideSB`}>
            {selectedProject.imageGallery.map((image, index) => (
              <div
                key={index}
                className="min-w-[800px] max-h-[500px] ml-[2rem] flex flex-col items-center justify-center"
              >
                <img
                  className="w-[800px] object-cover"
                  src={image}
                  alt={selectedProject.name}
                />
              </div>
            ))}
          </div>
          <p className="font1 text-white text-[18px] md:text-[20px] text-center my-[50px]">
            {selectedProject.description}
          </p>
          <div className="w-full flex flex-col items-center justify-center">
            <h4 className="uppercase font1 md:text-[20px] text-my-pink-300 mt-[20px]">
              Stacks utilizadas
            </h4>
            <Stack className="py-[20px]" direction="row" spacing={4}>
              {stackList
                .filter((el) => selectedProject.stacks.includes(el.name))
                .map((stack, index) => (
                  <a
                    key={index}
                    className="mx-[4px] md:mx-0"
                    href={stack.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {stack.icon}
                  </a>
                ))}
            </Stack>
          </div>
          {selectedProject.link !== '' ? (
            <a
              target="_blank"
              className="font1 uppercase text-my-pink-300 text-[18px] mt-[50px] mb-[50px] hover:text-black hover:bg-my-pink-100 duration-150"
              href={selectedProject.link}
              rel="noreferrer"
            >
              Visite o site no ar!
            </a>
          ) : (
            <></>
          )}
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
