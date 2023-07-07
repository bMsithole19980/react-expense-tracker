import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../firestoreReducers/data";
import { useEffect } from 'react';

function TotalBalance() {

    const dispatch =useDispatch();
    const data= useSelector((state)=>state.data.data);

    useEffect(()=>{
        dispatch(fetchData());

    },[]);

    const totalExpense =data.reduce((accumulator ,currentValue)=>{
       if(currentValue.transactionType =="Expense"){
           return accumulator + parseInt(currentValue.amount)
       }
       return accumulator
    },0)
    console.log(totalExpense)

    const totalIncome =data.reduce((accumulator ,currentValue)=>{
        if(currentValue.transactionType =="Income"){
            return accumulator + parseInt(currentValue.amount)
        }
        return accumulator
     },0)
     console.log(totalIncome)





  return (
      <div className='mt-3'>
      <h2>TotalBalance</h2>
      <h4></h4>
        
          <div className='totalBalance'>
              <div>
                  <h4>Income</h4>



                  <h6>{totalIncome}</h6>


              </div>
              <div className='totalBalanceLine'>

                  <h4>Expense</h4>


                  <h4>{totalExpense}</h4>

              </div>
          </div>
      </div>
  )
}

export default TotalBalance;