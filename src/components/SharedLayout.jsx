import React from 'react'
import { Outlet } from "react-router-dom";
import HeroBanner from './headerSection/HeroBanner'

const SharedLayout = () => {
    return (
        <>
            <HeroBanner />
            <Outlet />
        </>
    )
}

export default SharedLayout