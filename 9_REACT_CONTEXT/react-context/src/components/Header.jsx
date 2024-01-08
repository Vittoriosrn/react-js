import './Header.css'
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutus'>AboutUs</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </nav>
  )
}

export default Header