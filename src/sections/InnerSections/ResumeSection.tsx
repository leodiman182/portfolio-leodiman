import Button from '../../components/Button';
import CoffeeMachine from '../../components/CoffeeMachine';
import skills from '../../utils/skills';

const ProjectsSection = () => {
  return (
    <section className="mb-[100px] md:mb-[50px]">
      <h2 className="font2 text-my-pink-300 text-[26px] md:text-[34px] py-[40px] font-bold text-center md:px-[150px]">
        Desenvolvedor Fullstack morando atualmente em Bauru, SP
      </h2>
      <aside className="flex flex-col items-center">
        <div className="flex flex-row w-full items-center justify-evenly">
          <a
            href="https://drive.google.com/file/d/14AeRbMWZeQypZVXNpSMieRyv9o3-2L_1/view?usp=share_link"
            download
          >
            <Button onClick={() => null} text="baixar currículo" />
          </a>
        </div>
      </aside>
      <article className="md:grid md:grid-cols-2 my-[40px] md:mt-[100px] md:mb-[50px] px-[12px] md:px-0">
        <aside className="md:col-span-1 text-white">
          <h2 className="font2 text-my-pink-300 text-[30px] font-bold text-center md:text-left md:px-[75px] py-[18px] md:py-0">
            Bio
          </h2>
        </aside>
        <aside className="md:col-span-1 md:pr-[75px] text-center md:text-left">
          <p className="font1 text-white text-[18px] font-normal">
            Ingressei na carreira de tecnologia por acaso e acabei me
            encantando. Após transição de carreira, tive a oportunidade e o
            privilégio de estagiar com um desenvolvedor sênior logo no começo
            dos meus estudos, que me abriu as portas e me ensinou tanto na parte
            técnica, quanto pessoal, me ajudando a me enxergar dentro dessa
            área.
            <br />
            <br />
            Alguns meses depois, comecei meus estudos na Trybe, escola de
            desenvolvimento web, buscando ainda mais conhecimento. Em paralelo a
            isso, meu mentor oficializou a criação da empresa e acabou me
            contratando como desenvolvedor no processo.
            <br />
            <br />
            Trabalhei como desenvolvedor front-end na AGA Tecnologia - uma
            startup do interior de São Paulo - por quase dois anos, onde
            descobri uma paixão pelo design e criação de interfaces práticas e
            agradáveis. Para complementar meus conhecimentos, estou estudando UX
            Design em um curso oferecido pela Google, além dos estudos e
            aplicações constantes de novas ferramentas, como NextJS.
            <br />
            <br />
            Antes de programar, graduei em Relações Internacionais pela
            Universidade do Sagrado Coração e atuei como professor de inglês
            durante 3 anos da minha vida. Tive uma experiência menos usual como
            músico, onde lancei álbuns nas plataformas digitais e realizei,
            junto com minha banda, mais de 200 shows e eventos. Além disso, fiz
            um intercâmbio voluntário na República Tcheca onde dei aulas de
            inglês e música.
          </p>
        </aside>
      </article>
      <section className="relative h-[200px]">
        <CoffeeMachine />
      </section>
      <article className="md:grid md:grid-cols-2 my-[40px] md:my-[100px] px-[12px] md:px-0">
        <aside className="col-span-1 text-white ">
          <h2 className="font2 text-my-pink-300 text-[30px] font-bold text-center md:text-left md:px-[75px] py-[24px] md:py-0">
            Habilidades
          </h2>
        </aside>
        <aside className="col-span-1 md:grid md:grid-cols-3">
          {skills.map((el) => (
            <>
              <div className="flex flex-row md:flex-col justify-between md:justify-start row-span-1 md:col-span-1 mb-[30px] md:mb-0">
                <h4 className="uppercase font1 md:text-[20px] text-my-pink-300">
                  {el.skillArea}
                </h4>
                <ul className="text-white font1 md:mt-[20px]">
                  {el.array.map((skill) => (
                    <li className="pb-[5px] text-[18px] text-right md:text-left">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-my-pink-300 h-[1px] w-full my-[25px] md:hidden" />
            </>
          ))}
        </aside>
      </article>
    </section>
  );
};

export default ProjectsSection;
