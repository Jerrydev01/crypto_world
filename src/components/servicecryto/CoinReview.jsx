import React from 'react'

const CoinReview = ({ name, image, priceChangePercentage, currentPrice, marketCap }) => {
    return (
        <div>
            <div className="grid grid-cols-3 lg:grid-cols-4 items-center gap-5 coinReview justify-between text-center py-2 lg:py-6 ">
                <div className="grid grid-cols-2 gap-1 items-center text-left">
                    <img className="w-10 md:w-16" src={image} alt="" />
                    <h3 className="text-[1.3rem] md:text-[1.5rem]">{name}</h3>
                </div>
                <p>{currentPrice}</p>

                {priceChangePercentage < 0 ? (
                    <p className="text-red-500 fa-solid fa-caret-down"> {priceChangePercentage.toFixed(2)}   %</p>
                ) : (
                    <p className="text-green-500 fa-solid fa-caret-up">{priceChangePercentage.toFixed(2)}   %</p>
                )
                }

                <p className="hidden lg:block">{marketCap}</p>


            </div>
        </div>

    )
}

export default CoinReview