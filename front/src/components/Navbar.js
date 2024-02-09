import React, {useState} from 'react'
import './Navb.css'

const Navbar = () => {
    const[active , setActive]=useState("nav-menu");
    const navToggle = ()=>{
        active=='nav-menu' ? setActive('nav-menu nav-active') : setActive("nav-menu");
    }
  return (
    <nav className='nav' >
        <a href='#' className='brand'>OneStop</a>
        <ul className={active}>
            <li className='nav-item'>
                <a href='#' className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
                <a href='#' className='nav-link'>Cart</a>
            </li>
            <li className='nav-item'>
                <a href='login' className='nav-link'>Login</a>
            </li>

        </ul>
        <div onClick={navToggle} className='nav-toggler'>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>

    </nav>
  )
}

export default Navbar