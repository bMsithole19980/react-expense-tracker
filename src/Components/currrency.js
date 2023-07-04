import React from 'react'
import { useEffect ,useState } from 'react';

//API URl fro currency converter
const url="https://api.exchangerate.host/latest";

function CurrrencyConverter() {

    const [currencyOptions, setCurrencyOptions]= useState([]);
    const [amount, setAmount]=useState(1);
    const [fromCurrency, setFromCurrency]= useState();
    const [toCurrency, setToCurrency]= useState();
    const [exchangeRate , setExchangeRate]= useState();
    const [showCurrency, setShowCurrency]= useState();

    //fetching data from the api w hen components mounts
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then((data)=>{
            console.log(data);
            const firstCurrency =Object.keys(data.rates)[0];
            setCurrencyOptions([data.base, ...Object.keys(data.rates)]);// Set currency options including the base currency and rates
            setFromCurrency(data.base);   // Set the default "from" currency as the base currency
            setToCurrency(firstCurrency);// Set the default "to" currency as the first currency in the rates
            setExchangeRate(data.rates[firstCurrency]);  // Set the exchange rate for the default "to" currency
        })

    }, []);
    
    // Fetching exchange rate when "from" and "to" currencies are selected
    useEffect(()=>{
        if(fromCurrency !=null && toCurrency !=null){
            fetch(`$(url)?base=${fromCurrency}&symbols=${toCurrency}`).then(res=>res.json()).then((data)=>{
                console.log(data);
                setExchangeRate(data.rates[toCurrency]);// Set the exchange rate for the selected "to" currency
            }).catch((error) => {
                console.error(error);
              });

        }
    },[fromCurrency, toCurrency])


    let toAmount , fromAmount
    const convertCur=()=>{
        fromAmount= toAmount;
        toAmount= amount *exchangeRate;
        setShowCurrency(toAmount);
    }



  return (
      <div className='container'>
          <div>
              <h1>Currency Converter</h1>
              <br></br>
              <div className='showCurrency'>
                <h2>{showCurrency}</h2>
              </div>
                  <input type='text' onChange={(event)=>setAmount(event.target.value)} className='textInput' placeholder='Enter amount'></input>
                  <br></br>
                  <select className='selectCurrency' onChange={(event)=>setFromCurrency(event.target.value)} >
                    {currencyOptions.map((option,index)=>(
                        <option key={index}>{option}</option>
                    ))}
                      
                  </select>
                  <select  className='selectCurrency' onChange={(event)=>setToCurrency(event.target.value)}>
                  {currencyOptions.map((option,index)=>(
                        <option key={index}>{option}</option>
                    ))}

                  </select>
                  <br></br>
                  <button onClick={convertCur}>Converter</button>

              

          </div>
    </div>
  )
}

export default CurrrencyConverter;