import { Link } from 'react-router-dom';

const NavbarServicesDropdown = ({ services }) => {

  return (
    <div className='group relative'>
      <div className='lg:text-white lg:hover:text-slate-100 text-slate-500 px-3 py-4 lg:py-2 flex items-center gap-2 text-md uppercase font-bold cursor-default select-none'>
        Services{' '}
        <i
          className={
            'fa-regular fa-angle-right transition duration-300 group-hover:rotate-90 rotate-0'
          }
        ></i>
      </div>
      <div
        className={
          'group-hover:block hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 absolute'
        }
      >
        {services &&
          services.map((item) => (
            <Link
              key={item.id}
              to={'/services/' + item.path}
              className={
                'text-md py-4 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-slate-500 hover:text-emerald-500 hover:bg-emerald-50 transition'
              }
            >
              {item.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default NavbarServicesDropdown;
