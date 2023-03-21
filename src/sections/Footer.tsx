import '../styles/styles.css';
import Links from '../utils/Links'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full max-w-[1024px]">
      <article className="flex flex-col md:flex-row w-full items-center justify-between md:pt-[35px] pb-[75px] md:pl-[40px] xl:pl-0">
        <div className="font1 uppercase font-bold text-my-pink-300">
          © {year} Leonardo Diman
        </div>
        <div className="flex flex-row items-center justify-evenly md:w-[275px] h-[45px] mt-[20px] md:mt-0">
          {
            Links.map(obj => (
              <a target='_blank' className="p-[6px] duration-150 hover:bg-my-pink-100 border-my-pink-300" key={ obj.name } href={ obj.url } rel="noreferrer">
                { obj.smallIcon }
              </a>
            ))
          }
        </div>
      </article>
    </footer>
  )
}

export default Footer;