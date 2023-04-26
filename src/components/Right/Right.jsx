import React from 'react';
import {useState} from 'react';
import CustomerReview from './CustomerReview/CustomerReview';
import Updates from './Updates/Updates';
import './Right.css';

const Right = () => {
  
  const [count, setCount] = useState(0);

  function addCount () {
    setCount(prevCount => prevCount + 1);
  }
  function resetCount (){
    setCount(0);
  }

  return (
    <div className="RightSide">
      <div>
        <Updates count={count} addCount={addCount} resetCount={resetCount} />
      </div>
      <div>
        <span className='title-bold'>Performance</span>
        <CustomerReview  />
      </div>
    </div>
  );
}

export default Right