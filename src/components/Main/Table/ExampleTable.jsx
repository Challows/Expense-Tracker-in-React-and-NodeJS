import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './Table.css'
import { DeleteIcon } from '../../../Data/Data';

const ExampleTable = ({toggleTab}) => {

  const [transactionsData, setTransactionsData] = React.useState(JSON.parse(localStorage.getItem('Transactions')))
  

    const makeStyle=(status)=>{
        if(status === 'credit')
        {
          return {
            // background: 'rgb(145 254 159 / 47%)',
            color: 'rgb(1, 149, 1)',
          }
        }
        else if(status === 'debit')
        {
          return{
            // background: '#ffadad8f',
            color: 'red',
          }
        }
      }


      return (
        <div  className="table">
        <div className="table--title--section">
          <span className='table-title title-bold'>Recent Transactions</span>
          <span className='table-link' onClick={()=>{toggleTab(3)}}>Show more...</span>
        </div>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
            className='table-container'
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell align="left">Transaction ID</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Amount</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {transactionsData.map((transactionsData) => (
                  <TableRow
                    key={transactionsData.date}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{transactionsData.description}</TableCell>
                    <TableCell align="left">{transactionsData.transactionId}</TableCell>
                    <TableCell align="left">{transactionsData.date}</TableCell>
                    <TableCell align="left">
                      <span className="status" style={makeStyle(transactionsData.type)}>Ksh. {transactionsData.amount.toLocaleString()}</span>
                    </TableCell>
                    <TableCell>
                      <span className='delete-button'>
                        <DeleteIcon />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    );
}

export default ExampleTable