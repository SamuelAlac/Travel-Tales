import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
        <Navbar/>
        <main className="flex-grow">
          <ScrollToTop/>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
