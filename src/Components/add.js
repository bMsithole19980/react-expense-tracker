import { useState} from 'react';

function AddTransaction(props){
  
 const [transactionItem,setTransactionItem]= useState('');
 const [amount, setAmount]= useState(''); 
 const [transactionType, setTransactionType]=useState('');
 /* */
 const add =(()=>{
  props.add(transactionItem,amount,transactionType);

 })

  return(
    <div>
        <h1>Add new transaction</h1>
        <input type="text" placeholder="Enter amount" onChange={(event)=> setTransactionItem(event.target.value)}/><br></br>
        <input type="text" placeholder="Enter amount" onChange={(event)=>setAmount(event.target.value)                }/>
        <br></br>
        <select onChange={(event)=> setTransactionType(event.target.value)}>
            <option>Income</option>
            <option>Expense</option>
            </select>
        <br></br>
    
        <button onClick={add}>Add a transaction</button>

    </div>
  );
  
}


export default AddTransaction