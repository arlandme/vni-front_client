

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
            <div className='font-semibold text-md text-emerald-500'>
              Northern Vietnam:
            </div>
          </div>
          <ul className='list-item list-disc ml-8'>
            <li className='py-2'>
              North East Vietnam – 9 provinces: Phu Tho, Thai Nguyen, Tuyen
              Quang, Ha Giang, Cao Bang, Bac Kan, Lang Son, Bac Giang, Quang
              Ninh
            </li>
            <li className='py-2'>
              North West Vietnam – 6 provinces: Hoa Binh, Son La, Dien Bien, Lai
              Chau, Lao Cai, Yen Bai
            </li>
            <li className='py-2'>
              Red River Delta – 10 provinces and city: Hanoi, Vinh Phuc, Bac
              Ninh, Hung Yen, Hai Duong, Hai Phong, Thai Binh, Nam Dinh, Ninh
              Binh, Ha Nam
            </li>
          </ul>
        </div>
        <div className='py-2'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='font-semibold text-md text-emerald-500'>
              Vietnam Central:
            </div>
          </div>
          <ul className='list-item list-disc ml-8'>
            <li className='py-2'>
              North Central Coast – 6 provinces: Thanh Hoa, Nghe An, Ha Tinh,
              Quang Binh, Quang Tri, Thua Thien Hue
            </li>
            <li className='py-2'>Central Coast: Da Nang</li>
          </ul>
        </div>
      </div>
    </>
  )
}