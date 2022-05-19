import React from 'react'

const Coin = ({ name, price, image, priceChange }) => {
    return (
        <div className=" flex divide-x justify-between mt-10">

            <div className="flex gap-4 items-center">
                <img className="w-32 pl-3" src={image.image} alt="" />
                <div className="">
                    <h4>{name.name}</h4>
                    <h3>${price.current_price}</h3>

                    {priceChange.price_change_percentage_24h < 0 ? (
                        <h5 className="text-red-500 price-change fa-solid fa-caret-down"> {priceChange.price_change_percentage_24h.toFixed(2)}   %</h5>
                    ) : (
                        <h5 className="text-green-500 price-change fa-solid fa-caret-up">{priceChange.price_change_percentage_24h.toFixed(2)}   %</h5>
                    )
                    }
                </div>
            </div>
        </div >
    )
}

export default Coin