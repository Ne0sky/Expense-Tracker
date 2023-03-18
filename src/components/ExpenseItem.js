import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../context/AppContext'

function ExpenseItem(props) {

  const {dispatch}=useContext(AppContext);

  const handleDelete=()=>{
    dispatch({
      type:'DELETE_EXPENSE',
      payload:props.id,
    })
  }

  return (
    <li className='flex items-center justify-between border-b py-2 md:py-4'>
        {props.name}
        <div className='flex flex-row w-1/2 justify-between items-center'>
            <span className='bg-rose-600 block px-4 rounded-lg' >${props.cost}</span>
            <TiDelete className='cursor-pointer' size='1.5em' onClick={handleDelete}></TiDelete>
            
        </div>
        
    </li>
  )
}

export default ExpenseItem