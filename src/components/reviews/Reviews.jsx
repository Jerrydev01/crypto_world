import React from 'react'

import ReviewInner from '../reviews/ReviewInner'

const Reviews = () => {
    return (
        <section className="reviewBg px-6">
            <div className="reviewOne text-center pt-10">
                <h4>WHY CHOOSE US</h4>
                <p>We believe that crypto is for everyone. See what they say about us.</p>

                <div className="btn-review btn-btn rounded-lg text-white p-4 w-2/4 text-center">
                    <a href="/">Tweet us @cryptogate <i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>

            <ReviewInner />
        </section>
    )
}

export default Reviews