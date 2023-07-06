import AddTransaction from "./add";
import React from "react";
import DisplayTransiction from "./displayTransaction";
import {getAuth , signOut} from 'firebase/auth';
import {auth} from '../config/firebase';
import { useHistory } from "react-router-dom";
import CurrrencyConverter from "./currrency";
import { useDispatch } from "react-redux";
import { signingOut } from "../authReducer/auth";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(props){
    const history =useHistory();
    const dispatch =useDispatch();
    
    const logOut=()=>{
        const isLoggedOut =dispatch(signingOut());
        if(isLoggedOut){
            history.push("/");

        }else{

        }    
    }

    return(
        <div>
            <i onClick={logOut} style={{ float: "right ", color: "black", fontSize: "40px" }} className="btn btn-link position-fixed top-0 end-0"><span className="bi bi-box-arrow-right"></span></i>

            <div className="container">
                <DisplayTransiction transaction={props.transaction} />
                <AddTransaction add={props.add} />
            </div>

        </div>
    )
             
}

export default Home;

/*
<i onClick={logOut}
            className="bi bi-box-arrow-in-right"
            style={{float: "right", fontSize:"40px"}}>
            </i>
*/