import AddTransaction from "./add";
import DisplayTransiction from "./displayTransaction";


function Home(props){
    return(
        <div className="container">
         <DisplayTransiction transaction={props.transaction}/>
        <AddTransaction add={props.add}/>
        
        </div>
    )
             
}

export default Home