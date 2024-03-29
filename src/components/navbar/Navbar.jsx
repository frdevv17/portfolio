import React, { useState } from 'react'
import './Navbar.css'
import { TbDeviceDesktopCode } from "react-icons/tb";
import { MdMenu } from "react-icons/md";
import MobileNav from './mobileNav/mobileNav';
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <div className='nav-wrapper'>
                <div className="nav-content">
                    <div className='logo-wrapper'>
                        <TbDeviceDesktopCode className='logo' />
                        <h3>frdevv17</h3>
                    </div>
                    <ul>
                        <li>
                            <a href="#" className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='menu-item'>Skills</a>
                        </li>
                        <li>
                            <a href="#" className='menu-item'>Work Experience</a>
                        </li>
                        <li>
                            <a href="#" className='menu-item'>Contact Me</a>
                        </li>
                        <button className='contact-btn' onClick={() => { }}>Hire Me</button>
                    </ul>
                    <button class='menu-btn' onClick={toggleMenu}>
                        {!openMenu ? <MdMenu size={30} /> : <IoCloseSharp size={30} />}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar