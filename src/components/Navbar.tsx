import { AiOutlineMenu } from "react-icons/ai";
import { useToggle } from "../hooks/useToggle";
import { Nav } from "./ui/Nav-Link";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../libs/firebase";

export const Navbar = () => {

  const [toggle, setToggle] = useToggle();
  const navigate = useNavigate();
  const handleSignOut = async () =>{
    try {
      await signOut(auth)
      alert('User signed out successfully')
      navigate('/')
    } catch (err) {
      console.log(`Error signing out: ${err}`)
    }
  }

  return (
    <div className="flex flex-col p-3.5 lg:px-10 bg-green-100 fixed w-full z-1">
      <div className="flex flex-col justify-between md:flex-row space-y-5 md:space-y-0">
        <div className="flex items-center justify-between gap-5">
          <h1 className="text-2xl text-green-900 grow">Travel Tales</h1>
          <div className="text-black md:hidden"><AiOutlineMenu role="button" onClick={setToggle} /></div>
            <div className="md:hidden dropdown dropdown-end ">
              <FaUserCircle size={35} tabIndex={0} role="button" className="text-black"/>
                <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                  <Link to='/Profile'>Profile</Link>
                  <button onClick={handleSignOut}>Log out</button>
                </div>
            </div>
        </div>

        <nav className={`flex flex-col ${!toggle && 'hidden'} md:flex items-center md:flex-row gap-5`}>
          <Nav/>
        </nav>
      </div>
    </div>
  )
}
