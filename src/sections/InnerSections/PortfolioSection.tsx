import agaPic from '../../assets/portfolio/single-aga-site/pic-aga.jpg'
import dvittoPic from '../../assets/portfolio/single-dvitto/pic-dvitto.jpg'
import landingPic from '../../assets/portfolio/single-landing-bot/pic-landing.jpg'

const projectsGallery = [
  {
    name: 'AGA Tecnologia',
    description: 'Esse website foi desenvolvido para a empresa AGA Tecnologia, com o intuito de apresentar um pouco mais sobre a empresa e seus produtos e serviços, além de links para contato. O produto foi desenvolvido em ReactJS e TailwindCSS',
    singlePage: true,
    image: agaPic,
    link: 'https://agatecnologia.com/',
  },
  {
    name: "Armazém D'Vitto",
    description: "Esse website foi desenvolvido para o Armazém D'Vitto, bar/restaurante com o intuito de apresentar um pouco mais sobre a empresa e seus produtos e serviços, além de links para contato. O produto foi desenvolvido em ReactJS e TailwindCSS",
    singlePage: true,
    image: dvittoPic,
    link: 'https://armazemdvitto.com.br/',
  },
  {
    name: 'Landing Page usain-bot',
    description: 'Esse website foi desenvolvido para a empresa AGA Tecnologia, com o intuito de apresentar um pouco mais sobre a empresa e seus produtos e serviços, além de links para contato. O produto foi desenvolvido em ReactJS e TailwindCSS',
    singlePage: true,
    image: landingPic,
    link: '',
  },
];

const PortfolioSection = () => {
  return (
    <section className="pb-[50px]">
      <h2 className="font2 text-my-pink-300 text-[26px] md:text-[34px] py-[40px] font-bold text-center md:px-[150px]">
        Criando, experimentando e resolvendo
      </h2>
      <div className='grid md:grid-cols-2 w-full xl:w-[1000px] gap-y-[70px] gap-x-[40px]'>
          {
            projectsGallery.map(project => (
            <div className='col-span-1 relative w-full '>
              <div className='overflow-y-auto h-[330px]'>
                <img className={`w-full h-full object-cover`} src={ project.image } alt={ project.name } />
              </div>
              <h3 className='font1 text-white font-thin text-[20px] hover:cursor-default'>
                { project.name }
              </h3>
            </div>
            ))
          }
        </div>
    </section>
  )
}

export default PortfolioSection;