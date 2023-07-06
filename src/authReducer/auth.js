import {createSlice} from '@reduxjs/toolkit'
import { getAuth ,createUserWithEmailAndPassword ,sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from 'firebase/auth';
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
               console.log(action.payload)
               console.log(action.payload)

               const errorMessage = error.message;
               console.log(errorMessage);

              })
    
        },
        signingOut:()=>{
            signOut(auth)
            .then(()=>{
                return true;
            })
            .catch ((error)=>{});
           
           
        },
        passwordReset:(state, action)=>{
            sendPasswordResetEmail(auth,action.payload)
            .then(()=>{
                alert("check your email");
             }).catch((error)=>{
         
             })

        }




    },
    

})
export const {signUp, signIn , signingOut ,passwordReset} = authSlice.actions;
export default authSlice.reducer