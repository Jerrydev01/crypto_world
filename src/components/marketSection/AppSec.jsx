import React from 'react'
import AppMobile from '../../assets/appmobile1.png'

const AppSec = () => {
    return (
        <div className="app grid lg:grid-cols-2 gap-10 cryptoUpdate ">

            <div className="app-one flex">
                <div className="appStyle">
                    <h4>Step <span className="roundStep roundStep1">1</span></h4>
                    <h3>Download and Install the App</h3>
                    <p>Sign up with your email, verify your account by taking a photo of your KTP, SIM, or passport.</p>
                    <img src={AppMobile} alt="" />
                </div>

            </div>
            <div>
                <div className="appStyle flex flex-col-reverse lg:flex-col">
                    <img src={AppMobile} alt="" />
                    <div>
                        <h4>Step <span className="roundStep roundStep2">2</span></h4>
                        <h3>Sign Up and Verify in
                            10 minutes</h3>
                        <p>Sign up with your email, verify your account by taking a photo of your KTP, SIM, or passport.</p>
                    </div>
                </div>

            </div>
            <div className="app-one flex">
                <div className="appStyle">
                    <h4>Step <span className="roundStep roundStep3">3</span></h4>
                    <h3>FREE Deposit</h3>
                    <p>Deposit your Rupiah balance by transferring funds from banks or your preferred e-wallets.</p>
                    <img src={AppMobile} alt="" />
                </div>

            </div>
            <div>
                <div className="appStyle flex flex-col-reverse lg:flex-col">
                    <img src={AppMobile} alt="" />
                    <div>
                        <h4>Step <span className="roundStep roundStep4">4</span></h4>
                        <h3>Start Investing,
                            No Additional FeesDownload and Install the App</h3>
                        <p>Experience the easiest way to buy and sell crypto assets.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AppSec