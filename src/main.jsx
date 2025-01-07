import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/home.jsx';
import Navbar from './components/Navbar/index.jsx';
import Footer from './components/Footer.jsx';
import Products from './pages/products.jsx';
import Product from './pages/product.jsx';
import { CartProvider } from './hooks/useCart.jsx';
import NotFound from './pages/404.jsx';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CartProvider>
        <Layout />
      </CartProvider>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <Product />,
      },
      {
        path: '*',
        element: <NotFound/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
