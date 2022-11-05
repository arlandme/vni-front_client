import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import ServiceSession from '../components/Home/ServiceSession';
import Slideshow from '../components/Home/Slideshow';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { services } = useOutletContext();
  
  return (
    <>
      <Slideshow />

      <ServiceSession services={services} />
    </>
  )
}