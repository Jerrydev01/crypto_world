import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({ title, children }) => {
    return (
        <div className="bg-blue-700 btn-btn rounded-lg text-white p-4 w-2/4 text-center mt-5">
            <NavLink to='/abt'>
                {title}
            </NavLink>
        </div>
    )
}

export default Button