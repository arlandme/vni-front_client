import { Link } from 'react-router-dom';
import NavbarProductsDropdown from '../Dropdowns/NavbarProductsDropdown';
import NavbarServicesDropdown from '../Dropdowns/NavbarServicesDropdown';

export default function DesktopNavbar({services, products}) {
  return (
    <>
      <div
        className={
          'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
          ' block rounded shadow-lg'
        }
        id='example-navbar-warning'
      >
        <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
          <li className='flex items-center'>
            <NavbarServicesDropdown services={services} />
          </li>

          <li className='flex items-center'>
            <NavbarProductsDropdown products={products} />
          </li>
          
          <li className='flex items-center'>
            <Link
              className='lg:text-white lg:hover:text-slate-100 text-slate-500 px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold'
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
