import { NavLink } from "react-router-dom"
import { links } from "../../utils/links"

export const Nav = () => {
  return (
    <>
    {links.map((link, index) => (
        <NavLink key={index} to={link.path} className={({ isActive }) => `nav-link text-2xl ${isActive ? 'nav-link-active' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{link.name}</NavLink>
    ))}
    </>
  )
}
