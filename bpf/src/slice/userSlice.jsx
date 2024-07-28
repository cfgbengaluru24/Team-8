import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        loading: false,
        isAuthenticated: false
    },
    reducers: {
        LOGIN_REQUEST: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        REGISTER_USER_REQUEST: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        LOGIN_SUCCESS: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        REGISTER_USER_SUCCESS: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        LOGOUT_SUCCESS: (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
        },
        LOGIN_FAIL: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },
        REGISTER_USER_FAIL: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },
        LOGOUT_FAIL: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        CLEAR_ERRORS: (state) => {
            state.error = null;
        }

    }
})

export const userSliceReducer = userSlice.reducer

export const { LOGIN_REQUEST, REGISTER_USER_REQUEST,
    LOGIN_SUCCESS, REGISTER_USER_SUCCESS, LOGOUT_SUCCESS,
    LOGIN_FAIL, REGISTER_USER_FAIL, LOGOUT_FAIL, CLEAR_ERRORS } = userSlice.actions