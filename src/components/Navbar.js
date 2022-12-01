import React, {useState} from 'react'

import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return(
        <div className='w-screen h-[80px] z-10 bg-amber-400 fixed drop-shadow-md'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-5xl font-bold mr-4 sm:text-6xl'>COCO.</h1>
                    <ul className='hidden md:flex'>
                        <li>home</li>
                        <li>shop</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button>contact</button>
                    <button>help</button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <Bars3Icon className='w-5'/>: <XMarkIcon className='w-5'/>}
                </div>
            </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-amber-400 w-full px-8'}>
            <li className='border-b-2 border-amber-500 w-full'>home</li>
            <li className='border-b-2 border-amber-500 w-full'>shop</li>
            <div>
                <button>contact</button>
                <button>help</button>
            </div>
        </ul>

        </div>
    )
}

export default Navbar