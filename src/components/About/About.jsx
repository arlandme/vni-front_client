export default function About() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div>
          <div className='font-bold text-2xl text-emerald-500'>
            About InsQuality
          </div>
          <p className='py-4'>
            Established in the context of the global economic crisis, 
            InsQuality understands the difficulties in sales of
            customers and the delay in mass production of factories. We were
            born with the mission to help customers’ sales go smoothly as well
            as strictly and systematically control product quality based on objectivity, transparency and accuracy.
          </p>
          <p className='pb-4'>
            InsQuality has two offices which perfectly support the inspection services
            and fully cover the northern areas. Strong industrialization will spread in Northern Vietnam in the future,
            therefore we set up an office in Hung Yen to easily cover the inspections in northern provinces with large industrial zones.  
            Vietnam is oriented to focus on pushing industrialization development with available advantageous conditions, 
            strong industrial development will lead to high requirements of quality and create more service segments in the inspection 
            field due to increasing customers’ needs and various product categories. When industry in Northern Vietnam thrives, 
            customers will use professional inspection services that are suitable for their costs and products. Seeing this in the future, 
            InsQuality was established to catch this trend to help customers save cost as well as time with professionalism 
            in each service.
          </p>
          <p className=''>
            Being qualified with ISO 17020:2012 and ISO 9001:2015, 100% our QC inspectors who graduated from technical universities with 
            Bachelor of Engineering and good English skills. Their excellences at every industry are dedicated to bring the best inspection 
            services for customers. With a team of professional, qualified, experienced and local inspectors, we provide our customers with the best 
            quality control solution in every service and can do the full inspection services: Initial production check (IPC), During production check (DUPRO), 
            Pre-shipment inspection (PSI), Container loading supervision (LS), Sample drawing (SD), Full Inspection (FI) and Factory audit (FA). 
            We are a perfect choice for customers who look for a trustworthy inspection company to protect their brands.
          </p>
          <p className='mt-4'>
            InsQuality - Your reliable inspection service partner.
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
