import { createSlice } from "@reduxjs/toolkit"

export const trainerSlice = createSlice({
    name: "trainer",
    initialState: {
        trainer: {},
        loading: false,
        isAuthenticated: false
    },
    reducers: {
        REGISTER_USER_REQUEST: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        REGISTER_USER_SUCCESS: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        REGISTER_USER_FAIL: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },

        LOAD_USER_REQUEST: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        LOAD_USER_SUCCESS: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        LOAD_USER_FAIL: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        }
    }
})

export const trainerDetailsSlice = createSlice({
    name: "trainerDetails",
    initialState:{
        trainerDetails: {},
        loading: false,
    },
    reducers: {
        REGISTER_USER_Details_REQUEST: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        LOAD_USER_DETAILS_REQUEST: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        REGISTER_USER_Details_SUCCESS: (state, action) => {
            state.loading = false;
            state.trainerDetails = action.payload.user;
        },
        LOAD_USER_Details_SUCCESS: (state, action) => {
            state.loading = false;
            state.trainerDetails = action.payload.user;
        },
        REGISTER_USER_Details_FAIL: (state, action) => {
            state.loading = false;
            state.trainerDetails = null;
            state.error = action.payload;
        },
        LOAD_USER_Details_FAIL: (state, action) => {
            state.loading = false;
            state.trainerDetails = null;
            state.error = action.payload;
        },
    }
})

export const trainerReducer = trainerSlice.reducer;
export const trainerDetailsReducer = trainerDetailsSlice.reducer;

export const {REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,LOAD_USER_REQUEST,LOAD_USER_FAIL,LOAD_USER_SUCCESS} = trainerSlice.actions
export const {LOAD_USER_Details_REQUEST,LOAD_USER_Details_FAIL,LOAD_USER_Details_SUCCESS,
     REGISTER_USER_Details_REQUEST,REGISTER_USER_Details_SUCCESS,REGISTER_USER_Details_FAIL} = trainerDetailsSlice.actions