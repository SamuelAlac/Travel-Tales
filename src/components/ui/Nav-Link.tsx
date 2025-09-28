import { Link, NavLink, useNavigate } from "react-router-dom"
import { links } from "../../utils/links"
import { useSelector } from "react-redux"
import type { RootState } from "../../state/store"
import { FaUserCircle } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../libs/firebase";

export const Nav = () => {
  const user = useSelector((state: RootState) => state.auth.value);
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
    <>
    {links.map((link, index) => {
      if(link.name === 'Login'){
        return user 
        ? (<div key={index} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="hidden md:block dropdown dropdown-center md:dropdown-end">
            <FaUserCircle size={35} tabIndex={0} role="button" className="text-black"/>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                <li><Link className="text-white" to='/Profile'>Profile</Link></li>
                <li><button className="text-white" onClick={handleSignOut}>Log out</button></li>
              </ul>
          </div>
          </div>)
        : (<NavLink key={index} to={link.path} className={({ isActive }) => `nav-link text-2xl ${isActive ? 'nav-link-active' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{link.name}</NavLink>)
      }

      return(
        <NavLink key={index} to={link.path} className={({ isActive }) => `nav-link text-2xl ${isActive ? 'nav-link-active' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{link.name}</NavLink>
        )
      })}
    </>
  )
}
