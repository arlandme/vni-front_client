import { vision } from '../../assets/data/about';

export default function Vision() {
  return (
    <>
      <div className='mx-auto sm:px-4 py-6'>
        <div className=''>
          <h2 className='font-bold text-center text-3xl text-emerald-500 my-6'>
            {vision.title}
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-3'>
            {vision.contents.map((item, index) => (
              <div key={index} className='text-center px-4 mb-8 last:mb-0'>
                <div className='w-16 h-16  overflow-hidden mx-auto mb-2'>
                  <img
                    className='w-16 h-16 object-cover '
                    src={require('../../assets/img/icon/visions/' +
                      item.nameImg)}
                    alt={item.title}
                  />
                </div>
                <div className='font-bold text-2xl text-amber-500 mb-3'>
                  {item.title}
                </div>
                <div className='flex flex-col gap-2 text-center'>
                  <div>{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
