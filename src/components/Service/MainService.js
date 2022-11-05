import { useEffect } from 'react';
import WhyUs from '../Shared/Footers/WhyUs';
import SuggestLink from '../Shared/Suggests/SuggestLink';

export default function Main({ data, services }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data?.title]);

  return (
    <>
      <div className='min-h-[50vh] lg:w-2/3 w-full lg:pr-4 lg:border-r border-slate-200'>
        <h1 className='text-3xl font-semibold pb-4'>{data?.title}</h1>
        <div className='w-full h-[200px] overflow-hidden'>
          <img
            className='w-full h-full object-cover transition duration-500 hover:scale-110'
            src={data?.thumbnail}
            alt=''
          />
        </div>
        <div
          className='leading-[2] py-4 text-md'
          dangerouslySetInnerHTML={{ __html: data?.content }}
        ></div>
        <SuggestLink single={data} data={services} />
        <WhyUs />
      </div>
    </>
  );
}
