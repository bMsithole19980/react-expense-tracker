import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../firestoreReducers/data";

function DisplayTransiction(props){
    
    const dispatch =useDispatch();
    const data= useSelector((state)=>state.data.data);

    useEffect(()=>{
        dispatch(fetchData());

    },[])

    const totalExpense =data.reduce((accumulator, currentValue)=>{
        if(currentValue.transactionType=="Expense"){
            return accumulator + parseInt(currentValue.amount)
        }
        return accumulator
    }, 0)

    const totalIncome =data.reduce((accumulator, currentValue)=>{
        if(currentValue.transactionType=="Income"){
            return accumulator + parseInt(currentValue.amount)
        }
        return accumulator
    }, 0)









    return (
        <div className="container">
            <br></br>
            <h2>History for transaction</h2>
            {data.map((data) => {
                return (
                    <div className="transaction">
                        <div>
                            <h3 className="transaction-item"> {data.transactionItem}</h3>
                        </div>
                        <div>
                            <h3 className="transaction-amount"> {data.amount}</h3>
                        </div>
                        <div>
                            {data.transactionType === 'Expense' ? (
                                <div className="expenseIndicator"></div>
                            ) : (
                                <div className="incomeIndicator"> </div>
                            )}
                    
                        </div>
                        
                        <br></br>
                    </div>

                );

            })}

        </div>
    )
}
export default DisplayTransiction;
