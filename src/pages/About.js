import { useEffect } from 'react';
import Main from '../components/About/MainAbout';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='lg:container mx-auto lg:px-6 px-4 py-6 relative'>
        <Main />
      </div>
    </>
  )
}