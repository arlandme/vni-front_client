import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

export default function SuggestLink({ data, single }) {
  return (
    <>
      {data && single ? (
        <>
          <h2 className='text-2xl font-bold'>
            Other {single.name ? 'Products' : 'Services'}:{' '}
          </h2>
          <ul className='mb-4'>
            {data
              .filter((item) => item.id !== single.id)
              .map((item) => (
                <li key={item._id}>
                  <Link
                    to={(item.name ? '/products/' : '/services/') + item.path}
                    className='text-emerald-500 hover:text-emerald-600 py-2 inline-block font-semibold'
                  >
                    {item.name || item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </>
      ) : (
        <>
          <Skeleton height={30} width={300} className='mb-2' />
          <div className='mb-4'>
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} height={25} width={200} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
