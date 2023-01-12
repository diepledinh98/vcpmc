import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type userType = {
    uid?: string
    email?: string
}

interface IsUser {

    user?: userType
    isLogin: boolean
}

const initialState: IsUser = {
    isLogin: false,
    user: {}
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload
            state.isLogin = true
        },
        logOut: (state, action) => {
            state.user = {}
            state.isLogin = false
        }
    }
})
export const { saveUser, logOut } = authSlice.actions;

export default authSlice.reducer