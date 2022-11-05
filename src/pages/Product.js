import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Main from '../components/Product/MainProduct';
import Sidebar from '../components/Shared/Sidebar/Sidebar';
import { getByPath } from '../services/product';

export default function Product() {
  const { products }  = useOutletContext();
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    if (params)
      getByPath(params.slug).then(res => setData(res));
  }, [params]);

  return (
    <>
      <div className='flex flex-wrap lg:container mx-auto lg:px-6 px-4 py-6 relative'>
        <Main data={data} products={products} /> 
        <Sidebar products={products} />
      </div>
    </>
  )
}