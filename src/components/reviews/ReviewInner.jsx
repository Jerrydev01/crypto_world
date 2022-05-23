import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import Profile1 from '../../assets/Profile1.png'
import Profile2 from '../../assets/Profile2.png'
import Profile3 from '../../assets/Profile3.png'
import Qoute from '../../assets/qoute.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';




const ReviewInner = () => {

    return (
        <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                // when window width is >= 640px
                300: {
                    width: 300,
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    width: 768,
                    slidesPerView: 2,
                },
            }}

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="grid grid-cols-3"
        >
            <SwiperSlide>
                <div className="innerReview">
                    <img src={Qoute} alt="" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facilis dolor sit cum molorum. </p>
                        <h3>Cameron Williamson</h3>
                        <p>CEO, PlexDesign</p>
                        <div className="avatarStyle">
                            <div className="ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>

                            </div>
                            <img src={Profile1} alt="" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="innerReview">
                    <img src={Qoute} alt="" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facilis dolor sit cum molorum. </p>
                        <h3>Leslie Alexander</h3>
                        <p>Web Designer</p>
                        <div className="avatarStyle">
                            <div className="ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>

                            </div>
                            <img src={Profile2} alt="" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="innerReview">
                    <img src={Qoute} alt="" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facilis dolor sit cum molorum. </p>
                        <h3>Jane Williamson</h3>
                        <p>Marketing Coordinator</p>
                        <div className="avatarStyle">
                            <div className="ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>

                            </div>
                            <img src={Profile3} alt="" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="innerReview">
                    <img src={Qoute} alt="" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facilis dolor sit cum molorum. </p>
                        <h3>Cameron Williamson</h3>
                        <p>CEO, PlexDesign</p>
                        <div className="avatarStyle">
                            <div className="ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>

                            </div>
                            <img src={Profile1} alt="" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    )
}

export default ReviewInner