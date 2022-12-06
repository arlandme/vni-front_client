import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const NavbarProductsDropdown = ({ url, products }) => {
  return (
    <div className='group relative'>
      <div className='lg:text-white lg:hover:text-slate-100 text-slate-500 px-4 py-4 lg:py-2 flex items-center gap-2 text-md uppercase font-bold cursor-default select-none'>
        Products{' '}
        <i
          className={
            'fa-regular fa-angle-right transition duration-300 group-hover:rotate-90 rotate-0'
          }
        ></i>
      </div>
      <div
        className={
          'group-hover:block hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg w-[16rem] absolute'
        }
      >
        {products ? (
          products.map((item) => (
            <Link
              key={item.id}
              to={'/products/' + item.path}
              className={
                'text-md py-4 px-4 font-medium block w-full bg-transparent text-slate-500 hover:text-emerald-500 hover:bg-emerald-50 transition ' +
                (url?.indexOf(item.path) !== -1
                  ? '!text-emerald-500 bg-emerald-50'
                  : '')
              }
            >
              {item.name}
            </Link>
          ))
        ) : (
          <div className='px-4'>
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} className='mb-2' height={25} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarProductsDropdown;
