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
import TotalBalance from "./totalBalance";


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
                <div className="mt-5">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target ="@home"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true" 
                            >
                                Expense tracker
                            </button>
                        </li>
                        
                        <li className="nav-item" role="presentation">
                            <button
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="@profile"
                            type="button"
                            role="tab"
                            aria-controls="@profile"
                            aria-selected="false"
                            >
                                Currency Converter
                            </button>

                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div
                        className="tab-pane false show active"
                        id="@home"
                        role="tabpanel"
                        aria-labelledby="home-tab">
                            <TotalBalance/>
                            <DisplayTransiction transaction={props.transaction} />
                            <AddTransaction add={props.add} />

                        </div>
                        <div
                            className="tab-pane false"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab">
                            <CurrrencyConverter />
                        </div>

                    </div>

                </div>
                
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