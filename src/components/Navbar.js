import React, {useState} from 'react'

import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return(
        <div className='w-screen h-[80px] z-10 bg-amber-400 fixed drop-shadow-md font-OpenSans'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-5xl font-bold mr-4 sm:text-6xl'>COCO.</h1>
                    <ul className='hidden md:flex'>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/shop'>shop</Link></li>
                    </ul>
                </div>
                <ul className='hidden md:flex '>
                    <li>contact</li>
                    <li>help</li>
                </ul>
                <div className='md:hidden pr-7' onClick={handleClick}>
                    {!nav ? <Bars3Icon className='w-5'/>: <XMarkIcon className='w-5'/>}
                </div>
            </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-amber-400 w-full px-8'}>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/shop'>shop</Link></li>
            <div>
                <li>contact</li>
                <li>help</li>
            </div>
        </ul>

        </div>
    )
}

export default Navbar