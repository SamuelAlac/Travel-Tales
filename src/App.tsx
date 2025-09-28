import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth } from "./hooks/useAuth"
import ProtectedRoute from './utils/protected.tsx'
import ProfilePage from './pages/Profile/ProfilePage.tsx'
import { MainLayout } from './layouts/MainLayout.tsx'
import HomePage from './pages/Home/HomePage.tsx'
import AboutPage from './pages/About/AboutPage.tsx'
import TalesPage from './pages/Tales/TalesPage.tsx'
import LoginPage from './pages/Auth/Login/LoginPage.tsx'
import RegisterPage from './pages/Auth/Register/RegisterPage.tsx'
import AddTalePage from "./pages/Tales/create/AddTalePage.tsx";
import TaleDetailPage from "./pages/Tales/view/TaleDetailPage.tsx";
import UpdateTalePage from "./pages/Tales/update/UpdateTalePage.tsx";

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
        children: [
          { index: true, element: <TalesPage/> },
          { path: 'AddTale', element: <ProtectedRoute><AddTalePage/></ProtectedRoute> },
          { path: ':taleID', element: <TaleDetailPage/> },
          { path: ':taleID/UpdateTale', element: <ProtectedRoute><UpdateTalePage/></ProtectedRoute> },
        ]
      },
      {
        path: '/Login',
        element: <LoginPage/>
      },
      {
        path: '/Register',
        element: <RegisterPage/>
      },
      {
        path: '/Profile',
        element: <ProtectedRoute><ProfilePage/></ProtectedRoute>
      }
    ]
  }
])

const App = () => {
  useAuth();
  return <RouterProvider router={router}/> 
}

export default App