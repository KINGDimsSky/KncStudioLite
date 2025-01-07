import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/404.jsx'
import Home from './pages/home.jsx'
import Navbar from './components/Navbar/index.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>,
    errorElement: <NotFound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
