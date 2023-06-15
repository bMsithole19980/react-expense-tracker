function DisplayTransiction(props){
    return(
        <div>
            <h2>History for transaction</h2>
            {props.transaction.map((data)=>{
                return (
                    <div>
                        <h6>{data.transactionItem}</h6>
                        <h6>{data.transactionType}</h6>
                        <h6>{data.amount}</h6>

                    </div>


                );
            })}
            
        </div>
    )
}
export default DisplayTransiction;
