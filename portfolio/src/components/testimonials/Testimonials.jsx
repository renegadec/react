import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
    {
        avatar: AVTR1,
        client_name: 'ANTOINE',
        review: 'Confidence is a talented go-getter, always adding value. Throughout our lasting work relationship, Confidence has brought professionalism, creativity, and optimism. Looking forward to continuing on a path of success with this stellar individual. A true team player!'
    },
    {
        avatar: AVTR2,
        client_name: 'CRYPTOMENTO99 - XINFIN ECOSYSTEM DEVELOPER USA',
        review: 'I got an opportunity to know Confidence, who can be my Crypto Son, a very brilliant and well knowledge young man! I urge a lot of young people to follow what Confidence is doing'
    },
]
const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from People I have worked with</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({avatar, client_name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="clients__avatar">
                                    <img src={avatar} alt={client_name} />
                                </div>
                                <h5>{client_name}</h5>
                                    <small className="client__review">
                                        {review}
                                    </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials