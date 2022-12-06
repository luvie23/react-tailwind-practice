import React, { useState } from 'react'
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";


import sandals1 from '../assets/sandals.png'
import sandals2 from '../assets/sandals2.png'
import sandals3 from '../assets/sandals3.png'

const slides = [
    sandals1,
    sandals2,
    sandals3
]


const Carousel = () => {
    const [cardIndex, setCardIndex] = useState(0)
    const length = slides.length

    const prevSlide = () => {
        setCardIndex(cardIndex === length -1 ? 0 : cardIndex +1)
    }
        
    const nextSlide = () => {
        setCardIndex( cardIndex === 0 ? length -1 : cardIndex - 1)
    }

    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
            <BsArrowLeftSquareFill  
            onClick={prevSlide}
            className='absolute top-[50%] text-3xl text-white cursor-pointer left-5' />
            <BsArrowRightSquareFill 
            onClick={nextSlide}
            className='absolute top-[50%] text-3xl text-white cursor-pointer right-5' />
            {slides.map((item, index) => (
                <div className={index === cardIndex ? 'opacity-100' : 'opacity-0'}>
                    {index === cardIndex && (<img className='object-cover  w-80  rounded-md border border-rose-100
                    bg-rose-200 md:h-50 sm:w-50' src={item}></img>)}
                </div>
            ))}
        </div>
    )
}


export default Carousel