import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Spent() {

  const {expenses}=useContext(AppContext);
  
  const totalExpense=expenses.reduce((total,item)=>{
    return (total=total+item.cost)
  },0);

  return (
    <div className="mx-8 my-2 h-24 w-3/4 md:w-1/4 glassmorphism-red  text-white p-4 md:p-10 rounded-lg text-base md:text-lg flex justify-center items-center">
        Spent : ${totalExpense}
        </div>
  )
}

export default Spent