import { useState } from 'react';
import '../style.css';

const footerLinks = [
  {
    name: 'LinkedIn!',
    icon: <svg className="w-[40px] fill-my-pink-300 duration-150" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vamos nos conectar no Linkedin!</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    url: 'https://www.linkedin.com/in/leonardodiman/',
  },
  {
    name: 'Github',
    icon: <svg className="w-[40px] fill-my-pink-300 duration-150" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dá uma olhada nos meus códigos!</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
    url: 'https://github.com/leodiman182',
  },
  {
    name: 'Instagram',
    icon: <svg className="w-[40px] fill-my-pink-300 duration-150" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Me segue no insta :)</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>,
    url: 'https://www.instagram.com/leodiman182/',
  },
  {
    name: 'Medium',
    icon: <svg className="w-[40px] fill-my-pink-300 duration-150" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Eu escrevo umas coisas também...</title><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>,
    url: 'https://leonardo-diman.medium.com/',
  },
];

const ContactSection = () => {
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  return (
    <section className="animation-fade  px-[20px] text-center flex flex-col items-center pb-[50px] md:pb-0">
      <h2 className="font2 text-white text-[18px] md:text-[38px] pt-[20px] md:py-[40px] font-bold text-center md:px-[150px]">
        mailto: <p className="inline text-my-pink-300 hover:cursor-default hover:text-my-pink-100 duration-150 text-[20px] md:text-[38px]">leonardo.diman@gmail.com</p>
      </h2>
      <aside className="flex flex-col items-center md:w-[768px] md:px-[40px] md:mb-[50px]">
        <div className="my-[40px] md:my-[60px] flex flex-col md:flex-row items-center justify-between w-full">
          <h3 className="text-white font1 text-[20px] pb-[20px] md:pb-0">
            Vamos nos conectar
          </h3>
          <div className="flex flex-row items-center justify-around w-full md:w-[400px] h-[45px] ">
            {
              footerLinks.map(obj => (
                <a target='_blank' className="md:p-[6px] duration-150 border-my-pink-300 md:ml-[30px] hover:bg-my-pink-100" key={ obj.name } href={ obj.url } rel="noreferrer">
                  { obj.icon }
                </a>
              ))
            }
          </div>
        </div>
        <div className="mb-[40px] flex flex-col md:flex-row items-center justify-between w-full">
        <h3 className="text-white font1 text-[20px] md:text-[26px] pb-[20px] md:pb-0">
            Vamos nos falar
          </h3>
          <form className="flex flex-col items-between justify-center md:w-[375px]">
            <label className="text-white font1 pb-[10px] flex flex-col text-left font-extralight  text-[16px] md:text-[20px]" htmlFor="contact-name">
              Nome
              <input
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="font-normal text-[16px] font1 py-[5px] my-[5px] text-gray-700 pl-[10px] focus:outline-0 border-b-[4px] border-my-pink-100"
                type="text"
                name="contact-name"
                id="contact-name"
              />
            </label>
            {/* <label className="text-white font1 pb-[10px] flex flex-col text-left font-extralight  text-[16px] md:text-[20px]" htmlFor="contact-email">
              Email
              <input
                className="font-normal text-[16px] font1 py-[5px] my-[5px] text-gray-700 pl-[10px] focus:outline-0 border-b-[4px] border-my-pink-100"
                type="text"
                name="contact-email"
                id="contact-email"
              />
            </label> */}
            <label className="text-white font1 pb-[10px] flex flex-col text-left font-extralight  text-[16px] md:text-[20px]" htmlFor="contact-email">
              Mensagem
              <textarea
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                rows={4}
                className="font-normal text-[16px] font1 py-[5px] my-[5px] text-gray-700 pl-[10px] focus:outline-0 border-b-[4px] border-my-pink-100"
                name="contact-email"
                id="contact-email"
              />
            </label>
          </form>
        </div>        
        <a target='_blank' className="bg-black text-my-pink-300 border-my-pink-300 border-[2px] py-[2px] text-[26px] px-[30px] duration-150 hover:bg-my-pink-100 hover:border-my-pink-100 hover:text-black" href={`https://wa.me/5514981395514?text=Aqui%20é%20${contactName}!%20${contactMessage}`} rel="noreferrer">
          ENVIAR
        </a>
      </aside>
    </section>
  )
}

export default ContactSection;