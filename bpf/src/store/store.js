import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { thunk } from 'redux-thunk'
import { legacy_createStore as createStore } from 'redux'
import { userSliceReducer } from "../slice/userSlice"
import { trainerDetailsReducer, trainerReducer } from "../slice/trainerSlice.jsx"

const middleware = [thunk]
const rootReducer = {
    user: userSliceReducer,
    trainer: trainerReducer,
    trainerDetails: trainerDetailsReducer
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    // devTools: process.env.NODE_ENV !== 'production'
})

export default store