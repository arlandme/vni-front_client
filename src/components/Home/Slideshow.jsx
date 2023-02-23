import { useEffect, useState } from 'react';
import { search } from '../../services/slide';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import Skeleton from 'react-loading-skeleton';

export default function Slideshow() {
  const [slides, setSlides] = useState();

  // const prevRef = useRef(null);
  // const nextRef = useRef(null);

  useEffect(() => {
    search({
      title: '',
      contentLink: '',
      redirectTo: '',
    }).then((res) => setSlides(res));
  }, []);

  return (
    <>
      <div className='relative pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh]'>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          className='!absolute top-0 w-full h-full !z-0'
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            // delay: 4000,
            // pauseOnMouseEnter: true,
          }}
          loop
          // navigation={{
          //   prevEl: prevRef.current,
          //   nextEl: nextRef.current,
          // }}
          // onSwiper={(swiper) => {
          //   // Delay execution for the refs to be defined
          //   setTimeout(() => {
          //     // Override prevEl & nextEl now that refs are defined
          //     if (swiper.params) {
          //       swiper.params.navigation.prevEl = prevRef.current;
          //       swiper.params.navigation.nextEl = nextRef.current;
          //     }

          //     // Re-init navigation
          //     if (swiper.navigation) {
          //       swiper.navigation.destroy();
          //       swiper.navigation.init();
          //       swiper.navigation.update();
          //     }
          //   });
          // }}
        >
          {slides
            ? slides.map((slide) => (
                <SwiperSlide key={slide._id}>
                  <div
                    className='absolute top-0 w-full h-full bg-center bg-cover'
                    style={{
                      backgroundImage: "url('" + slide.backgroundImage + "')",
                    }}
                  >
                    <span
                      id='blackOverlay'
                      className='w-full h-full absolute opacity-40 bg-black'
                    ></span>
                  </div>
                  <div className='container mx-auto absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                    <div className='flex flex-wrap'>
                      <div className='w-full lg:w-6/12 px-6'>
                        <div className='pr-12'>
                          <h1 className='text-white font-semibold text-5xl'>
                            {slide.title}
                          </h1>
                          <p className='py-2 text-white text-lg' dangerouslySetInnerHTML={{__html: slide.description}}>
                          </p>
                          <Link
                            to={slide.redirectTo}
                            className='mt-4 inline-block text-lg text-slate-100 px-6 py-2 bg-emerald-500 rounded-lg hover:bg-emerald-600 align-middle transition'
                          >
                            {slide.contentLink}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px'
                    style={{ transform: 'translateZ(0)' }}
                  >
                    <svg
                      className='absolute bottom-0 overflow-hidden'
                      xmlns='http://www.w3.org/2000/svg'
                      preserveAspectRatio='none'
                      version='1.1'
                      viewBox='0 0 2560 100'
                      x='0'
                      y='0'
                    >
                      <polygon
                        className='text-slate-100 fill-current'
                        points='2560 0 2560 100 0 100'
                      ></polygon>
                    </svg>
                  </div> */}
                </SwiperSlide>
              ))
            : [...Array(3)].map((_, index) => (
                <SwiperSlide className='-mt-[5px]' key={index}>
                  <Skeleton containerClassName='h-full' className='h-full' />
                </SwiperSlide>
              ))}
        </Swiper>
        {/* <div className='flex items-center w-full absolute top-1/2 z-10'>
          <button
            className='w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform shadow-navigation -translate-x-1/2 rounded-full xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl start-0 left-4'
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
            className='w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform shadow-navigation translate-x-1/2 rounded-full xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl end-0 right-4'
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
        </div> */}
      </div>
    </>
  );
}
