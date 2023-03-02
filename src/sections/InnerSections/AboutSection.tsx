import { useContext } from 'react';
import { PageContext } from '../../context/PageContext/Context';
import profilePic from '../../assets/pictures/PERFIL1X1BRANCO.jpg';

const AboutSection = () => {
  const { setPage } = useContext(PageContext);

  return (
    <section className="">
      <h2 className="font2 text-my-pink-300 text-[34px] py-[40px] font-bold text-center px-[150px]">
        Buscando a presença, comunicação e arte nas coisas mais simples da vida
      </h2>
      <article className="grid grid-cols-2 mb-[40px]">
        <aside className="col-span-1">
          <img className='p-[8px] bg-my-pink-300 hover:bg-my-pink-100 w-[250px] rounded-full mx-auto duration-150 mt-[75px]' src={ profilePic } alt="Profile pic Leonardo" />
        </aside>
        <aside className="col-span-1 pr-[75px]">
          <h4 className="font1 text-my-pink-300 text-[20px] text-left uppercase mb-[10px] font-medium">
            Muito prazer! Eu sou o Léo :)
          </h4>
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
      <div className='w-full mx-auto flex flex-col items-center my-[50px]'>
        <button onClick={() => setPage('contact')} className="bg-black text-my-pink-300 border-my-pink-300 border-[2px] py-[2px] text-[26px] px-[30px] duration-150 hover:bg-my-pink-100 hover:border-my-pink-100 hover:text-black">
          FALE COMIGO
        </button>
      </div>
    </section>
  )
}

export default AboutSection;