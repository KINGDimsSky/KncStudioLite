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
import SignIn from './pages/signin.jsx';
import SignUp from './pages/signup.jsx';
import AboutUs from './pages/aboutus.jsx';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const NoLayout = () => {
  return <Outlet/>
}

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
      },
      {
        path: "/sign-in",
        element: <SignIn/>
      },
      {
        path: "/about-us",
        element: <AboutUs/>
      }
    ],
  },
  {
    path: "/auth",
    element: (
      <CartProvider>
        <NoLayout/>
      </CartProvider>
    ),
    children: [
      {
        path: "/auth/sign-in",
        element: <SignIn/>
      },
      {
        path: "/auth/sign-up",
        element: <SignUp/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
