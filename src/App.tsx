import { useContext, useEffect } from 'react';
import { PageContext } from './context/PageContext/Context';

import Header from './sections/Header';
import SelectedSection from './sections/SelectedSection';
import Footer from './sections/Footer';

import { AiOutlineLoading } from "react-icons/ai";

function App() {
  const { page, setPage } = useContext(PageContext);

  useEffect(() => {
    if (page === undefined) {
      setPage('home')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='bg-black h-full w-full relative'>
      {
        page === undefined ? (
          <div className='h-full w-screen relative'>
            <AiOutlineLoading className='absolute bottom-[50%] inset-x-0 text-my-pink-300 text-[75px] mx-auto animate-spin'/>
          </div>
        ) : (
          <main className="max-w-[1024px] mx-auto">
            <Header />
            <SelectedSection />
            <Footer />
          </main>
        )
      }
    </div>
  );
}

export default App;
