const skills = [
  {
    skillArea: 'front-end',
    array: [
      'ReactJS',
      'React Router',
      'TailwindCSS',
      'VueJS',
      'Bootstrap',
      'RTL',
      'CSS',
    ]
  },
  {
    skillArea: 'back-end',
    array: [
      'Typescript',
      'NodeJS',
      'Express',
      'REST',
      'JWT',
      'POO',
      'MySQL',
      'MongoDB',
      'Docker',
    ]
  },
  {
    skillArea: 'outras skills',
    array: [
      'Photoshop',
      'Premiere',
      'Reaper (DAW)',
    ]
  },
];

const ProjectsSection = () => {
  return (
    <section className="mb-[100px] md:mb-[50px]">
      <h2 className="font2 text-my-pink-300 text-[26px] md:text-[34px] py-[40px] font-bold text-center md:px-[150px]">
        Desenvolvedor Fullstack morando atualmente em Bauru, SP
      </h2>
      <aside className="flex flex-col items-center">
        <div className="flex flex-row w-full items-center justify-evenly">
          <a className="bg-black text-my-pink-300 border-my-pink-300 border-[2px] py-[2px] text-[20px] md:text-[26px] px-[30px] py-[8px] duration-150 hover:bg-my-pink-100 hover:border-my-pink-100 hover:text-black" href="https://drive.google.com/file/d/14AeRbMWZeQypZVXNpSMieRyv9o3-2L_1/view?usp=share_link" download>BAIXAR CURRÍCULO
          </a>
        </div>
      </aside>
      <article className="md:grid md:grid-cols-2 my-[40px] md:my-[100px] px-[12px] md:px-0">
        <aside className="md:col-span-1 text-white">
          <h2 className="font2 text-my-pink-300 text-[30px] font-bold text-center md:text-left md:px-[75px] py-[18px] md:py-0">
            Bio
          </h2>
        </aside>
        <aside className="md:col-span-1 md:pr-[75px] text-center md:text-left">
          <p className="font1 text-white text-[16px] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eos optio numquam sunt rerum cupiditate. Autem molestias consequatur tempore dicta consectetur saepe commodi optio quasi maiores, odio nemo repudiandae est!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eos optio numquam sunt rerum cupiditate. Autem molestias consequatur tempore dicta consectetur saepe commodi optio quasi maiores, odio nemo repudiandae est!
          </p>
          <br />
          <p className="font1 text-white text-[16px] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestias saepe laboriosam vero, commodi ex sequi cumque explicabo quis aliquam rerum tenetur ipsa, dolor, libero ratione! Eligendi quaerat explicabo voluptate.
          </p>
          <br />
          <p className="font1 text-white text-[16px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum, cumque soluta impedit recusandae laboriosam? Temporibus fugit quidem iure officia voluptas.
          </p>
        </aside>
      </article>
      <article className="md:grid md:grid-cols-2 my-[40px] md:my-[100px] px-[12px] md:px-0">
        <aside className="col-span-1 text-white ">
          <h2 className="font2 text-my-pink-300 text-[30px] font-bold text-center md:text-left md:px-[75px] py-[24px] md:py-0">
            Habilidades
          </h2>
        </aside>
        <aside className="col-span-1 md:grid md:grid-cols-3">
          {
            skills.map(el => (
              <div className="flex flex-row md:flex-col justify-between md:justify-start row-span-1 md:col-span-1 mb-[30px] md:mb-0">
                <h4 className="uppercase font1 md:text-[20px] text-my-pink-300">
                  { el.skillArea }
                </h4>
                <ul className="text-white font1 md:mt-[20px]">
                  {
                    el.array.map(skill => (
                      <li className="pb-[5px] text-[18px] text-right md:text-left">{ skill }</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </aside>
      </article>
    </section>
  )
}

export default ProjectsSection;