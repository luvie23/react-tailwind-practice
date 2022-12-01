import React from 'react'



import bgImg from '../assets/coco.jpg'

const Hero = () => {
    return (
        <div className='w-full h-screen bg-amber-300 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-2-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-2'>
                    <p>classy. stylish. chic.</p>
                    <h1 className='text-5xl'>Filipino Made Shoes</h1>
                    <button className='py-3 px-6 sm:w-[60%] my-4 bg-slate-200'> shop now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero