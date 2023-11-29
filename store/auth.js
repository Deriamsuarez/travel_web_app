import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {
        setUser: (state, action) => action.payload
    }
})

export default authSlice