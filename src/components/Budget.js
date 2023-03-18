import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext'

function Budget() {

  const { budget } = useContext(AppContext);

  return (
    <div  className="mx-8 my-2 h-24 w-3/4 md:w-1/4 glassmorphism  text-white px-4  md:p-10 rounded-lg text-base md:text-lg flex justify-between items-center ">
        <span>Budget : ${budget}</span>
        <button className='bg-white  py-1 px-4 md:px-8 rounded-lg text-black'>Edit</button>
        </div>
  )
}

export default Budget