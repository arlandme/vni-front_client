import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MobileNavbar({ navbarOpen, setNavbarOpen, services, products }) {
  const [showService, setShowService] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  return (
    <>
      <div
        className={
          'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none block rounded-b shadow-lg pb-2 w-full' +
          (navbarOpen ? '' : ' hidden')
        }
        id='example-navbar-warning'
      >
        <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
          <li
            className='flex items-center justify-between lg:text-white lg:hover:text-slate-100 text-slate-500 px-4 py-4 lg:py-2 text-md uppercase font-bold hover:text-white hover:bg-emerald-600 transition cursor-pointer'
            onClick={() => setShowService(!showService)}
          >
            Services{' '}
            <i
              className={`fa-regular ${
                showService ? 'fa-minus' : 'fa-plus'
              } text-xl`}
            ></i>
          </li>
          <div
            className={
              'w-full bg-slate-100 py-2 flex-col ' +
              (showService ? 'flex' : 'hidden')
            }
          >
            {services ? (
              services.map((item) => (
                <Link
                  key={item.id}
                  to={'/services/' + item.path}
                  className='text-slate-900 text-md px-4 py-6 pt-0 font-medium hover:text-emerald-500'
                  onClick={()=>setNavbarOpen(false)}
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
          <li
            className='flex items-center justify-between lg:text-white lg:hover:text-slate-100 text-slate-500 px-4 py-4 lg:py-2 text-md uppercase font-bold hover:text-white hover:bg-emerald-600 transition cursor-pointer'
            onClick={() => setShowProduct(!showProduct)}
          >
            Products{' '}
            <i
              className={`fa-regular ${
                showProduct ? 'fa-minus' : 'fa-plus'
              } text-xl`}
            ></i>
          </li>
          <div
            className={
              'w-full bg-slate-100 py-2 flex-col ' +
              (showProduct ? 'flex' : 'hidden')
            }
          >
            {products ? (
              products.map((item) => (
                <Link
                  key={item.id}
                  to={'/products/' + item.path}
                  className='text-slate-900 text-md px-4 py-6 pt-0 font-medium hover:text-emerald-500'
                  onClick={()=>setNavbarOpen(false)}
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

          <Link
            to={'/about'}
            className='flex items-center lg:text-white lg:hover:text-slate-100 text-slate-500 px-4 py-4 lg:py-2 text-md uppercase font-bold hover:text-white hover:bg-emerald-600 transition cursor-pointer'
            onClick={()=>setNavbarOpen(false)}
          >
            About us
          </Link>
        </ul>
      </div>
    </>
  );
}
