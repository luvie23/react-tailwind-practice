import React from 'react'
import Item from './Item'
import shoeImg from '../assets/placeholder.png'

const Shop = () => {
    return (
        <div className='w-full h-50% bg-amber-300'>
            <div className=' flex flex-wrap justify-center'>
                <Item  img={shoeImg} text={'shoeName'}/>
                <Item  img={shoeImg} text={'shoeName'}/>
                <Item  img={shoeImg} text={'shoeName'}/>
                <Item  img={shoeImg} text={'shoeName'}/>
                <Item  img={shoeImg} text={'shoeName'}/>
                <Item  img={shoeImg} text={'shoeName'}/>
            </div>
        </div>

    )
}

export default Shop