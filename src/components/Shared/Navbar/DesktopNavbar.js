import { Link } from 'react-router-dom';
import NavbarProductsDropdown from '../Dropdowns/NavbarProductsDropdown';
import NavbarServicesDropdown from '../Dropdowns/NavbarServicesDropdown';

export default function DesktopNavbar({ url, services, products }) {

  return (
    <>
      <div
        className={
          'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
          ' block rounded shadow-lg'
        }
        id='example-navbar-warning'
      >
        <ul className='flex flex-col lg:flex-row list-none lg:ml-auto gap-2'>
          <li className='flex items-center'>
            <Link
              className={'lg:text-white lg:hover:text-slate-100 text-slate-500 px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold hover:bg-slate-500 rounded-md ' + (url==='/' ? 'bg-slate-500' : '')}
              to={'/'}
            >
              Home
            </Link>
          </li>
          <li className={'flex items-center hover:bg-slate-500 rounded-md ' + (url?.indexOf('/services/')!==-1 ? 'bg-slate-500': '')}>
            <NavbarServicesDropdown url={url} services={services} />
          </li>

          <li className={'flex items-center hover:bg-slate-500 rounded-md ' + (url?.indexOf('/products/')!==-1 ? 'bg-slate-500': '')}>
            <NavbarProductsDropdown url={url} products={products} />
          </li>

          <li className='flex items-center'>
            <Link
              className={'lg:text-white lg:hover:text-slate-100 text-slate-500 px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold hover:bg-slate-500 rounded-md ' + (url==='/about' ? 'bg-slate-500' : '')}
              to={'/about'}
            >
              About us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
