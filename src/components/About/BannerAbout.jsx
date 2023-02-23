import { banner } from '../../assets/data/about';

export default function BannerAbout() {
  return (
    <>
      <div className='w-full h-[240px] lg:h-[280px] flex items-center justify-center relative overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={require('../../assets/img/banners/' + banner.nameBackground)}
          alt=''
        />
        <div className='bg-black/70 absolute top-0 left-0 h-full w-full'></div>
        <div className='absolute w-full h-full'>
          <div className='px-4 w-full h-full xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[768px] sm:max-w-[576px] mx-auto'>
            <div className='flex justify-center items-center h-full'>
              <div className='flex justify-between items-center py-[40px] md:py-[50px] xl:py-[60px] w-full h-full'>
                <div></div>
                {banner.contents.map((item, index) => (
                  <div key={index} className='text-white text-center'>
                    <h3 className='text-xl leading-9 mb-4'>{item.line1} <br/> {item.line2} </h3>
                    <div className='font-semibold text-4xl lg:text-5xl'>{item.count}</div>
                  </div>
                ))}
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
