import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../firestoreReducers/data";

function DisplayTransiction(props){
    
    const dispatch =useDispatch();
    const {loading , error,data}= useSelector((state)=>state.data);

    useEffect(()=>{
        dispatch(fetchData());

    },[])

    return(
        <div className="container">
            <br></br>
            <h2>History for transaction</h2>
            {data.map((data)=>{
               
                    <div className="transaction">
                        <div>
                        <h3 className="transaction-item"> {data.transactionItem}</h3>
                        </div>
                        <div>
                        <h3  className="transaction-amount"> {data.amount}</h3>
                        </div>
                        <h3  className="transactionitem-type"> 
                        {data.transactionType==='Expense'?(
                            <div className="expenseIndicator"></div>
                        ) :(
                            <div className="incomeIndicator"> </div>
                        )}
                        </h3>
                        <br></br>
                    </div>


                
            })}
            
        </div>
    )
}
export default DisplayTransiction;
