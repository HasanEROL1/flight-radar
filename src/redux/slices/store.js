import { configureStore } from "@reduxjs/toolkit";
import flightReducer from './flightSlice';
import detailReducer from './detailSlice';


export default configureStore({
    reducer: {
        flight: flightReducer,
        detail: detailReducer,

    }
})