import React from 'react'
import Card from './Card'
import Cardimg1 from '../../assets/c1.png';
import Cardimg2 from '../../assets/c2.png';
import Cardimg3 from '../../assets/c3.png';
import CryptoUpdate from '../crypto/CryptoUpdate'
const Market = () => {
    return (
        <section className="service-sec">
            <CryptoUpdate />
            <div className="">
                <h2 className="text-center py-20 text-2xl">The World’s Fastest Growing
                    Crypto App</h2>
                <div className="grid gap-8 lg:grid-cols-3 md:w-4/6 lg:w-4/5 service-card">
                    <Card title="Easy" content="With a simple interface, crypto investing is easy for everyone." image={Cardimg1} />
                    <Card title="Safe" content="Registered and licensed by BAPPEBTI, assets are securely stored." image={Cardimg2} />
                    <Card title="Customizable" content="You don't have to buy a whole Bitcoin, buy Bitcoin or any other asset. " image={Cardimg3} />
                </div>
            </div>


        </section>
    )
}

export default Market