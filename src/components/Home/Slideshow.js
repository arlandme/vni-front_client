import { useEffect, useState } from 'react';
import { search } from '../../services/slide';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Slideshow() {
  const [slides, setSlides] = useState();

  useEffect(() => {
    search({
      title: '',
      contentLink: '',
      redirectTo: '',
    }).then((res) => setSlides(res));
  }, []);

  return (
    <>
      <div className='relative pt-16 pb-32 flex content-center items-center justify-center min-h-[80vh]'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className='!absolute top-0 w-full h-full !z-0'
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
        >
          {slides ? (
            slides.map((slide) => (
              <SwiperSlide className='' key={slide.id}>
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
                <div
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
                </div>
              </SwiperSlide>
            ))
          ) : (
            <></>
          )}
        </Swiper>
      </div>
    </>
  );
}
