import { about } from '../../assets/data/about';

export default function About() {
  return (
    <>
      <div className='gap-4'>
        {/* <div> */}
        <div className='font-bold text-center text-3xl text-emerald-500 my-6'>
          {about.title}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='md:pr-4 mb-6 md:mb-0'>
            <img
              src={require('../../assets/img/others/' + about.nameImg)}
              alt={about.title}
            />
          </div>
          <div className='md:pl-4'>
            {about.contents.map((item, index) => (
              <p key={index} className='py-2 first:pt-0'>
                {item}
              </p>
            ))}
          </div>
        </div>
        {/* </div> */}
        {/* <div>
          <div className='w-full mb-4'>
            <img
              src={require('../../assets/img/others/about-bg.jpg')}
              alt=''
              className='object-cover w-full h-full'
            />
          </div>

          <div className='w-full'>
            <h2 className='text-2xl font-bold text-emerald-500'>
              Our Coverage
            </h2>
            <div className='pb-2'>
              <div className='flex items-center gap-2'>
                <div className='font-bold text-lg '>Northern Vietnam:</div>
              </div>
              <ul className='list-item list-disc ml-8'>
                <li className='py-2'>
                  <span className='font-bold'>North East Vietnam:</span> Phu
                  Tho, Thai Nguyen, Tuyen Quang, Ha Giang, Cao Bang, Bac Kan,
                  Lang Son, Bac Giang, Quang Ninh
                </li>
                <li className='py-2'>
                  <span className='font-bold'>North West Vietnam:</span> Hoa
                  Binh, Son La, Dien Bien, Lai Chau, Lao Cai, Yen Bai
                </li>
                <li className='py-2'>
                  <span className='font-bold'>Red River Delta:</span> Hanoi,
                  Vinh Phuc, Bac Ninh, Hung Yen, Hai Duong, Hai Phong, Thai
                  Binh, Nam Dinh, Ninh Binh, Ha Nam
                </li>
              </ul>
            </div>
            <div className='pb-2'>
              <div className='flex items-center gap-2'>
                <div className='font-bold text-lg '>Central Vietnam:</div>
              </div>
              <ul className='list-item list-disc ml-8'>
                <li className='py-2'>
                  <span className='font-bold'>North Central Coast:</span> Thanh
                  Hoa, Nghe An, Ha Tinh, Quang Binh, Quang Tri, Thua Thien Hue
                </li>
                <li className='py-2'>
                  <span className='font-bold'>Central Coast:</span> Da Nang
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
