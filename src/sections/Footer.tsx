import '../styles/styles.css';
import FooterLinks from '../components/FooterLinks';
import { useContext } from 'react';
import { PageContext } from '../context/PageContext/Context';

const Footer = () => {
  const { page } = useContext(PageContext);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer data-testid="footer-element" className="w-full max-w-[1024px]">
      <article className="flex flex-col-reverse md:flex-row w-full items-center justify-between md:pt-[35px] pb-[25px] xl:pl-0">
        <div className="font1 uppercase font-bold text-my-pink-300 mt-[30px] md:mt-0">
          © {year} Leonardo Diman
        </div>
        {page !== 'contact' && <FooterLinks />}
      </article>
    </footer>
  );
};

export default Footer;
