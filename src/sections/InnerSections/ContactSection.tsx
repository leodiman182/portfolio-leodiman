import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import FooterLinks from '../../components/FooterLinks';
import '../styles.css';

const ContactSection = () => {
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  return (
    <section
      data-testid="contact-section"
      className="px-[20px] text-center flex flex-col items-center pb-[50px] md:pb-0"
    >
      <h2 className="font2 text-white text-[18px] md:text-[38px] pt-[20px] md:py-[40px] font-bold text-center md:px-[150px]">
        mailto:{' '}
        <p className="inline text-my-pink-300 hover:cursor-default hover:text-my-pink-100 duration-150 text-[20px] md:text-[38px]">
          leonardo.diman@gmail.com
        </p>
      </h2>
      <aside className="flex flex-col items-center md:w-[768px] md:px-[40px] md:mb-[50px]">
        <div className="my-[40px] md:my-[60px] flex flex-col md:flex-row items-center justify-between w-full">
          <h3 className="text-white font1 text-[20px] pb-[20px] md:pb-0">
            Vamos nos conectar
          </h3>
          <div className="flex flex-row items-center justify-around md:w-[400px] h-[45px] scale-90 w-full">
            <FooterLinks />
          </div>
        </div>
        <div className="mb-[40px] flex flex-col md:flex-row items-center justify-between w-full">
          <h3 className="text-white font1 text-[20px] md:text-[26px] pb-[20px] md:pb-0">
            Vamos nos falar
          </h3>
          <form
            autoComplete="off"
            className="flex flex-col items-between justify-center md:w-[375px]"
          >
            <label
              className="text-white font1 pb-[10px] flex flex-col text-left font-extralight text-[16px] md:text-[20px]"
              htmlFor="contact-name"
            >
              Nome
              <input
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="font-normal text-[16px] font1 py-[5px] my-[5px] text-gray-700 pl-[10px] border-[1px] border-b-[4px] border-my-pink-300 focus:border-my-pink-100 focus:ring-my-pink-100"
                type="text"
                name="contact-name"
                id="contact-name"
              />
            </label>
            <label
              className="text-white font1 pb-[10px] flex flex-col text-left font-extralight  text-[16px] md:text-[20px]"
              htmlFor="contact-email"
            >
              Mensagem
              <textarea
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                rows={4}
                className="font-normal text-[16px] font1 py-[5px] my-[5px] text-gray-700 pl-[10px] border-[1px] border-b-[4px] border-my-pink-300 focus:border-my-pink-100 focus:ring-my-pink-100"
                name="contact-email"
                id="contact-email"
              />
            </label>
          </form>
        </div>
        <a
          target="_blank"
          href={`https://wa.me/5514981395514?text=Aqui%20é%20${contactName}!%20${contactMessage}`}
          rel="noreferrer"
        >
          <CustomButton children="Enviar" />
        </a>
      </aside>
    </section>
  );
};

export default ContactSection;
