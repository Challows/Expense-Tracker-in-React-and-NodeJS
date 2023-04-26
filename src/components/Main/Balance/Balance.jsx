import React from 'react'
import './Balance.css'
import { financialData } from '../../../Data/Data'

const Balance = ({toggleTab}) => {


  return (
    <div className="main-top">
      <div className='balance glass'>
        <span className="label">Balance:</span>
        <span className="balance-amount">Ksh {financialData.balance.toLocaleString()} </span>
      </div>

      <div className='balance glass'>
        <span className="label">Last Period Expenses:</span>
        <span className="balance-amount"> Ksh {financialData.lastMonth.expenses.toLocaleString()} </span>
      </div>

      <div className='transact' onClick={()=>{toggleTab(2)}}>
        <span>Transact now</span>
      </div>

    </div>
  )
}

export default Balance