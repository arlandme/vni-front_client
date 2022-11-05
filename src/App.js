import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// layouts
import Layout from './layouts/Layout';

// Views
import Home from './pages/Home';
import Product from './pages/Product';
import Service from './pages/Service';
import About from './pages/About';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'VN Inspection Team – Your Inspection Partner';
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* add routes with layouts */}
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services/:slug' element={<Service />} />
            <Route path='/products/:slug' element={<Product />} />
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
