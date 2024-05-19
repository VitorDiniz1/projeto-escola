import './navbar.css'

import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu-icon.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

function Navbar(){

    const [sticky,setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            window.scrollY > 500 ? setSticky(true) : setSticky(false)
        })
    },[])

    const [mobileMenu,setMobileMenu] = useState(false)

    function toogleMenu(){
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)

    }

    return(
        <nav className={`container ${sticky ? 'dark-nav':''}`}>
            <h3>DinizUniversity</h3>
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500} >Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500} >About us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
            </ul>
            <img src={menuIcon} className='menu-icon'onClick={toogleMenu} />
        </nav>
    )
}

export default Navbar