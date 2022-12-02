import React from 'react'
import {Link} from 'react-router-dom'
import bgImg from '../assets/sandals.png'


const Hero = () => {
    return (

            <div className="bg-[url('../wave.svg')] bg-bottom bg-no-repeat bg-rose-200 h-screen first-letterw-full flex flex-col justify-between">
                <div className='grid md:grid-cols-2 max-2-[1240px] m-auto'>
                    <div className='flex flex-col justify-center md:items-start w-full px-2 py-2 font-OpenSans'>
                        <p>classy. stylish. chic.</p>
                        <h1 className='text-5xl mb-5'>Filipino Made Shoes</h1>
                        <div><Link to='/shop'className='py-3 px-6 sm:w-[60%] my-4 bg-gradient-to-r from-amber-300 to-rose-300 rounded-md'>shop now</ Link></div>
                    </div>
                    <div className='flex justify-center'>
                        <img className='object-cover  w-80  rounded-full border border-rose-100
                    bg-rose-200 md:h-50 sm:w-50' src={bgImg}></img>
                    </div>
                </div>
            </div>

    )
}

export default Hero

