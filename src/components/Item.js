
import React from 'react'

const Item = (props) => {
    return (
        <div className='flex-none mx-10 my-10 px-5 py-5 bg-white rounded-3xl border border-amber-300'>
            <img className="object-contain h-48 w-48 border-b border-slate-500" src={props.img}/>
            <span className='flex justify-center text-1xl font-bold '>{props.text}</span>
        </div>
    )
}

export default Item

