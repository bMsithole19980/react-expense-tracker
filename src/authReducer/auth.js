import {createSlice} from '@reduxjs/toolkit'
import { getAuth ,createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../config/firebase';
import { useHistory } from 'react-router-dom';



export const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:{
            email: "",
            password: ""
        }
    },
    reducers:{
        signUp:(state ,action)=>{
            createUserWithEmailAndPassword(auth,action.payload, action.payload).then(()=>{
                alert("Successfuly registered");
    
            }).catch((error)=>{
                console.log(error.message);
    
            });
        },

        signIn:(state, action)=>{
            signInWithEmailAndPassword(auth , action.payload , action.payload).then(()=>{
               // const history =useHistory();
                alert("successfully logged in");
               // history.push('/home')
                
              }).catch((error)=>{
               console.log(error.message)
              })
    
        }
    },
    

})
export const {signUp, signIn} = authSlice.actions;
export default authSlice.reducer