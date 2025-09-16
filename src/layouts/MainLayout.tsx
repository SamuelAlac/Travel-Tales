import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
        <Navbar/>
        <main className="flex-grow">
            <Outlet/>
        </main>
    </div>
  )
}
