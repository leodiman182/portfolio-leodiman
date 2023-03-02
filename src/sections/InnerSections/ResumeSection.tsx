const ProjectsSection = () => {
  return (
    <section>
      <h2 className="font2 text-my-pink-300 text-[34px] py-[40px] font-bold text-center px-[150px]">
        Desenvolvedor Fullstack morando atualmente em Bauru, SP
      </h2>
      <aside className="flex flex-col items-center">
        <div className="flex flex-row w-full items-center justify-evenly">
          <a className="bg-black text-my-pink-300 border-my-pink-300 border-[2px] py-[2px] text-[26px] px-[30px] duration-150 hover:bg-my-pink-100 hover:border-my-pink-100 hover:text-black" href="https://publuu.com/flip-book/93211/257135" download='portuguese-resume'>BAIXAR CURRÍCULO
          </a>
        </div>
      </aside>
      <article className="grid grid-cols-2 my-[100px]">
        <aside className="col-span-1 text-white ">
          <h2 className="font2 text-my-pink-300 text-[30px] font-bold text-left px-[75px]">
            Bio
          </h2>
        </aside>
        <aside className="col-span-1 pr-[75px]">
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
      <article className="grid grid-cols-2 my-[100px]">
        <aside className="col-span-1 text-white ">
          <h2 className="font2 text-my-pink-300 text-[30px] font-bold text-left px-[75px]">
            Habilidades
          </h2>
        </aside>
        <aside className="col-span-1 grid grid-cols-2">
          <div className="col-span-1">
            <h4 className="uppercase font1 text-[20px] text-my-pink-300">
              front-end
            </h4>
            <ul className="text-white font1 mt-[20px]">
              <li className="pb-[5px] text-[18px]">ReactJS</li>
              <li className="pb-[5px] text-[18px]">React Router</li>
              <li className="pb-[5px] text-[18px]">TailwindCSS</li>
              <li className="pb-[5px] text-[18px]">Bootstrap</li>
              <li className="pb-[5px] text-[18px]">RLT</li>
              <li className="pb-[5px] text-[18px]">CSS</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="uppercase font1 text-[20px] text-my-pink-300">
              back-end
            </h4>
            <ul className="text-white font1 mt-[20px]">
              <li className="pb-[5px] text-[18px]">NodeJS</li>
              <li className="pb-[5px] text-[18px]">MySQL</li>
              <li className="pb-[5px] text-[18px]">MongoDB</li>
              <li className="pb-[5px] text-[18px]">CSS</li>
            </ul>
          </div>
        </aside>
      </article>
    </section>
  )
}

export default ProjectsSection;