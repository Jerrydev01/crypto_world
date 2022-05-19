import React from 'react';
import Logo from '../../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {

    return (
        // navbar section
        <nav className="text-base flex justify-between font-bold px-20 pt-5 ">
            <div className="logo flex gap-1 items-center">
                <img src={Logo} alt="logo" /><NavLink to="/">CryptoWorld</NavLink>
            </div>
            <div>
                <ul className="flex items-center gap-4">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="./Services.jsx">Services</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    <li><a href="https://jerrydev01.github.io/portfolio/public/">About</a></li>
                    <li className="btn-nav"><NavLink to="/wallet">Connect Wallet</NavLink></li>
                </ul>
            </div>
        </ nav>
    )
}

export default Navbar