import '../styles/styles.css';
import FooterLinks from '../components/FooterLinks';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer data-testid="footer-element" className="w-full max-w-[1024px]">
      <article className="flex flex-col-reverse md:flex-row w-full items-center justify-between md:pt-[35px] pb-[25px] md:pl-[40px] xl:pl-0">
        <div className="font1 uppercase font-bold text-my-pink-300 mt-[30px] md:mt-0">
          © {year} Leonardo Diman
        </div>
        <FooterLinks />
      </article>
    </footer>
  );
};

export default Footer;
