import React from 'react'

import CtaImg from '../../assets/ctaimg.png'
import AppBtn from '../headerSection/AppBtn'

import Ebay from '../../assets/ebay.png'
import Cisco from '../../assets/cisco.png'
import Airbnb from '../../assets/airbnb.png'
import Google from '../../assets/google.png'
import Cnn from '../../assets/cnn.png'
import Uber from '../../assets/uber.png'


const GetApp = () => {
    return (
        <section className="get-app">
            <div className="flex items-center flex-col-reverse lg:flex-row lg:text-left text-center w-9/12 m-auto place-content-center gap-5 pt-10">
                <img className="img-cta" src={CtaImg} alt="" />
                <div className="app-text">
                    <h3>
                        Start earning today
                    </h3>
                    <p>Sign up in a matter of minutes, start investing right away</p>
                    <div className="place-items-center sm:m-auto sm:grid lg:place-content-start">
                        <AppBtn />
                    </div>
                </div>
            </div>
            <div className="cta relative bottom-4 z-40 items-center w-4/5 m-auto place-content-center gap-5 py-10">
                <p className="w-4/6 text-center m-auto place-content-center ">Invite your friend to invest in Cryptogate.
                    Get up to <strong>$200 </strong> for their first purchase.</p>
            </div>
            <p className="w-4/6 text-center m-auto place-content-center ">Given the enormous wealth creation from cryptocurrency</p>
            <div className="grid lg:grid-cols-6 grid-cols-3  gap-5 py-10 px-20">
                <img src={Ebay} alt="" />
                <img src={Cnn} alt="" />
                <img src={Google} alt="" />
                <img src={Airbnb} alt="" />
                <img src={Cisco} alt="" />
                <img src={Uber} alt="" />
            </div>
        </section>
    )
}

export default GetApp