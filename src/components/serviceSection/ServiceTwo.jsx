import React from 'react'

import AppSec from './AppSec'

const ServiceTwo = () => {
    return (
        <section>
            <div className="flex cryptoUpdate justify-between gap-10 pt-10">
                <div className="">
                    <h3>Start your investment.</h3>
                    <p>Start your first trade with these easy steps.</p>
                </div>
                <div className="grid grid-cols-3 divide-x items-center mt-10 gap-2" >
                    <div className="cryto-users">
                        <h4>24h trading volume</h4>
                        <h3>$76 B</h3>
                    </div>
                    <div className="border-slate-200 pl-4 cryto-users">
                        <h4>App Store Ratings</h4>
                        <h3> 4.6/5</h3>
                    </div>
                    <div className="border-slate-200 pl-4 cryto-users">
                        <h4>Google Play Ratings</h4>
                        <h3>4.5/5</h3>
                    </div>

                </div>
            </div>
            <div className="appSec pt-16">
                <AppSec />
            </div>
        </section>
    )
}

export default ServiceTwo


