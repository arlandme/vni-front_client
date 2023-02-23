/*eslint-disable*/
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// components
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import NavbarTop from './NavbarTop';

export default function Navbar({ services, products }) {
  const location = useLocation();

  const [url, setUrl] = useState();

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    const width = window.innerWidth;
    return width >= 1024 ? false : true;
  });

  const navbarRef = useRef();

  useEffect(() => {
    function handleResize() {
      handleSetIsMobile();
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSetIsMobile = () => {
    const width = window.innerWidth;
    width >= 1024 ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    if (!isMobile) setNavbarOpen(false);
  }, [isMobile]);

  return (
    <>
      <NavbarTop />
      <nav
        className={
          'top-0 sticky bg-white z-50 w-full flex flex-wrap items-center justify-between navbar-expand-lg text-black transition duration-500 shadow '
        }
      >
        <div
          ref={navbarRef}
          className='lg:container lg:px-6 lg:mx-auto flex flex-wrap items-center justify-between py-3 px-4 w-full relative border-b'
        >
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              className=' text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap'
              to='/'
            >
              <img
                className='w-[200px] min-h-[50px] object-cover'
                src={require('../../../assets/img/logos/logo.png')}
                alt='logo vninspection'
              />
            </Link>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none -mr-3'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className=' fas fa-bars'></i>
            </button>
          </div>
          {!isMobile && (
            <DesktopNavbar url={url} services={services} products={products} />
          )}
        </div>
        {isMobile && (
          <MobileNavbar
            url={url}
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
            services={services}
            products={products}
          />
        )}
      </nav>
    </>
  );
}
