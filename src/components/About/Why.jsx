import { why } from '../../assets/data/about';

export default function Why() {
  return (
    <>
      <div className='mx-auto py-6'>
        <div className=''>
          <h2 className='font-bold text-center text-3xl text-emerald-500 my-6'>
            {why.title}
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-3'>
            {why.contents.map((item, index) => (
              <div key={index} className='text-center px-4 mb-8 last:mb-0 border-r-0 sm:border-r last:border-r-0 border-gray-500'>
                <div className='font-bold text-2xl text-black mb-3'>
                  {item.title}
                </div>
                <div className='border-b-2 border-dashed border-gray-800 w-2/12 mx-auto mb-6'></div>
                <div className='flex flex-col gap-2 text-center '>
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
