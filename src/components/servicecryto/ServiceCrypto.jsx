import React from 'react'
import { useState, useEffect } from 'react'

import Axios from 'axios'


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
            <div >

                <div className="crypto-search">
                    <h2 className="text-center text-[2rem] mb-5">Search A Currency</h2>
                    <form action="">
                        <input className="input-search px-3" type="text"
                            onChange={handleSearchChange}
                            placeholder="Search"
                        />
                    </form>
                </div>
               <section className="text-gray-600 pt-7">
                    <div className="container px-5 scroll-py-14 mx-auto">
                        <div className="w-full mx-auto overflow-auto">
                            <table className="table-auto w-full text-left whitespace-no-wrap">
                                <thead className="text-[1.6rem] md:text-[2rem] font-bold">
                                    <tr className=" ">
                                        <th className="px-6 lg:px-4 py-3 title-font tracking-wider  text-gray-900 bg-gray-100 rounded-tl rounded-bl w-[4rem]"></th>
                                        <th className="px-4 py-3 title-font tracking-wider text-gray-900 bg-gray-100 rounded-tl rounded-bl">Name</th>
                                        <th className="px-4 py-3 title-font tracking-wider text-gray-900 bg-gray-100">Price</th>
                                        <th className="px-4 py-3 title-font tracking-wider text-gray-900 bg-gray-100 whitespace-nowrap">Price Chg.</th>
                                        <th className="px-4 py-3 title-font tracking-wider text-gray-900 bg-gray-100">MarketCap</th>
                                        <th className="w-10 title-font tracking-wider text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredCoins.map((allCoins) => {
                                        return (
                                            <tr key={allCoins.id}>
                                                <td className="px-2 py-3 text-lg">

                                                    <img className="w-[4rem]"
                                                        src={allCoins.image} alt={allCoins.image} />
                                                </td>
                                                <td className="px-4 py-3 text-lg font-semibold">{allCoins.name}</td>
                                                <td className="px-4 py-3 text-lg text-gray-900">{allCoins.current_price}</td>
                                                {
                                                    allCoins.price_change_percentage_24h < 0
                                                        ? <td className="px-4 py-3 text-lg  text-red-500 fa-solid fa-caret-down">{allCoins.price_change_percentage_24h.toFixed(2)}</td>
                                                        : <td className="px-4 py-3 text-lg text-green-500 fa-solid fa-caret-up">{allCoins.price_change_percentage_24h.toFixed(2)}</td>
                                                }
                                                <td className="px-4 py-3 text-lg text-gray-900">{allCoins.market_cap}</td>

                                            </tr>

                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </section>


            </div>
        </div>
    )
}

export default ServiceCrypto