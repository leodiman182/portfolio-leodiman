import { useState, useContext, useEffect } from 'react';
// import agaPic from '../../assets/portfolio/single-aga-site/pic-aga.jpg';
// import dvittoPic from '../../assets/portfolio/single-dvitto/pic-dvitto.jpg';
// import landingPic from '../../assets/portfolio/single-landing-bot/pic-landing.jpg';
import bot1 from '../../assets/portfolio/usain-bot/1.jpg';
import bot2 from '../../assets/portfolio/usain-bot/2.jpg';
import bot3 from '../../assets/portfolio/usain-bot/3.jpg';
import bot4 from '../../assets/portfolio/usain-bot/4.jpg';
import bot5 from '../../assets/portfolio/usain-bot/5.jpg';

import mu1 from '../../assets/portfolio/mercado-unido/1.jpg';
import mu2 from '../../assets/portfolio/mercado-unido/2.jpg';
import mu3 from '../../assets/portfolio/mercado-unido/3.jpg';
import mu4 from '../../assets/portfolio/mercado-unido/4.jpg';
import mu5 from '../../assets/portfolio/mercado-unido/5.jpg';
import mu6 from '../../assets/portfolio/mercado-unido/6.jpg';
import mu7 from '../../assets/portfolio/mercado-unido/7.jpg';

import teia1 from '../../assets/portfolio/teia-exp/1.jpg';
import teia2 from '../../assets/portfolio/teia-exp/2.jpg';
import teia3 from '../../assets/portfolio/teia-exp/3.jpg';
import teia4 from '../../assets/portfolio/teia-exp/4.jpg';
import teia5 from '../../assets/portfolio/teia-exp/5.jpg';
import teia6 from '../../assets/portfolio/teia-exp/6.jpg';
import teia7 from '../../assets/portfolio/teia-exp/7.jpg';
import teia8 from '../../assets/portfolio/teia-exp/8.jpg';
import teia9 from '../../assets/portfolio/teia-exp/9.jpg';


import { PageContext } from '../../context/PageContext/Context';

import { AiOutlineCaretLeft } from "react-icons/ai";

const projectsGallery = [
  // {
  //   name: 'site | AGA Tecnologia',
  //   description: 'Esse website foi desenvolvido para a empresa AGA Tecnologia, com o intuito de apresentar um pouco mais sobre a empresa e seus membros de uma forma simples e descontraída, seus produtos e serviços, além de links para contato. ',
  //   singlePage: true,
  //   imageGallery: [
  //     agaPic,
  //   ],
  //   link: 'https://agatecnologia.com/',
  //   color: 'project1',
  //   alt: 'o site da AGA',
  // },
  // {
  //   name: "site | Armazém D'Vitto",
  //   description: "Esse website foi desenvolvido para o Armazém D'Vitto, bar/restaurante da cidade de Bariri, com o intuito de ser um lugar informativo e de apresentação do espaço, com galeria de fotos, links para pedidos delivery e cardápio - tudo isso customizável com uma página administrativa também desenvolvida pela AGA Tecnologia, onde o cliente consegue atualizar praticamente todos os elementos do site, inclusive as cores primárias.",
  //   singlePage: true,
  //   imageGallery: [
  //     dvittoPic,
  //   ],
  //   link: 'https://armazemdvitto.com.br/',
  //   color: 'project2',
  //   alt: "o site do D'Vitto",
  // },
  // {
  //   name: 'landing page | usain-bot',
  //   description: 'Essa landing page foi desenvolvida para a empresa AGA Tecnologia em cima de um estudo feito sobre landing Pages, com o intuito de informar sobre o produto e atrair possíveis leads, deixando o acesso bem prático - a um QR CODE de distância.',
  //   singlePage: true,
  //   imageGallery: [
  //     landingPic,
  //   ],
  //   link: '',
  //   color: 'project3',
  //   alt: 'a landing page do usain-bot',
  // },
  {
    name: 'adm | usain-bot',
    description: 'Essa página foi uma reestilização do zero da parte administrativa de um dos produtos da AGA Tecnologia - o usain-bot. A ideia era trazer uma página administrativa bem mais intuitiva e aconchegante, com um design mais moderno e fácil. Nessa página, o usuário tem acesso à toda a parte administrativa de seu bot, desde configurações de mensagens, cadastro de novos clientes, edição de mensagens e arquivos a serem enviados pelo bot. ',
    imageGallery: [
      bot1, bot2, bot3, bot4, bot5
    ],
    link: 'https://usainbot.com/login',
    alt: 'a página administrativa do bot',
  },
  {
    name: 'site | mercado unido',
    description: 'Essa plataforma começou a ser desenvolvida para um cliente com uma ideia de MVP voltado para a venda no varejo. Projeto reproduzido a partir de protótipo criado no Figma. Site com cards promocionais, formulários de informações e contato, integração com Firebase para autenticação por contas existentes e um layout de "quebra-cabeça" na Home, algo que foi um desafio interessante a ser ultrapassado. Toda a plataforma foi desenvolvida pelo método "mobile first", ou seja, é totalmente responsiva.',
    imageGallery: [
      mu1, mu2, mu3, mu4, mu5, mu6, mu7
    ],
    link: 'https://app-mercado-unido.web.app/',
    alt: 'a plataforma em desenvolvimento do Mercado Unido',
  },
  {
    name: 'site | teia exp',
    description: 'Esse site foi desenvolvido como o MVP de uma startup que tinha como finalidade oferecer às empresas contratantes experiências com foco no desenvolvimento pessoal e de soft skills, visando melhor desempenho no trabalho e melhorando o ambiente de trabalho. A plataforma servia como um lugar onde as experiências, como aulas de cerâmica, teatro, surf e muitas outras, eram exibidas, avaliadas e compartilhadas.',
    imageGallery: [
      teia1, teia2, teia3, teia4, teia5, teia6, teia7, teia8, teia9,
    ],
    link: '',
    color: 'project3',
    alt: 'ao site da TeiaExp',
  },
];

const PortfolioSection = () => {
  const { page } = useContext(PageContext);

  const [selectedProject, setSelectedProject] = useState({
    name: '',
    description: '',
    imageGallery: [''],
    link: '',
  });

  useEffect(() => {
    setSelectedProject({
      name: '',
      description: '',
      imageGallery: [''],
      link: ''
    })
  }, [page])

  return (
    <section className="pb-[100px]">      
      {
        selectedProject.name === '' ? (
          <>
            <h2 className="font2 text-my-pink-300 text-[26px] md:text-[34px] font-bold text-center md:px-[150px] pt-[40px] pb-[25px] md:py-0">
              Criando, experimentando e resolvendo
            </h2>
            <h2 className="font1 text-white md:text-[18px] text-center md:px-[150px] -pt-[20px]">
              Conheça alguns dos projetos que atuei como desenvolvedor
            </h2>
            <div className='pt-[50px] grid md:grid-cols-2 w-full xl:w-[1000px] gap-y-[100px] md:gap-y-[75px] gap-x-[40px]'>
              {
                projectsGallery.map(project => (
                <div className='col-span-1 relative w-full h-[200px] md:h-[275px]'>
                  <h3 className='font1 text-white text-[20px] uppercase pb-[10px]'>
                    { project.name }
                  </h3>
                  <div onClick={() => setSelectedProject({
                    name: project.name,
                    description: project.description,
                    imageGallery: project.imageGallery,
                    link: project.link,
                  })} className={`w-full h-full opacity-0 hover:opacity-90 absolute flex flex-col justify-center items-center duration-150 px-[30px] text-center bg-my-pink-500 hover:cursor-pointer`}>
                    <h3 className='font2 text-white font-bold text-[28px] hover:cursor-default hover:cursor-pointer'>
                      Saiba mais sobre {project.alt}
                    </h3>
                  </div>
                  <img className='w-full h-full object-cover object-top' src={ project.imageGallery[0] } alt={ project.name } />
                </div>
                ))
              }
            </div>          
          </>
        ) : (
          <div className='flex flex-col items-center justify-center xl:w-[1000px] w-full'>
            <div className='flex flex-row items-center justify-center w-full mt-[25px] mb-[50px]'>
              <button onClick={() => setSelectedProject({
                name: '',
                description: '',
                imageGallery: [''],
                link: ''
              })}>
                <AiOutlineCaretLeft className='text-my-pink-300 text-[30px] md:text-[50px] hover:scale-125 duration-150' />
              </button>
              <h3 className='font1 text-my-pink-300 text-[20px] md:text-[28px] uppercase'>
                { selectedProject.name }
              </h3>
            </div>


            <div className={`w-full h-[500px] flex overflow-x-scroll hideSB`}>
                {
                  selectedProject.imageGallery.map(image => (
                    <div className='min-w-[800px] max-h-[500px] ml-[2rem] flex flex-col items-center justify-center'>
                      <img className='w-[800px] object-cover' src={ image } alt={ selectedProject.name } />
                    </div>
                  ))
                }
                {/* <div className='min-w-[10rem] max-h-[10rem] bg-red-300 border-2 border-slate-500 ml-[2rem]'><p className=''>2</p></div>
                <div className='min-w-[10rem] max-h-[10rem] bg-red-300 border-2 border-slate-500 ml-[2rem]'><p className=''>3</p></div>
                <div className='min-w-[10rem] max-h-[10rem] bg-red-300 border-2 border-slate-500 ml-[2rem]'><p className=''>4</p></div>
                <div className='min-w-[10rem] max-h-[10rem] bg-red-300 border-2 border-slate-500 ml-[2rem]'><p className=''>5</p></div>
                <div className='min-w-[10rem] max-h-[10rem] bg-red-300 border-2 border-slate-500 ml-[2rem]'><p className=''>6</p></div> */}
                {/* {
                  selectedProject.imageGallery.map(image => (
                    <div className='col-span-1'>  
                    </div>
                  ))
                } */}
            </div>


            <p className='font1 text-white text-[18px] md:text-[20px] text-center my-[50px]'>
              { selectedProject.description }
            </p>


            <div className='w-full flex flex-col items-center justify-center'>
              <h4 className="uppercase font1 md:text-[20px] text-my-pink-300 mt-[20px]">
                Stacks utilizadas
              </h4>
              <div className="flex flex-row items-center justify-center md:justify-between w-full md:w-[100px] h-[45px] mt-[10px] mb-[45px]">
                <a className='mx-[4px] md:mx-0' href="https://pt-br.reactjs.org/docs/getting-started.html" target='_blank' rel="noreferrer">
                  <svg className="w-[40px] fill-my-pink-300 duration-150 hover:fill-react" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
                </a>
                <a className='mx-[4px] md:mx-0' href="https://tailwindcss.com/docs/installation" target='_blank' rel="noreferrer">
                  <svg className="w-[40px] fill-my-pink-300 duration-150 hover:fill-tailwind" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TailwindCSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
                </a>
              </div>
            </div>
            {
              selectedProject.link !== '' ? (
                <a target='_blank' className='font1 uppercase text-my-pink-300 text-[20px] mt-[15px] mb-[50px] hover:text-black hover:bg-my-pink-100 duration-150' href={ selectedProject.link } rel="noreferrer">
                  Visite o site no ar!  
                </a>              
              ) : (
                <></>
              )
            }
          </div>
        )
      }      
    </section>
  )
}

export default PortfolioSection;