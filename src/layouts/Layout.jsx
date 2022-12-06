import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';

// Api
import { search as searchServices } from '../services/service';
import { search as searchProducts } from '../services/product';

// components

import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footers/Footer";

export default function Layout() {
  const [services, setServices] = useState();
  const [products, setProducts] = useState();

  // Search services
  useEffect(() => {
    searchServices({
      title: ''
    }).then(res => setServices(res));
  }, []);

  // Search products
  useEffect(() => {
    searchProducts({
      name: ''
    }).then(res => setProducts(res));
  }, []);

  return (
    <>
      <Navbar transparent services={services} products={products} />
      <main>
        <Outlet context={{ services, products }} />
      </main>
      <Footer />
    </>
  );
}
