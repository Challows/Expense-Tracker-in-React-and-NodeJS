import React from 'react'
import './Insights.css'
import { cardsData } from '../../../Data/Data'
import Card from './Card'

const Insights = () => {
  return (
    <div className='insights'>
        {cardsData.map(
            (card, id)=> {
                return (
                    <div className="parentContainer" key={id}>
                        <Card 
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                        />
                    </div>
                )
            }
        )}
    </div>
  )
}

export default Insights