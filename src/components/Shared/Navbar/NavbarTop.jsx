import Social from '../Social/Social';


export default function NavbarTop() {
  return (
    <>
      <div className=' bg-emerald-500'>
        <div className='lg:container lg:px-6 lg:mx-auto flex flex-wrap items-center justify-end py-2 px-4 w-full'>
          <Social containerClasses='py-1' width='22px' />
        </div>
      </div>
    </>
  )
}

