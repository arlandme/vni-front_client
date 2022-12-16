export default function About() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div>
          <div className='font-bold text-2xl text-emerald-500'>
            About The Vietnam Inspection Team
          </div>
          <p className='py-4'>
            Established in the context of the global economic crisis, The
            Vietnam Inspection Team understands the difficulties in sales of
            customers and the delay in mass production of factories. We were
            born with the mission to help customers’ sales go smoothly as well
            as strictly and systematically control product quality based on objectivity, transparency and accuracy.
          </p>
          <p className='pb-4'>
            With a team of professional, qualified and experienced inspectors, we
            provide our customers with the best quality control solution in
            every service and can do the full inspection services: Initial
            production check (IPC), During production check (DUPRO),
            Pre-shipment inspection (PSI), Container loading supervision (LS),
            Sample drawing (SD) and Full Inspection (FI).
          </p>
          <p className=''>
            The Vietnam Inspection Team is a perfect choice for quality control
            and the best partner of inspection service companies.
          </p>
        </div>
        <div>
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
        </div>
      </div>
    </>
  );
}
