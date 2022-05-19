import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

import Axios from 'axios'
import Coin from './Coin';


const CryptoUpdate = () => {
    const [coinUpdate, setCoinUpdate] = useState([]);

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbinancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h'

    useEffect(() => {
        Axios.get(url).then((response) => {
            setCoinUpdate(response.data)
            console.log(response.data);
        })
    }, [])


    return (
        <div className="cryptoUpdate pt-20">
            <div className="flex justify-between items-center">
                <div>
                    <h4><span className={{ style: "borderBottom: 5px solid #9373ef;" }}>POPULAR</span> ASSETS</h4>
                    <h2 className="mt-5">Crypto Profit Potential</h2>
                </div>
                <div>


                    <NavLink to="./Services.jsx">See Market <i className="fa-solid fa-arrow-right-long"></i></NavLink>
                </div>
            </div>
            <div className="coinUpdate flex lg:flex-row divide-x justify-between sm:flex-col mt-10">
                {coinUpdate.map((coin) => {
                    return <Coin key={coin.id} price={coin} name={coin} image={coin} priceChange={coin} />
                })}


            </div>
        </div>
    )
}


export default CryptoUpdate