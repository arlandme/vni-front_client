export default function Vision() {
  return (
    <>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
          <div className='py-2'>
            <div className='flex flex-col items-center gap-2 mb-2'>
              <img
                className='w-14 h-14 rounded-full object-cover shadow'
                src={require('../../assets/img/icon/2.PNG')}
                alt=''
              />
              <div className='font-semibold text-center text-xl text-emerald-500'>
                Our mission
              </div>
              <div className='text-left italic'>
                Save your money, help your sales run smoothly and delete your
                quality worry.
              </div>
            </div>
          </div>
          <div className='py-2'>
            <div className='flex flex-col items-center gap-2 mb-2'>
              <img
                className='w-14 h-14 rounded-full object-cover shadow'
                src={require('../../assets/img/icon/1.PNG')}
                alt=''
              />
              <div className='font-semibold text-xl text-emerald-500'>
                Our vision
              </div>
              <div className='text-left italic'>
                Be the most trustworthy inspection service providing
                team in Vietnam.
              </div>
            </div>
          </div>
          <div className='py-2'>
            <div className='flex flex-col items-center gap-2 mb-2'>
              <img
                className='w-14 h-14 rounded-full object-cover shadow'
                src={require('../../assets/img/icon/3.PNG')}
                alt=''
              />
              <div className='font-semibold text-xl text-emerald-500'>
                Our values
              </div>
              <div className='text-left italic'>
              Objectiveness, Transparency, Preciseness, Integrity, Respect, Gratitude.
              </div>
              {/* <ul className='italic'>
                <li className='pt-1'>Objectiveness</li>
                <li className='pt-1'>Transparency</li>
                <li className='pt-1'>Preciseness</li>
                <li className='pt-1'>Integrity</li>
                <li className='pt-1'>Respect</li>
                <li className='pt-1'>Gratitude</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
