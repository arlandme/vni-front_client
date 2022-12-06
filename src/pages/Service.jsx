import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useOutletContext, useParams } from 'react-router-dom';
import Main from '../components/Service/MainService';
import Sidebar from '../components/Shared/Sidebar/Sidebar';
import { getByPath } from '../services/service';

export default function Service() {
  const { products, services } = useOutletContext();
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    if (params) getByPath(params.slug).then((res) => setData(res));
  }, [params]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Vietnam Inspection Services | {`${data?.title}`} | Third-party
            Inspection
          </title>
          <meta
            name='keywords'
            content={`vninspect service , defectfound service, ${data?.title}`}
          />
          <meta
            name='description'
            content='Vietnam Inspection Team provides inspection services in Northern and Central Vietnam. Inspectors are professional, qualified and experienced. Our teammates who specialize in hardline, softline and Electrical & Electronics have worked in famous inspection service companies (Intertek, SGS, Bureau Veritas and Qima)'
          />
        </Helmet>
      </HelmetProvider>
      <div className='flex flex-wrap lg:container mx-auto lg:px-6 px-4 py-6 relative'>
        <Main data={data} services={services} />
        <Sidebar products={products} data={data} />
      </div>
    </>
  );
}
