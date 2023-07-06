import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './Components/home';
import Login from './Components/login';
import SignUp from './Components/signUp';
import ForgotPassword from './Components/forgortPassword';
import CurrrencyConverter from './Components/currrency';
import NoPageFound from './Components/noPageFound';
import  {useState} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ForgortPassword from './Components/forgortPassword';
import {addDoc , collection ,getDocDoc, getDocs} from 'firebase/firestore'
import {async} from '@firebase/util';
import {db} from './config/firebase';
import { useEffect } from 'react';
function App() {

  const[transaction, setTransaction ]= useState([]);
  
  const add = async(transactionType,transactionItem, amount )=>{
    setTransaction((transaction) =>[...transaction,{transactionItem:transactionItem, amount:amount, transactionType:transactionType}])

    console.log(transaction);
  };
  
  useEffect(()=>{

    getTransaction();
  })

  const getTransaction= (async()=>{
    try{
      const querySnapShot = await getDocs(collection(db, "transaction"));
      const data =querySnapShot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
      }))
      setTransaction(data);
      console.log(data);

    } catch(error){

    }
  })
  

  return (
    // code for navigating through pages(from login to Home page)
      
    
      
    <Router>
    <div className='Container'>
      <Switch>
      <Route exact path='/'>
       <Login/>
       </Route>
       <Route path='/home'>
        <Home add={add} transaction={transaction}/>
       </Route>
       <Route path='/signUp'>
        <SignUp/>
       </Route>
       
       <Route path='/currency'>
        <CurrrencyConverter/>
       </Route>
       
       <Route path='/forgotPassword'>
        <ForgortPassword/>
       </Route>


       <Route path='*'>
        <NoPageFound/>
       </Route>
     
      
      </Switch>
    
    </div>
  </Router>
      
   
  )
}

export default App


