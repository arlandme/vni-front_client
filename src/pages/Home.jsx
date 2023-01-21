import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useOutletContext } from 'react-router-dom';
import CustomerSession from '../components/Home/CustomerSession';
import ServiceSession from '../components/Home/ServiceSession';
import Slideshow from '../components/Home/Slideshow';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { services, customers } = useOutletContext();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Vietnam Inspection Services | Third-Party Service | ANSI/ASQC Z1.4
            (ISO 2859-1)
          </title>
          <meta
            name='description'
            content='Vietnam Inspection Team provides inspection services in Northern and Central Vietnam. Full inspection, Pre-shipment Inspection, Initial Production Check, During Production Check'
          />
        </Helmet>
      </HelmetProvider>

      <Slideshow />

      <ServiceSession services={services} />

      <CustomerSession customers={customers} />
    </>
  );
}
