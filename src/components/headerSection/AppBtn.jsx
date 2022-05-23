import React from 'react'

import GooglePlay from '../../assets/GooglePlay.png';
import AppleStore from '../../assets/AppleStore.png';

const AppBtn = () => {
    return (
        <div className="flex gap-2 items-center mt-10 cursor-pointer justify-start">
            <img src={AppleStore}
                alt="appleStore"
                className="w-36" />
            <img src={GooglePlay}
                alt="GooglePlay"
                className="w-40" />
        </div>
    )
}

export default AppBtn