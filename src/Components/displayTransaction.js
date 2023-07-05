function DisplayTransiction(props){
    return(
        <div>
            <br></br>
            <h2>History for transaction</h2>
            {props.transaction.map((data)=>{
                return (
                    <div className="transaction">
                        <h5 className="transaction-item"> {data.transactionItem}</h5>
                        <h5  className="transaction-amount"> {data.amount}</h5>
                        <h5  className="transactionitem-type"> {data.transactionType ==="Expense"}<div className="incomeIndicator"></div><div className="expenseIndicator"></div></h5>
                        <br></br>
                    </div>


                );
            })}
            
        </div>
    )
}
export default DisplayTransiction;
