import { coverage } from '../../assets/data/coverage';

export default function Coverage() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='w-full mb-4 md:pr-4'>
          <img
            src={require('../../assets/img/others/' + coverage.nameImg)}
            alt=''
            className='object-cover w-full h-full'
          />
        </div>

        <div className='w-full md:pl-4'>
          <h2 className='text-4xl font-bold text-emerald-500 mb-4'>{coverage.title}</h2>
          {coverage.contents.map((content, index) => (
            <div key={index} className='pb-2'>
              <div className='flex items-center gap-2'>
                <div className='font-bold text-lg '>{content.title}:</div>
              </div>
              <ul className='list-item list-disc ml-8'>
                {content.listAddresses.map((item, i) => (
                  <li key={i} className='py-2'>
                    <span className='font-bold'>{item.area}:</span> {item.address}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
