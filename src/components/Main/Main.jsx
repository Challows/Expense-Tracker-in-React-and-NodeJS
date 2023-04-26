import React from 'react'
import Balance from './Balance/Balance'
import Insights from './Insights/Insights'
import ExampleTable from './Table/ExampleTable'
import './Main.css'


const Main = ({toggleTab}) => {
  return (
    <div className='main-wrapper'>
      <Balance 
        toggleTab={toggleTab}
      />
      <Insights />
      <ExampleTable
        toggleTab={toggleTab}
      />
    </div>
  )
}

export default Main