import WhyUs from '../Shared/Footers/WhyUs';
import Coverage from './Coverage';
import Vision from './Vision';

export default function Main() {
  return (
    <>
      <div className='lg:w-1/2 md:w-2/3 mx-auto w-full mb-6'>
        <Vision />
        <div className='w-full h-[1px] bg-slate-200 my-8'></div>
        <WhyUs />
        <div className='w-full h-[1px] bg-slate-200 my-8'></div>
        <Coverage />
      </div>
    </>
  );
}
