import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import sandals1 from '../assets/sandals.png'
import sandals2 from '../assets/sandals2.png'
import sandals3 from '../assets/sandals3.png'


export default function Carousel() {
    return (
        <div className='flex justify-center items-center bg-gradient-to-b from-[#0099ff] via-purple-300 to-slate-300'>
            <div className='h-fit w-1/2 '>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    style={{
                        "--swiper-navigation-color": "#881337"
                      }}
                >
                    <SwiperSlide className='flex justify-center items-center'>
                        <img
                            className="object-cover w-full h-96 md:w-96 rounded-3xl"
                            src={sandals1}
                            alt="image slide 1"
                        />
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center items-center'>
                        <img
                            className="object-cover w-full h-96 md:w-96 rounded-3xl"
                            src={sandals2}
                            alt="image slide 2"
                        />
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center items-center'>
                        <img
                            className="object-cover w-full h-96 md:w-96 rounded-3xl"
                            src={sandals3}
                            alt="image slide 3"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
