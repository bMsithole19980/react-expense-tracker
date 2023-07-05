import { useState} from 'react';
import { db } from '../config/firebase';
import { collection , addDoc } from 'firebase/firestore';
import {async} from '@firebase/util';

function AddTransaction(props){
  
 const [transactionItem,setTransactionItem]= useState('');
 const [amount, setAmount]= useState(''); 
 const [transactionType, setTransactionType]=useState('');

 const add =(async()=>{
  //props.add(transactionItem,amount,transactionType);
  try{
    const docRef = await addDoc(collection(db ,"transaction"),{
      transactionItem:transactionItem,
      amount:amount,
      transactionType:transactionType
    });
    alert("added successfully");

  } catch(error){

  }
  

  })

  return(
    <div>
      <br></br>
        <h1>Add new transaction</h1>
        <input required type="text" placeholder="Enter item" onChange={(event)=> setTransactionItem(event.target.value)}/><br></br>
        <input required type="text" placeholder="Enter amount" onChange={(event)=>setAmount(event.target.value)                }/>
        <br></br>
        <select required onChange={(event)=> setTransactionType(event.target.value)}>
            <option>Income</option>
            <option>Expense</option>
            </select>
        <br></br>
    
        <button onClick={add}>Add a transaction</button>

    </div>
  );
  
}


export default AddTransaction