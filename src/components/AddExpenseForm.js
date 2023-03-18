import React, {useState} from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react';
import {v4 as uuidv4} from 'uuid';

function AddExpenseForm() {

  const {dispatch}=useContext(AppContext)
  const [name, setName]=useState('');
  const [cost, setCost]=useState('');

  const onSubmit=(event)=>{
    event.preventDefault();
    
    const expense={
      id:uuidv4(),
      name:name,
      cost:parseInt(cost),
      
    };

    dispatch({
      type:'ADD_EXPENSE',
      payload:expense,
    });
  }

  return (
   <form className='w-full  glassmorphism rounded-lg py-5 px-6 md:py-8 mt-5' onSubmit={onSubmit}>
    <label className='block text-sm font-medium' for='name'>Name</label>
    <input className='mb-2 w-full rounded-lg shadow-ld mt-1 focus:outline-none bg-transparent border border-white px-3 py-2 focus:border-blue-600 focus:ring-1 focus:ring-indigo-600'
    required='required'
    type='text'
    id='name'
    value={name}
    onChange={(event)=>setName(event.target.value)}
    ></input>
    <label className='block text-sm font-medium' for='cost'>Cost</label>
    <input className='mb-4 w-full rounded-lg shadow-ld mt-1 focus:outline-none bg-transparent border border-white px-3 py-2 focus:border-blue-600 focus:ring-1 focus:ring-indigo-600' 
    required='required' type='text' id='cost'
    value={cost}
    onChange={(event)=>setCost(event.target.value)}
    ></input>
    <button className='bg-rose-600 px-4 py-2 rounded-md block'>Submit</button>
   </form>
  )
}

export default AddExpenseForm