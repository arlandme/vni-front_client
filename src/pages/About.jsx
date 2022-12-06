import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Main from '../components/About/MainAbout';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Inspection Services in Vietnam | Third-Party Inspection | Inspection Team</title>
          <meta
            name='keywords'
            content='vninspect about, defectfound about, defect found about'
          />
          <meta
            name='description'
            content='Our Team provides inspection services in Northern and Central Vietnam, Full inspection Pre-shipment Inspection Initial Production During Production Check Check'
          />
        </Helmet>
      </HelmetProvider>

      {/* <div className='lg:container mx-auto lg:px-6 px-4 py-6 relative'> */}
      <div className='lg:container mx-auto lg:px-6 px-4 py-6 relative'>
        <Main />
      </div>
    </>
  );
}
