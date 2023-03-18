import React from 'react'
import ExpenseItem from './ExpenseItem'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext'

    // const expenses=[
    //     { id:123, name:"Shopping", cost:50},
    //     { id:123, name:"Holiday", cost:300},
    //     { id:123, name:"Travel", cost:70},
    //     { id:123, name:"Travel", cost:70},
    //     { id:123, name:"Travel", cost:70},
    //     { id:123, name:"Travel", cost:70},
    //     { id:123, name:"Travel", cost:70},
    //     { id:123, name:"Travel", cost:70},
    //     { id:123, name:"Travel", cost:70},
    //     { id:123, name:"Travel", cost:70},
    //     { id:123, name:"Travel", cost:70},
    //     { id:123, name:"Study Materials", cost:100},
    // ]

    


function ExpenseList() {
  const { expenses } = useContext(AppContext);
  return (
    <ul className='w-full glassmorphism rounded-lg py-5 px-4 md:py-8 mt-5 overflow-scroll overflow-x-hidden max-h-96 '>
        {expenses.map((expense)=>(
            <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost} />
        ))}
    </ul>
  )
}

export default ExpenseList