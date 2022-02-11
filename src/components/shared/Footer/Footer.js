import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
// import SelectLanguage from '../SelectLanguage/SelectLanguage';
import './Footer.scss'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {FooterData } from './data';
//ButtonData
import {CgProfile} from 'react-icons/cg'

const Footer = (props) => {
    return (
        <div className='footer'>
            
            <div className="first-row">

                <div className="col1">
                    <Link to='/' className='logo-container'>
                        <div className="logo">Logo</div>
                        <h6>AceDelivery</h6>
                    </Link>
                    <p>
                        <FormattedMessage id='footer-paragraph1' defaultMessage='Our goal is to make it easier for you' />
                    </p>
                    <div className="links">
                        <Link to='/'><FaFacebookSquare /></Link>
                        <Link to='/'><FaInstagram /></Link>
                        <Link to='/'><FaTwitter /></Link>
                        <Link to='/'><FaYoutube /></Link>
                    </div>
                    {/* <div className="buttons">
                        {ButtonData.map((props) => {
                            return(
                                <button>
                                    <div className="icon" style={{content: `url(${props.icon})`}}></div>
                                    <div className="block">
                                        <small>{props.text}</small>
                                        <span>{props.title}</span>
                                    </div>
                                </button>
                            )
                        })}
                    </div> */}
                </div>

                <div className='right'>
                    {FooterData.map((props) => {
                        return(
                            <div className="footer-list">
                                <h6>{props.category}</h6>
                                <div className="links">
                                    {props.links.map((l) => {
                                        return (
                                        <a key={l.to} to={l.to} className="footer-item">
                                            {l.link}
                                        </a>
                                        );
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>


            <div className="last-row">
                <p>
                    <FormattedMessage id='footer-paragraph2' defaultMessage='@ 2021 Endrit Aliu All rights reserved.' />
                </p>
                <div className="links2">
                    <Link to='/'><FormattedMessage id='footer-link1' defaultMessage='Privacy Policy'></FormattedMessage></Link>
                    <Link to='/'><FormattedMessage id='footer-link2' defaultMessage='Terms & Conditions'></FormattedMessage></Link>
                    <Link to='/'><FormattedMessage id='footer-link3' defaultMessage='Refund Policy'></FormattedMessage></Link>
                    <Link to='/'><FormattedMessage id='footer-link4' defaultMessage='Sitemap'></FormattedMessage></Link>
                    <Link to='/'><FormattedMessage id='footer-link5' defaultMessage='Cookie Policy'></FormattedMessage></Link>
                </div>
                {/* <SelectLanguage
                    setLanguage={props.setLanguage}
                    language={props.language}
                /> */}
            </div>

        </div>
    )
}

export default Footer
