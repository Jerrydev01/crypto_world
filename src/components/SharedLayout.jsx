import React from 'react'
import { Outlet } from "react-router-dom";
import GetApp from './getapp/GetApp';
import HeroBanner from './headerSection/HeroBanner'
import Footer from './footer/Footer'

const SharedLayout = () => {
    return (
        <>
            <HeroBanner />
            <Outlet />
            <GetApp />
            <Footer />
        </>
    )
}

export default SharedLayout