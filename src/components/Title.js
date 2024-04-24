import React from 'react'

const Title = ({title,overview}) => {
  return (
    <div className='w-screen pt-36 aspect-video px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='p-6 text-lg w-1/3'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-3 px-8 text-xl  rounded-lg hover:bg-opacity-80'> ▶️ Play</button>
            <button className='mx-2 bg-white text-black p-3 px-5 text-xl  rounded-lg hover:bg-opacity-80'>  
            More Info </button>
        </div>
    </div>
  )
}

export default Title