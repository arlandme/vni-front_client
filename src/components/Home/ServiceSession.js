import { Link } from 'react-router-dom';

// const colors = [
//   {
//     color: 'bg-red-400',
//     icon: 'fa-sharp fa-solid fa-rocket-launch',
//   },
//   {
//     color: 'bg-yellow-400',
//     icon: 'fa-sharp fa-solid fa-bolt',
//   },
//   {
//     color: 'bg-sky-400',
//     icon: 'fa-sharp fa-solid fa-umbrella',
//   },
//   {
//     color: 'bg-orange-400',
//     icon: 'fa-sharp fa-solid fa-heart',
//   },
//   {
//     color: 'bg-emerald-400',
//     icon: 'fa-sharp fa-solid fa-paper-plane',
//   },
//   {
//     color: 'bg-violet-400',
//     icon: 'fa-sharp fa-solid fa-feather',
//   },
//   {
//     color: 'bg-pink-400',
//     icon: 'fa-sharp fa-solid fa-globe',
//   },
// ];

export default function ServiceSession({ services }) {
  return (
    <>
      <section className='pb-20 bg-slate-100 z-2'>
        <div className='lg:container lg:mx-auto lg:px-6 px-4'>
          <h2 className='uppercase text-4xl text-center font-bold py-8 text-emerald-500/90 '>
            our services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {services &&
              services.map((service, index) => (
                <div key={service.id} className='w-full text-center min-h-[240px]'>
                  <div className='relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg h-full group'>
                    <div className='px-4 py-5 flex-auto relative z-3'>
                      <div className='z-2'>
                        {/* <div
                          className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ` + colors[index].color}
                        >
                          <i className={colors[index].icon}></i>
                        </div> */}
                        <h3 className='text-3xl font-semibold'>
                          <Link
                            to={'/services/' + service.path}
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
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
