import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
        <Navbar/>
        <main className="flex-grow">
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
