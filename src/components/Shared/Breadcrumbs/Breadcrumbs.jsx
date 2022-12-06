import { Link } from 'react-router-dom';

function Breadcrumb({ breadcrumbs }) {
  return (
    <nav
      className='inline-flex bg-white text-gray-700 py-3 rounded-md dark:bg-gray-800 mb-2'
      aria-label='Breadcrumb'
    >
      <ol className='inline-flex items-center space-x-1'>
        <li className='inline-flex items-center'>
          <Link
            to='/'
            className='text-sm text-gray-600 hover:text-emerald-500 inline-flex items-center dark:text-gray-400 dark:hover:text-white font-medium'
          >
            Home
          </Link>
        </li>
        {breadcrumbs ? (
          breadcrumbs.map((breadcrumb, index) => {
            return index !== breadcrumbs.length - 1 ? (
              <li key={index}>
                <div className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <Link
                    to={breadcrumb.link}
                    className='text-gray-700 hover:text-emerald-500 text-sm font-medium dark:text-gray-400 dark:hover:text-white'
                  >
                    {breadcrumb.title}
                  </Link>
                </div>
              </li>
            ) : (
              <li key={index} aria-current='page'>
                <div className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='text-gray-400 text-sm font-medium dark:text-gray-500'>
                    {breadcrumb.title}
                  </span>
                </div>
              </li>
            );
          })
        ) : (
          <></>
        )}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
