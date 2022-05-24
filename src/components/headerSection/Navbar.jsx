import React from 'react';
import { useState } from 'react'

import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        // navbar section
        <nav className="text-base lg:flex justify-between font-bold px-10 lg:px-20 pt-5 z-[200] fixed w-full bg-gradient-to-r from-[#C9DEFD] via-[#FFFFFE] to-[#F8ECCA] ">
            <div className="logo flex gap-1 items-center z-20">
                <img src={Logo} alt="logo" /><NavLink to="/">CryptoWorld</NavLink>
            </div>
            <div onClick={() => setOpen(!open)} className="flex justify-end relative bottom-8 text-2xl lg:hidden cursor-pointer z-20 w-fit right-0 left-full pr-10">
                <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </div>

            <ul className={`lg:flex items-center gap-4 pt-5 pb-16 lg:py-2 nav-ink text-center transition-all lg:transition-none z-[-50] duration-500 absolute lg:static ease-in bg-gradient-to-r from-[#C9DEFD] via-[#FFFFFE] to-[#F8ECCA] lg:bg-white w-full lg:w-auto left-0 ${open ? 'top-20' : 'top-[-490px]'}`}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="./Market.jsx">Market</NavLink></li>
                <li><NavLink to="./News.jsx">News</NavLink></li>
                <li><a href="https://jerrydev01.github.io/portfolio/public/" target="_blank" rel="noreferrer">About</a></li>
                <li className="btn-nav text-center lg:text-right m-auto lg:m-0"><NavLink to="/wallet">Connect Wallet</NavLink></li>
            </ul>


        </ nav>
    )
}

export default Navbar