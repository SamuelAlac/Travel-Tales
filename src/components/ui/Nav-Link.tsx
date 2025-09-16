import { NavLink } from "react-router-dom"
import { links } from "../../utils/links"

export const Nav = () => {
  return (
    <>
    {links.map(link => (
        <NavLink to={link.path} className={({ isActive }) => `nav-link text-2xl ${isActive ? 'nav-link-active' : ''}`}>{link.name}</NavLink>
    ))}
    </>
  )
}
