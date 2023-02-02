import { createSlice } from "@reduxjs/toolkit";
import { Iauthorization } from "./interface";
import { fetchAuthorizations, updateAuthorization } from "./repository";
interface ListAuthorization {
    Authorizations: Iauthorization[]
}
const initialState: ListAuthorization = {
    Authorizations: []
}
export const AuthorizationSlice = createSlice({
    name: 'Authorization',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAuthorizations.fulfilled, (state, action) => {
                state.Authorizations = action.payload
            })
            .addCase(updateAuthorization.fulfilled, (state, action) => {
                state.Authorizations.find((item, index) => {
                    if (item.id === action.payload.id) {
                        state.Authorizations[index] = action.payload
                        return true
                    }
                    return false
                })
            })
    },
})