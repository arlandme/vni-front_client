import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const NavbarServicesDropdown = ({ url, services }) => {
  return (
    <div className='group relative'>
      <div className='font-medium px-4 py-4 lg:py-2 flex items-center text-base rounded-md transition duration-500 group-hover:text-emerald-500 gap-2 cursor-default select-none'>
        Services{' '}
        <i
          className={
            'fa-regular fa-angle-right transition duration-300 group-hover:rotate-90 group-hover:text-emerald-500 rotate-0'
          }
        ></i>
      </div>
      <div
        className={
          'group-hover:left-0 group-hover:opacity-100 group-hover:translate-y-0 -left-[9999px] opacity-0 translate-y-[30px] transition duration-500 bg-white text-base z-50 py-2 text-left rounded shadow border w-[16rem] absolute'
        }
      >
        {services ? (
          services.map((item) => (
            <Link
              key={item.id}
              to={'/services/' + item.path}
              className={
                'text-md py-4 px-4 font-medium block w-full bg-transparent text-slate-500 hover:text-emerald-500 hover:bg-emerald-100 transition ' +
                (url?.indexOf(item.path) !== -1
                  ? '!text-emerald-500 bg-emerald-100'
                  : '')
              }
            >
              {item.title}
            </Link>
          ))
        ) : (
          <div className='px-4'>
            {[...Array(3)].map((_, index) => (
              <Skeleton
                key={index}
                className='mb-2'
                height={25}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarServicesDropdown;
