import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import clsx from "clsx";
import { FormattedMessage } from "react-intl";

import'./navbar.scss';
import MobileNav from '../MobileNav/MobileNav'

const Navbar = (props)=>{
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
    const nav = document.querySelector(".nav");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 180 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <div id="navbar" className={clsx(`nav ${props.styles}`, isSticky ? "nav__sticky" : "")} >
            <Link to='/' className='nav-logo'>
                <div className='logo-container'>Logo</div>
                <h6>AceDelivery</h6>
            </Link>

            <div className='nav-links'>

                <div className='nav-link'>
                        <Link to='/'>
                         <FormattedMessage id="navbar-main-link1" defaultMessage='Dashboard'/>
                         </Link>
                </div>

                <div className='nav-link'>
                    <Link to='/'>
                         <FormattedMessage id="navbar-main-link2" defaultMessage='Profile' />
                    </Link>
                </div>


                <div className='nav-link'>
                    <Link to="/">
                        <FormattedMessage id="navbar-main-link3" defaultMessage='My Orders' />
                    </Link>
                </div>
                <div className='nav-auth'>
                <div className='nav-auth-link nav-login'>
                    <Link to='/'>Log In</Link>
                </div>
                <div className='nav-auth-link nav-signup'>
                    <Link to='SignUp'>Sign Up</Link>
                </div>
            </div>
            </div>
             <MobileNav />
        </div>
    )
}

export default Navbar;