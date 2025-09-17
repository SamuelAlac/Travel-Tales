import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout.tsx'
import HomePage from './pages/Home/HomePage.tsx'
import AboutPage from './pages/About/AboutPage.tsx'
import TalesPage from './pages/Tales/TalesPage.tsx'
import LoginPage from './pages/Auth/Login/LoginPage.tsx'
import RegisterPage from './pages/Auth/Register/RegisterPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: '/About',
        element: <AboutPage/>
      },
      {
        path: '/Tales',
        element: <TalesPage/>
      },
      {
        path: '/Login',
        element: <LoginPage/>
      },
      {
        path: '/Register',
        element: <RegisterPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
