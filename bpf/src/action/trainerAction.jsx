import axios from "axios"
import {
    LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_USER_FAIL
} from "../slice/trainerSlice.jsx"

import {LOAD_USER_Details_REQUEST,LOAD_USER_Details_FAIL,LOAD_USER_Details_SUCCESS,
    REGISTER_USER_Details_REQUEST,REGISTER_USER_Details_SUCCESS,REGISTER_USER_Details_FAIL} from "../slice/trainerSlice.jsx"



import { baseUrl } from "../constants/BaseUrl.jsx"

const API_URI = `${baseUrl}/api/v1`;

export const trainerRegister = (userData)=>{
    return async (dispatch) => {
        try {
            dispatch(REGISTER_USER_Details_REQUEST)

            const config = { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true }
            const { data } = await axios.post(
                `${API_URI}/trainer/register`,
                userData,
                config
            )

            dispatch(REGISTER_USER_Details_SUCCESS(data))
        } catch (error) {
            dispatch(REGISTER_USER_Details_FAIL(error.response.data.message))
        }
    }
}

// load user
export const loadUser = () => {
    return async (dispatch) => {
        try {
            dispatch(LOAD_USER_REQUEST())

            const config = { headers: { "Content-Type": "application/json" }, withCredentials: true }

            const { data } = await axios.get(
                `${API_URI}/me`,
                config,
            )

            dispatch(LOAD_USER_SUCCESS(data))
        } catch (error) {
            dispatch(LOAD_USER_FAIL(error.response.data.message))
        }
    }
}

export const registerUserDetails = (userData) => {
    return async (dispatch) => {
        try {
            dispatch(LOAD_USER_REQUEST())

            const config = { headers: { "Content-Type": "application/json" }, withCredentials: true }

            const { data } = await axios.post(
                `${API_URI}/profile`,
                config,
                userData
            )

            dispatch(LOAD_USER_SUCCESS(data))
        } catch (error) {
            dispatch(LOAD_USER_FAIL(error.response.data.message))
        }
    }
}

export const loadUserDetails = () => {
    return async (dispatch) => {
        try {
            dispatch(LOAD_USER_REQUEST())

            const config = { headers: { "Content-Type": "application/json" }, withCredentials: true }

            const { data } = await axios.get(
                `${API_URI}/profile`,
                config
            )

            dispatch(LOAD_USER_SUCCESS(data))
        } catch (error) {
            dispatch(LOAD_USER_FAIL(error.response.data.message))
        }
    }
}

