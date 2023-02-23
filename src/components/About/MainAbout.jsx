// import Breadcrumb from '../Shared/Breadcrumbs/Breadcrumbs';
import About from './About';
// import Achieve from './Achieve';
import BannerAbout from './BannerAbout';
import Vision from './Vision';
import Why from './Why';

// const breadcrumbs = [
//   {
//     title: 'About Us',
//   },
// ];

export default function Main() {
  return (
    <>
      {/* <div className='lg:w-4/6 md:w-2/3 mx-auto w-full mb-6'> */}
      <div className='mx-auto w-full mb-6'>
        {/* <Breadcrumb breadcrumbs={breadcrumbs} /> */}
        <BannerAbout />

        <h1 className=' text-3xl lg:text-4xl font-bold uppercase text-black text-center px-8 py-2 mt-4'>
          About Us
        </h1>
        {/* <Achieve /> */}

        <Vision />

        <Why />
        
        <About />
        {/* <Vision />
        <div className='w-full h-[1px] bg-slate-200 my-8'></div>
        <WhyUs />
        <div className='w-full h-[1px] bg-slate-200 my-8'></div>
        <Coverage /> */}
      </div>
    </>
  );
}
