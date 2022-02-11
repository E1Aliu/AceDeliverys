import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FormattedMessage } from "react-intl";

import {CgClose} from 'react-icons/cg'
// import {CgProfile } from 'react-icons/cg'
// import {Data1, Data2, Data3} from '../../Navbar/data'

const Sidebar = (props) => {

    const List = (props) => {
        return (
            <div className='dropdown-links-items'>
                <Link to={props.item.to} className='sidebar-dropdown-link'>
                    {props.item.title}
                </Link>
            </div>
        )
    }


    return (
        <div className='mobile-sidebar'>
             <div className='sidebar-logo-row'>
                <Link to='/'>
                    <div className='mobile-logo-container'>Logo</div>
                    <h6>AceDelivery</h6>
                </Link>
                <button onClick={props.click}><CgClose/> </button>
            </div>

            <div className='mobile-sidebar-links'>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link'>
                        <Link to='/' className='nav-anchor'>
                            <FormattedMessage id="navbar-main-link1" defaultMessage='Dashboard'/> 
                        </Link>
                    </div>
                </div>


                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link'>
                        <Link to='/' className='nav-anchor'>
                            <FormattedMessage id="navbar-main-link2" defaultMessage='Profile' />
                        </Link>
                    </div>
                </div>

                <div className='nav-sidebar-link'>
                    <Link to='/' className='nav-anchor'>
                        <FormattedMessage id="navbar-main-link3" defaultMessage='My Orders' />
                    </Link>
                </div>

               


            </div>
            <div className='sidebar-auth'>
                <div className='nav-auth-link nav-login'>
                    <Link to='/'>Log In</Link>
                </div>
                <div className='nav-auth-link nav-signup'>
                    <Link to='SignUp'>Sign Up</Link>
                </div>
            </div>
            <div className='space'></div>
        </div>
    )
}

export default Sidebar
