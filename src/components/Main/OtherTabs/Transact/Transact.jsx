import {useState, useEffect} from 'react'
import './Transact.css'
import transactBackground from '../../../../imgs/tabs.jpg'
import { rows } from '../../../../Data/Data'
import ExampleTable from '../../Table/ExampleTable'

const Transact = () => {
  const [Tdata, setTdata] = useState(JSON.parse(localStorage.getItem('Transactions')));
  const [updated, setUpdated]=useState(false);

  useEffect(()=>{
    localStorage.setItem('Transactions', JSON.stringify(Tdata))
    },[Tdata])

  const [transaction, setTransaction] = useState(
    {
      amount: '',
      description: '',
      transactionId: '',
      date: '',
      type: ''
    }
  )

  // console.log(transaction)
  
  function handleChange(event) {
    setTransaction(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  }

  function addTransaction(event) {
    const exactTime = new Date();
    let transactionTime = "" + exactTime;
    setTransaction(prevData => {
      return {
        ...prevData,
        type: event.target.name,
        date: transactionTime.substring(0, 24),
        transactionId: "" + new Date().getTime()
      }
    })
    setUpdated(true)
  }

  if (updated) {
    setTdata(prevData => {
      return [
        transaction,
        ...prevData
      ]
    });
    setTransaction({
        amount: '',
        description: '',
        transactionId: '',
        date: '',
        type: ''
    })
    setUpdated(false)
    alert("Transaction successfully added")
  }

  return (
    <div  className='transact-wrapper glass'>
      <div className="transact-cover">
        <div className="transact-left glass">
        <div className="input-area">
          <label htmlFor="amount" className='title-bold input-label'>Enter amount: </label>
          <input
           type="number"
           className='amount-field'
           placeholder='Minimum of 1 shilling'
           onChange={handleChange}
           name='amount'
           value={transaction.amount}
           />
          <label htmlFor="narration" className='title-bold input-label'>Enter description: </label>
          <input 
            type="text"
            className='narration'
            placeholder='Narration'
            onChange={handleChange}
            name='description'
            value={transaction.description}
          />
        </div>
        <div className="button-area">
            <button 
              onClick={addTransaction} 
              className="btn btn-add" 
              name='credit'
              >
              Credit
              </button>
            
            <button 
              className="btn btn-sub" 
              onClick={addTransaction}
              name='debit'
              >
              Debit
              </button>
          </div>
        </div>

        {/* ========== Motivational section ================= */}

        <div className="motivation-section glass">
          <div>
            <span className='quote-of-the-day'>"What's happened, happened. You should learn to move on always."</span>
            <div className="quote-author">
              <span className='title-bold'>-Charles Duya</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================ Table area ======================== */}

      <ExampleTable />
    </div> 
  )
}

export default Transact