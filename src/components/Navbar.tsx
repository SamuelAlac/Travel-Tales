import { NavLink } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai";
import { useToggle } from "../hooks/useToggle";
import { Nav } from "./ui/Nav-Link";

export const Navbar = () => {

  const [toggle, setToggle] = useToggle();

  return (
    <div className="flex flex-col p-5 lg:px-10 bg-green-50">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-green-900">Travel Tales</h1>
          <div className="lg:hidden"><AiOutlineMenu role="button" onClick={setToggle} /></div>
        </div>

        <nav className={`flex flex-col ${!toggle && 'hidden'} md:flex md:flex-col items-center lg:flex-row gap-5`}>
          <Nav/>
        </nav>
      </div>
    </div>
  )
}
