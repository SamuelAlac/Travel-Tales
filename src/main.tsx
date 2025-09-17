import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout.tsx'
import HomePage from './pages/Home/HomePage.tsx'
import AboutPage from './pages/About/AboutPage.tsx'
import BlogsPage from './pages/Blogs/BlogsPage.tsx'

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
        path: '/Blogs',
        element: <BlogsPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
