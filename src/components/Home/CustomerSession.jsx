import Skeleton from 'react-loading-skeleton';

// Import Swiper React components
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { useRef } from 'react';

export default function CustomerSession({ customers }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className='pb-20 bg-slate-100 z-2'>
        <div className='lg:container lg:mx-auto lg:px-6 px-4'>
          <h2 className='uppercase text-4xl text-center font-bold py-8 text-emerald-500/90 '>
            Our Partners <br className='sm:hidden' />
          </h2>
          <div className='relative'>
            <Swiper
              className='w-full'
              dir='ltr'
              spaceBetween={20}
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              breakpoints={{
                // when window width is >= 640px
                768: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              loop
              autoplay={{
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper) => {
                // Delay execution for the refs to be defined
                setTimeout(() => {
                  // Override prevEl & nextEl now that refs are defined
                  if (swiper.params) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }

                  // Re-init navigation
                  if (swiper.navigation) {
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                });
              }}
            >
              {customers
                ? customers.map((item, index) => (
                    <SwiperSlide
                      key={item.id}
                      className='w-full text-center transition duration-150 ease-in hover:opacity-90 relative group'
                      title={item.name}
                    >
                      <div className='overflow-hidden rounded'>
                        <img
                          src={item.thumbnail}
                          alt={item.name}
                          className='object-cover w-full h-full rounded transition group-hover:scale-125 duration-500'
                        />
                      </div>
                      {/* <a
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 lg:opacity-0 px-4 py-2 rounded bg-white/90 transition-all hover:text-sky-500 hover:underline font-semibold text-lg max-w-1/2'
                        href={item.link || '/'}
                        target={'_blank'}
                        rel='noreferrer'
                      >
                        {item.name}
                      </a> */}
                      <a
                        className='  transition-all hover:text-sky-500 hover:underline  text-lg max-w-1/2'
                        href={item.link || '/'}
                        target={'_blank'}
                        rel='noreferrer'
                      >
                        {item.name}
                      </a>
                    </SwiperSlide>
                  ))
                : [...Array(4)].map((_, index) => (
                    <SwiperSlide key={index}>
                      <Skeleton className=' min-h-[240px]' />
                    </SwiperSlide>
                  ))}
            </Swiper>
            <div className='flex items-center w-full absolute top-1/2 z-10'>
              <button
                className='w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform shadow-navigation -translate-x-1/2 rounded-full xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl start-0 left-0'
                aria-label='prev-button'
                ref={prevRef}
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z'></path>
                </svg>
              </button>
              <button
                className='w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform shadow-navigation translate-x-1/2 rounded-full xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl end-0 right-0'
                aria-label='next-button'
                ref={nextRef}
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z'></path>
                </svg>
              </button>
            </div>
          </div>
          {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {customers
              ? customers.map((service, index) => (
                  <div
                    key={service.id}
                    className='w-full text-center min-h-[240px]'
                  >
                    <div className='relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg h-full group'>
                      <div className='px-4 py-5 flex-auto relative z-3'>
                        <div className='z-2'>
                          <h3 className='text-3xl font-semibold'>
                            <Link
                              to={'/customers/' + service.path}
                              className='hover:text-emerald-500 text-white'
                            >
                              {service.title}
                            </Link>
                          </h3>
                          <p className='mt-2 mb-4 text-slate-200'>
                            {service.summary}
                          </p>
                        </div>
                      </div>
                      <div className='absolute inset-0 rounded-lg overflow-hidden brightness-50'>
                        <img
                          className='w-full h-full object-cover transition group-hover:scale-110 duration-500'
                          src={service.thumbnail}
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                ))
              : [...Array(4)].map((_, index) => (
                  <Skeleton key={index} className=' min-h-[240px]' />
                ))}
          </div> */}
        </div>
      </section>
    </>
  );
}
