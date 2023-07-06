import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../authReducer/auth";
import firestoreSlice from '../firestoreReducers/firestore'
import firestore from "../firestoreReducers/firestore";
import dataSlice from '../firestoreReducers/data'
export const store = configureStore({

    reducer:{
        authentication:authSlice.reducer,
        db:firestoreSlice,
        data:dataSlice
    },
});