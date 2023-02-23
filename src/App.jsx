import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// layouts
import Layout from './layouts/Layout';

// Views
import Home from './pages/Home';
import Product from './pages/Product';
import Service from './pages/Service';
import About from './pages/About';

import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Coverage from './pages/Coverage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* add routes with layouts */}
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/services/:slug' element={<Service />} />
            <Route path='/products/:slug' element={<Product />} />
            <Route path='/about' element={<About />} />
            <Route path='/coverage' element={<Coverage />} />
          </Route>
          <Route
            path='*'
            element={<Navigate to='/' replace />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
