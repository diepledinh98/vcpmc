import { createSlice } from "@reduxjs/toolkit"
import { IContractAuthorized } from "./interface"
import { createContractAuthorized, fetchContractAuthorizeds } from "./repository"

interface listContractAuthorized {
    ListContractAuthorized: IContractAuthorized[]
}
const initialState: listContractAuthorized = {
    ListContractAuthorized: []
}

export const ContractAuthorizedSlice = createSlice({
    name: 'ContractAuthorized',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchContractAuthorizeds.fulfilled, (state, action) => {
                state.ListContractAuthorized = action.payload
            })
            .addCase(createContractAuthorized.fulfilled, (state, action) => {
                const item = action.payload
                state.ListContractAuthorized.push(item)
            })
    },
})