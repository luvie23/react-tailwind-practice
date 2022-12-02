
import React from 'react'

const Item = (props) => {
    return (
        <div className='flex-none mx-20 my-10 px-15 py-15 bg-slate-300 rounded-3xl border border-transparent hover:cursor-pointer hover:border hover:border-zinc-900'>
            <img className="object-contain h-72 w-72 " src={props.img}/>
            <span className='border-b border-zinc-500 flex justify-center text-1xl font-light '>Php {props.price}</span>
            <span className='flex justify-center text-1xl font-semibold'>{props.text}</span>
        </div>
    )
}

export default Item

