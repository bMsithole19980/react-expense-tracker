import { createSlice } from "@reduxjs/toolkit";
import { collection ,addDoc ,getDocs, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const initialState={
    loading:false,
    error:null,
    data:[]
}
const dataSlice =createSlice({
    name:"data",
    initialState,
    reducers:{

        addData:(state,action)=>{
            state.data.push(action.payload)

        },

        fetchDataStart(state){
            state.loading =true;
            state.error= null;
        },

        fechDataSuccess(state, action){
            state.loading=false;
            state.data =action.payload;
        },
        fetchDataFail(state ,action){
            state.loading =false;
            state.error= action.payload.message;

        }

    }
})
export const {fetchDataStart ,fechDataSuccess ,fetchDataFail, addData} =dataSlice.actions;

export const fetchData =()=>async(dispatch)=>{
    dispatch(fetchDataStart());

    try{
        const querySnapShot =await getDocs(collection(db, "transaction"));
        const data = querySnapShot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data(),
            
        }))
        dispatch(fechDataSuccess(data));

    }catch(error){
        dispatch(fetchDataFail(error.message))

    }
}

export  const addTransaction =(data)=>async(dispatch)=>{
    try {
        const docRef = await addDoc(collection(db, "transaction"), data);
        dispatch(addData(data));
        alert("You have added sucessfully");

    } catch (error) {

    }
}

export default dataSlice.reducer;