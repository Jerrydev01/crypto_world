import React from 'react';
import Button from '../Button';
import Navbar from './Navbar';
import CrytoImg from '../../assets/img-header.png';
import AppBtn from './AppBtn'

const Banner = () => {
    return (
        <header className="bg-header">
            <Navbar />
            <div className="flex flex-col lg:flex-row items-center">

                <div className="px-10 lg:px-20 lg:block lg:text-left sm:m-auto sm:grid sm:place-items-center sm:text-center pt-24 sm:mt-20 mt-10 hero-header">
                    <h4 className="pl-2">CRYPTO MARKET</h4>
                    <h1 className="leading-normal hero-header-text">Crypto App for Everyone</h1>
                    <p className="my-4" style={{ color: '#475766' }}>Simple and safe crypto investment. Starting from IDR 11,000.</p>
                    <Button title="Start Investing Now" />
                    <AppBtn />
                    <div className="grid grid-cols-3 divide-x items-baseline mt-10 justify-between" >
                        <div className="cryto-users">
                            <h4>Founded in</h4>
                            <h3>2022</h3>
                        </div>
                        <div className="border-slate-200 pl-4 cryto-users">
                            <h4>Active User</h4>
                            <h3>220k</h3>
                        </div>
                        <div className="border-slate-200 pl-4 cryto-users">
                            <h4>Crypto list</h4>
                            <h3>500</h3>
                        </div>

                    </div>
                </div>
                <div className=" pr-6">
                    <img className='object-contain w-full'
                        src={CrytoImg}
                        alt="crypto app" />
                </div>

            </div>

        </header>
    )
}

export default Banner