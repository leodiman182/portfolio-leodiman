import DesktopMenu from "../components/DesktopMenu";
import MobileMenu from "../components/MobileMenu";

import '../styles/styles.css'

const Header = () => {
  return (
    <header className='pt-[20px] px-[20px] xl:px-0'>
      <MobileMenu />
      <DesktopMenu />
    </header>
  )
}

export default Header