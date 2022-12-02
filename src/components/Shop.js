import React from 'react'
import Item from './Item'
import shoeImg from '../assets/placeholder.png'

const Shop = () => {
    return (
        <div className='w-full h-fit bg-slate-300 '>
            <div className=' flex flex-wrap justify-center '>
                <Item price='300' img={shoeImg} text={'shoeName'}/>
                <Item price='300' img={shoeImg} text={'shoeName'}/>
                <Item price='300' img={shoeImg} text={'shoeName'}/>
                <Item price='300' img={shoeImg} text={'shoeName'}/>
                <Item price='300' img={shoeImg} text={'shoeName'}/>
                <Item price='300' img={shoeImg} text={'shoeName'}/>
            </div>
        </div>

    )
}

export default Shop