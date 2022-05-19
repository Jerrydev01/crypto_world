import React from 'react'
import { Link } from 'react-router-dom'



const Card = ({ title, content, image }) => {
    return (
        <div className="card rounded-2xl p-8 h-full">
            <img src={image} alt="" />
            <h3 className="my-2">{title}</h3>
            <p className="mb-8">{content}</p>
            <Link to='/'>Learn more <i className="fa-solid fa-arrow-right-long"></i></Link>
        </div>
    )
}

export default Card
