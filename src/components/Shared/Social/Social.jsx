import { socials } from '../../../assets/data/socials';

export default function Social({
  containerClasses = 'mt-6 lg:mb-0 mb-6',
  width = '40px',
  height = width,
}) {
  return (
    <>
      <div
        className={
          'flex items-center lg:justify-start justify-center flex-wrap gap-y-2 ' +
          containerClasses
        }
      >
        {socials &&
          socials.map((item, index) =>
            item.title ? (
              <div
                key={index}
                className={`bg-translate text-sky-400 font-normal items-center justify-center align-center outline-none focus:outline-none ml-3 relative group`}
                style={{ height, width }}
              >
                <div className='absolute top-full -left-[9999px] opacity-0 py-2 px-4 bg-white rounded translate-y-[20px] -translate-x-1/2 group-hover:opacity-100 group-hover:left-1/2 group-hover:translate-y-[0px] whitespace-nowrap z-[100] shadow transition'>
                  {item.title}
                </div>
                <a
                  href={item.link}
                  className={`bg-translate text-sky-400 font-normal items-center justify-center align-center outline-none focus:outline-none block group-hover:scale-105 transition `}
                  style={{ height, width }}
                  target='_blank'
                  rel='noopener noreferrer'
                  title={item.name}
                >
                  <img
                    className='w-full h-full object-cover'
                    src={require('../../../assets/img/icon/socials/' +
                      item.nameImg)}
                    alt={item.name}
                  />
                </a>
              </div>
            ) : (
              <a
                key={index}
                href={item.link}
                className={`bg-translate text-sky-400 shadow-lg font-normal items-center justify-center align-center outline-none focus:outline-none ml-3 hover:scale-105 transition `}
                style={{ height, width }}
                target='_blank'
                rel='noopener noreferrer'
                title={item.name}
              >
                <img
                  className='w-full h-full object-cover'
                  src={require('../../../assets/img/icon/socials/' +
                    item.nameImg)}
                  alt={item.name}
                />
              </a>
            )
          )}
      </div>
    </>
  );
}
