import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MobileNavbar({
  url,
  navbarOpen,
  setNavbarOpen,
  services,
  products,
}) {
  const contentServicesRef = useRef();
  const contentProductsRef = useRef();

  const [heightService, setHeightService] = useState(0);
  const [heightProduct, setHeightProduct] = useState(0);

  const [showService, setShowService] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const toggleShowService = () => {
    setShowService(!showService);
    setShowProduct(false);
  };

  const toggleShowProduct = () => {
    setShowProduct(!showProduct);
    setShowService(false);
  };

  useEffect(() => {
    window.document.body.style.overflow = navbarOpen ? 'hidden' : '';
  }, [navbarOpen]);

  useEffect(() => {
    if (contentServicesRef) {
      setHeightProduct(contentProductsRef.current.offsetHeight);
      setHeightService(contentServicesRef.current.offsetHeight);
    }
  }, [contentServicesRef?.current?.offsetHeight]);

  return (
    <>
      <div
        className={
          'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none block rounded-b shadow-lg w-full transition-all duration-500 absolute top-full ' +
          (navbarOpen ? 'h-screen' : 'h-0')
        }
        id='example-navbar-warning'
      >
        <ul
          className={
            'flex flex-col lg:flex-row list-none lg:ml-auto transition duration-500 h-[80vh] pb-8 overflow-auto ' +
            (navbarOpen
              ? 'opacity-100 static'
              : 'opacity-0 absolute -left-[9999px]')
          }
        >
          <Link
            to={'/'}
            className={
              'flex items-center lg:text-white lg:hover:text-slate-100 text-slate-500 px-4 py-4 lg:py-2 text-md uppercase font-bold hover:text-white hover:bg-emerald-600 transition cursor-pointer ' +
              (url === '/' ? 'bg-emerald-600 !text-white' : '')
            }
            onClick={() => setNavbarOpen(false)}
          >
            Home
          </Link>
          <li
            className={
              'flex items-center justify-between lg:text-white lg:hover:text-slate-100 text-slate-500 px-4 py-4 lg:py-2 text-md uppercase font-bold hover:text-white hover:bg-emerald-600 transition cursor-pointer ' +
              (url?.indexOf('/services') !== -1
                ? 'bg-emerald-600 !text-white'
                : '')
            }
            onClick={toggleShowService}
          >
            Services{' '}
            <i
              className={`fa-regular ${
                showService ? 'fa-minus' : 'fa-plus'
              } text-xl`}
            ></i>
          </li>
          <div
            className={'bg-slate-100 w-full transition-all duration-500 '}
            style={{ height: showService ? heightService + 'px' : 0 }}
          >
            <div
              ref={contentServicesRef}
              className={
                'flex flex-col text-left text-sm py-2 transition duration-700 ' +
                (showService
                  ? 'opacity-100 static'
                  : 'opacity-0 absolute -left-[9999px]')
              }
            >
              {services ? (
                services.map((item) => (
                  <Link
                    key={item.id}
                    to={'/services/' + item.path}
                    className={
                      'text-slate-900 text-md px-4 py-3 font-medium hover:text-emerald-500 ' +
                      (url?.indexOf(item.path) !== -1
                        ? '!text-emerald-500 bg-emerald-50'
                        : '')
                    }
                    onClick={() => setNavbarOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))
              ) : (
                <span className='text-slate-900 text-md px-4 py-2 pt-0 font-medium'>
                  Loading...
                </span>
              )}
            </div>
          </div>
          <li
            className={
              'flex items-center justify-between lg:text-white lg:hover:text-slate-100 text-slate-500 px-4 py-4 lg:py-2 text-md uppercase font-bold hover:text-white hover:bg-emerald-600 transition cursor-pointer ' +
              (url?.indexOf('/products') !== -1
                ? 'bg-emerald-600 !text-white'
                : '')
            }
            onClick={toggleShowProduct}
          >
            Products{' '}
            <i
              className={`fa-regular ${
                showProduct ? 'fa-minus' : 'fa-plus'
              } text-xl`}
            ></i>
          </li>
          <div
            className={'bg-slate-100 w-full transition-all duration-500 '}
            style={{ height: showProduct ? heightProduct + 'px' : 0 }}
          >
            <div
              ref={contentProductsRef}
              className={
                'flex flex-col text-left text-sm py-2 transition duration-700 ' +
                (showProduct
                  ? 'opacity-100 static'
                  : 'opacity-0 absolute -left-[9999px]')
              }
            >
              {products ? (
                products.map((item) => (
                  <Link
                    key={item.id}
                    to={'/products/' + item.path}
                    className={
                      'text-slate-900 text-md px-4 py-3 font-medium hover:text-emerald-500 ' +
                      (url?.indexOf(item.path) !== -1
                        ? '!text-emerald-500 bg-emerald-50'
                        : '')
                    }
                    onClick={() => setNavbarOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))
              ) : (
                <span className='text-slate-900 text-md px-4 py-2 pt-0 font-medium'>
                  Loading...
                </span>
              )}
            </div>
          </div>

          <Link
            to={'/about'}
            className={
              'flex items-center lg:text-white lg:hover:text-slate-100 text-slate-500 px-4 py-4 lg:py-2 text-md uppercase font-bold hover:text-white hover:bg-emerald-600 transition cursor-pointer ' +
              (url === '/about' ? 'bg-emerald-600 !text-white' : '')
            }
            onClick={() => setNavbarOpen(false)}
          >
            About us
          </Link>
          <Link
            to={'/coverage'}
            className={
              'flex items-center lg:text-white lg:hover:text-slate-100 text-slate-500 px-4 py-4 lg:py-2 text-md uppercase font-bold hover:text-white hover:bg-emerald-600 transition cursor-pointer ' +
              (url === '/coverage' ? 'bg-emerald-600 !text-white' : '')
            }
            onClick={() => setNavbarOpen(false)}
          >
            Coverage
          </Link>
        </ul>
      </div>
    </>
  );
}
