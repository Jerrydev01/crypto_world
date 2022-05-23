import React from 'react'
import { useState, useEffect } from 'react'

import Axios from 'axios'
import CoinReview from './CoinReview'

const ServiceCrypto = () => {
    const [cryptoService, setCryptoservice] = useState([]);
    const [search, setSearch] = useState('');

    const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d';

    useEffect(() => {
        Axios.get(URL).then((response) => {
            setCryptoservice(response.data);
            console.log(response.data);
        });
    }, []);


    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const filteredCoins = cryptoService.filter(allCoins =>
        allCoins.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="bg-header">
            <div className="w-[90%] lg:w-4/5 m-auto grid place-content-center py-10 lg:px-0">

                <div className="crypto-search">
                    <h2 className="text-center text-[2rem] mb-5">Search A Currency</h2>
                    <form action="">
                        <input className="input-search" type="text"
                            onChange={handleSearchChange}
                            placeholder="Search"
                        />
                    </form>

                </div>
                <div className="flex  justify-between gap-4 mr-0 sm:mr-16 pt-7">
                    <h3></h3>
                    <h3 className="text-[1.6rem] md:text-[2rem]">Name</h3>
                    <h3 className="text-[1.6rem] md:text-[2rem]">Price</h3>
                    <h3 className="text-[1.6rem] md:text-[2rem]">Price Chg.</h3>
                    <h3 className="hidden lg:block text-[1.6rem] md:text-[2rem]">MarketCap</h3>
                </div>
                <hr />
                {filteredCoins.map((allCoins) => {
                    return <CoinReview key={allCoins.id}
                        name={allCoins.name}
                        currentPrice={allCoins.current_price}
                        priceChangePercentage={allCoins.price_change_percentage_24h}
                        image={allCoins.image}
                        marketCap={allCoins.market_cap} />
                })}

            </div>
        </div>
    )
}

export default ServiceCrypto