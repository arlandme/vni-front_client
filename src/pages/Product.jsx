import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useOutletContext, useParams } from 'react-router-dom';
import Main from '../components/Product/MainProduct';
import Sidebar from '../components/Shared/Sidebar/Sidebar';
import { getByPath } from '../services/product';

export default function Product() {
  const { products } = useOutletContext();
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
            {`${data?.name}`} Inspection | Third-party Inspection | Inspection In Vietnam
          </title>
          <meta
            name='keywords'
            content={`vninspect product , defectfound product, ${data?.name}`}
          />
          <meta
            name='description'
            content='Vietnam Inspection Team provides inspection services in Northern and Central Vietnam. Inspectors are qualified with ISO 17020:2012 and ISO 9001:2015, our teammates who specialize in hardline, softline and Electrical & Electronics have worked in famous inspection service companies (Intertek, SGS, Bureau Veritas and Qima)'
          />
        </Helmet>
      </HelmetProvider>

      <div className='flex flex-wrap lg:container mx-auto lg:px-6 px-4 py-6 relative'>
        <Main data={data} products={products} />
        <Sidebar products={products} data={data} />
      </div>
    </>
  );
}
