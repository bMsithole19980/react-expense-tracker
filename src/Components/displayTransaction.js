function DisplayTransiction(props){
    return(
        <div>
            <br></br>
            <h2>History for transaction</h2>
            {props.transaction.map((data)=>{
                return (
                    <div>
                        <h5>{data.transactionItem}</h5>
                        <h5>{data.transactionType}<div className="incomeIndicator"></div><div className="expenseIndicator"></div></h5>
                        <h5>{data.amount}</h5>

                    </div>


                );
            })}
            
        </div>
    )
}
export default DisplayTransiction;
