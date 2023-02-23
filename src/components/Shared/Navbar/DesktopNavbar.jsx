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
              className={
                'font-medium px-4 py-4 lg:py-2 flex items-center text-base rounded-md transition duration-500 hover:text-emerald-500 ' +
                (url === '/' ? 'text-emerald-500' : 'text-black')
              }
              to={'/'}
            >
              Home
            </Link>
          </li>
          <li
            className={
              'flex items-center rounded-md transition duration-500 group ' +
              (url?.indexOf('/services/') !== -1 ? 'text-emerald-500' : 'text-black')
            }
          >
            <NavbarServicesDropdown url={url} services={services} />
          </li>

          <li
            className={
              'flex items-center rounded-md transition duration-500 group ' +
              (url?.indexOf('/products/') !== -1 ? 'text-emerald-500' : 'text-black')
            }
          >
            <NavbarProductsDropdown url={url} products={products} />
          </li>

          <li className='flex items-center'>
            <Link
              className={
                'font-medium px-4 py-4 lg:py-2 flex items-center text-base rounded-md transition duration-500 hover:text-emerald-500 ' +
                (url === '/about' ? 'text-emerald-500' : 'text-black')
              }
              to={'/about'}
            >
              About us
            </Link>
          </li>
          <li className='flex items-center'>
            <Link
              className={
                'font-medium pl-4 py-4 lg:py-2 flex items-center text-base rounded-md transition duration-500 hover:text-emerald-500 ' +
                (url === '/coverage' ? 'text-emerald-500' : 'text-black')
              }
              to={'/coverage'}
            >
              Coverage
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
