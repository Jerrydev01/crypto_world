import React from 'react'
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo.svg';;

const Footer = () => {
    return (
        <footer>
            <div className="footer-sec grid lg:grid-cols-4 sm:grid-cols-2 py-20 px-10 sm:px-20 gap-8">
                <div className="foot-inner1">
                    <div className="logo flex gap-1 items-center mb-3">
                        <img src={Logo} alt="logo" /><NavLink to="/">CryptoWorld</NavLink>
                    </div>
                    <p>Assets stored on Pintu are protected and secured by curv.co technology.</p>
                    <div className="social-icon">
                        <span><a href="#"><i className="fa-brands fa-facebook-square"></i></a></span>
                        <span><a href="#"><i className="fa-brands fa-instagram-square"></i></a></span>
                        <span><a href="#"><i className="fa-brands fa-twitter-square"></i></a></span>
                    </div>
                </div>
                <div className="foot-inner2">
                    <ul>
                        <p className="pb-3"><strong>Company</strong></p>
                        <li><a href="http://">About</a></li>
                        <li><NavLink to="*">Contact Us</NavLink></li>
                        <li><NavLink to="*">Careers</NavLink></li>
                        <li><NavLink to="*">We're Hiring</NavLink></li>
                    </ul>
                </div>
                <div className="foot-inner3">
                    <ul>
                        <p className="pb-3"><strong>Products</strong></p>
                        <li><a href="http://">Overview</a></li>
                        <li><NavLink to="*">Download</NavLink></li>
                        <li><NavLink to="*">Security</NavLink></li>
                        <li><NavLink to="*">Support</NavLink></li>
                    </ul>
                </div>
                <div className="foot-inner4">
                    <ul>
                        <p className="pb-3"><strong>Our Office</strong></p>
                        <li><a href="http://"><i className="fa-solid fa-location-dot pr-3"></i>Somewhere in Nigeria </a></li>
                        <li><a href="http://"><i className="fa-solid fa-square-phone pr-3"></i>+234333333333</a></li>
                        <li><a href="http://"><i className="fa-solid fa-envelope pr-3"></i>cryptoworld@ex.com</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="w-3/4 m-auto place-items-center grid ">
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 py-6">
                    <li><a href="#">Support</a></li>
                    <li><a href="#">API</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer