import { createSlice } from "@reduxjs/toolkit";
interface userType {

}

const initialState = {
    user: {}
}


export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state, action) => {
            state.user = action.payload
        }
    }
})
export const { saveUser } = authSlice.actions;

export default authSlice.reducer