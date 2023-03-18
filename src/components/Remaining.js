import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Remaining() {

  const {expenses,budget}= useContext(AppContext)

  const totalExpense=expenses.reduce((total,item)=>{
    return (total=total+item.cost)
  },0);

  const alertType= totalExpense>budget? 'glassmorphism-red' : 'glassmorphism-green'

  return (
    <div className={`mx-8 my-2 h-24 w-3/4 md:w-1/4 ${alertType}  text-white p-4 md:p-10 rounded-lg text-base md:text-lg flex justify-center items-center`}>
        Remaining : $ {budget-totalExpense}
        </div>
  )
}

export default Remaining