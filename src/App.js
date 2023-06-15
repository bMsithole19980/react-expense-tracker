import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Components/home';
import Login from './Components/login';
import SignUp from './Components/signUp';
import NoPageFound from './Components/noPageFound';
import AddTransaction from './Components/add';
import DisplayTransiction from './Components/displayTransaction';
import  {useState} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {

  const[transaction, setTransaction ]= useState([]);
  
  const add = (transactionType,transactionItem, amount )=>{
    setTransaction((transaction) =>[...transaction,{transactionItem:transactionItem, amount:amount, transactionType:transactionType}])

    console.log(transaction);
  };
  

  return (
    // code for navigating through pages(from login to Home page)
  
      <Router>
        <div className='Container'>
          <Switch>\
          <Route exact path='/'>
           <Login/>
           </Route>
           <Route path='/home'>
            <Home add={add} transaction={transaction}/>
           </Route>
           <Route path='/signUp'>
            <SignUp/>
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


