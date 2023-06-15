import AddTransaction from "./add";
import DisplayTransiction from "./displayTransaction";


function Home(props){
    return(
        <div>
        <AddTransaction add={props.add}/>
        <DisplayTransiction transaction={props.transaction}/>
        </div>
    )
             
}

export default Home