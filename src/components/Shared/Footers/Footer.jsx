import { footer } from '../../../assets/data/footer';
import { info } from '../../../assets/data/info';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
// import { useEffect, useRef, useState } from 'react';

import './footer.css';

export default function Footer({ services, products }) {
  // const contentServicesRef = useRef();
  // const contentProductsRef = useRef();

  // const [heightService, setHeightService] = useState(0);
  // const [heightProduct, setHeightProduct] = useState(0);

  // const [isCollapseProduct, setIsCollapseProduct] = useState(false);
  // const [isCollapseService, setIsCollapseService] = useState(false);

  // useEffect(() => {
  //   if (contentServicesRef && contentProductsRef) {
  //     setHeightProduct(contentProductsRef.current.offsetHeight);
  //     setHeightService(contentServicesRef.current.offsetHeight);
  //   }
  // }, [contentServicesRef?.current?.offsetHeight, contentProductsRef?.current?.offsetHeight]);

  // useEffect(() => {
  //   if (window.innerWidth >= 640)
  //     toggleShowCollapse(false);
  //   else
  //     toggleShowCollapse(true);
  // }, []);

  // const toggleShowCollapse = (status) => {
  //   setIsCollapseProduct(status);
  //   setIsCollapseService(status);
  // }

  return (
    <>
      <footer className='relative bg-slate-700 pt-8 pb-6 sm:text-clip'>
        <div className='lg:container mx-auto lg:px-6 px-4'>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            <div className='order-2'>
              <h3
                className='font-bold text-lg mb-4 text-white text-left sm:text-center'
                // onClick={() => setIsCollapseProduct(!isCollapseProduct)}
              >
                Products{' '}
                {/* <i
                  className={
                    'fa-regular text-lg ml-2 inline-block sm:!hidden transition-all ' +
                    (isCollapseProduct ? 'fa-minus' : 'fa-plus')
                  }
                ></i> */}
              </h3>
              <div className='hidden sm:flex text-sm md:justify-center items-start '>
                <ul className='pr-3'>
                  {products
                    ? products?.map(
                        (item, index) =>
                          products.length / 2 > index && (
                            <li key={item._id} className='mb-2 text-white'>
                              <Link
                                to={'/products/' + item.path}
                                className='hover:text-emerald-500'
                              >
                                {item.name}
                              </Link>
                            </li>
                          )
                      )
                    : [...Array(4)].map((_, index) => (
                        <Skeleton className='mb-2' key={index} height={20} />
                      ))}
                </ul>
                <ul className='pl-3'>
                  {products
                    ? products?.map(
                        (item, index) =>
                          products.length / 2 <= index && (
                            <li key={item._id} className='mb-2 text-white'>
                              <Link
                                to={'/products/' + item.path}
                                className='hover:text-emerald-500'
                              >
                                {item.name}
                              </Link>
                            </li>
                          )
                      )
                    : [...Array(4)].map((_, index) => (
                        <Skeleton className='mb-2' key={index} height={20} />
                      ))}
                </ul>
              </div>
              <div
                className={
                  'sm:hidden block text-sm text-white text-left sm:text-center transition-all duration-500 '
                }
                // style={{ height: isCollapseProduct ? heightProduct + 'px' : 0 }}
              >
                <div
                  // ref={contentProductsRef}
                  className={
                    'transition duration-700 '
                    // +
                    // (isCollapseProduct
                    //   ? 'opacity-100 static'
                    //   : 'opacity-0 absolute -left-[9999px] -top-[999px]')
                  }
                >
                  {products &&
                    products.map((item) => (
                      <Link
                        key={item._id}
                        to={'/products/' + item.path}
                        className='block mb-2 active:text-emerald-500'
                      >
                        {item.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
            <div className='order-1'>
              <h3
                className='font-bold text-lg mb-4 text-white text-left sm:text-center'
                // onClick={() => setIsCollapseService(!isCollapseService)}
              >
                Services{' '}
                {/* <i
                  className={
                    'fa-regular text-lg ml-2 inline-block sm:!hidden transition-all ' +
                    (isCollapseService ? 'fa-minus' : 'fa-plus')
                  }
                ></i> */}
              </h3>
              <div className='hidden sm:flex text-sm'>
                <ul className='pr-3'>
                  {services
                    ? services?.map(
                        (item, index) =>
                          Math.ceil(services.length / 2) - 1 >= index && (
                            <li key={item._id} className='mb-2 text-white'>
                              <Link
                                to={'/services/' + item.path}
                                className='hover:text-emerald-500'
                              >
                                {item.title}
                              </Link>
                            </li>
                          )
                      )
                    : [...Array(4)].map((_, index) => (
                        <Skeleton className='mb-2' key={index} height={20} />
                      ))}
                </ul>
                <ul className='pl-3'>
                  {services
                    ? services?.map(
                        (item, index) =>
                          Math.ceil(services.length / 2) - 1 < index && (
                            <li key={item._id} className='mb-2 text-white'>
                              <Link
                                to={'/services/' + item.path}
                                className='hover:text-emerald-500'
                              >
                                {item.title}
                              </Link>
                            </li>
                          )
                      )
                    : [...Array(4)].map((_, index) => (
                        <Skeleton className='mb-2' key={index} height={20} />
                      ))}
                </ul>
              </div>
              <div
                className={
                  'sm:hidden block text-sm text-white text-left sm:text-center transition-all duration-500 '
                }
                // style={{ height: isCollapseService ? heightService + 'px' : 0 }}
              >
                <div
                  // ref={contentServicesRef}
                  className={
                    'transition duration-700 '
                    // +
                    // (isCollapseService
                    //   ? 'opacity-100 static'
                    //   : 'opacity-0 absolute -left-[9999px] -top-[999px]')
                  }
                >
                  {services &&
                    services.map((item) => (
                      <Link
                        key={item._id}
                        to={'/services/' + item.path}
                        className='block mb-2 active:text-emerald-500'
                      >
                        {item.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
            <div className={'order-last grid-merge-2 md:grid-merge-none'}
              // style={{gridArea: '2 / 1 / 3 / 3'}}
            >
              <div className='flex flex-wrap items-top mb-6 justify-end'>
                <div className='w-full'>
                  <h3 className='font-bold text-lg mb-4 text-white text-center'>
                    Contact
                  </h3>
                  <ul className='list-unstyled'>
                    <li className='text-slate-100 flex items-start text-sm font-normal justify-start'>
                      <i className='fa-solid fa-house py-1 mr-2'></i>
                      <div>
                        {info.addresses.map((item, index) => (
                          <div key={index} className='mb-2 last:mb-0'>
                            {item}
                          </div>
                        ))}
                      </div>
                    </li>
                    <li className='text-slate-100 flex items-center text-sm font-normal justify-start'>
                      <i className='fa-solid fa-envelope mr-2'></i>
                      <a
                        href={'mailto:' + info.email}
                        className='hover:text-slate-200 hover:underline py-2'
                      >
                        {info.email}
                      </a>
                    </li>
                    <li className='text-slate-100 flex items-center text-sm font-normal justify-start'>
                      <i className='fa-solid fa-phone mr-2'></i>
                      <a
                        href={'tel:' + info.phone_number}
                        className='hover:text-slate-200 hover:underline py-2'
                      >
                        {info.phone}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-6 border-slate-200' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <div className='text-sm text-slate-400 font-semibold py-1'>
                <a
                  href='https://defectfound.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-100 hover:text-slate-200'
                >
                  {footer.titleCopyright}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
