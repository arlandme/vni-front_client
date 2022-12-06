export default function Coverage() {
  return (
    <>
      <div className='w-full'>
        <h2 className='text-2xl font-bold'>Our Coverage</h2>
        <div className='py-2'>
          <img
            className='w-full object-cover'
            src={require('../../assets/img/Our coverage/our-coverage.jpg')}
            alt=''
          />
        </div>
        <div className='py-2'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='font-semibold text-lg text-emerald-500'>
              Northern Vietnam:
            </div>
          </div>
          <ul className='list-item list-disc ml-8'>
            <li className='py-2'>
              <span className='font-bold'>North East Vietnam:</span> Phu
              Tho, Thai Nguyen, Tuyen Quang, Ha Giang, Cao Bang, Bac Kan, Lang
              Son, Bac Giang, Quang Ninh
            </li>
            <li className='py-2'>
              <span className='font-bold'>North West Vietnam:</span> Hoa
              Binh, Son La, Dien Bien, Lai Chau, Lao Cai, Yen Bai
            </li>
            <li className='py-2'>
              <span className='font-bold'>Red River Delta:</span> Hanoi,
              Vinh Phuc, Bac Ninh, Hung Yen, Hai Duong, Hai Phong, Thai Binh,
              Nam Dinh, Ninh Binh, Ha Nam
            </li>
          </ul>
        </div>
        <div className='py-2'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='font-semibold text-lg text-emerald-500'>
              Central Vietnam:
            </div>
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
    </>
  );
}
