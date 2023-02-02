import { createSlice } from "@reduxjs/toolkit"
import { IContractMining } from "./interface"
import { createContractMining, fetchContractMinings } from "./repository"

interface ListContractMining {
    ContractMinings: IContractMining[]
}

const initialState: ListContractMining = {
    ContractMinings: []
}

export const ContractMiningSlice = createSlice({
    name: 'ContractMining',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchContractMinings.fulfilled, (state, action) => {
                state.ContractMinings = action.payload
            })

            .addCase(createContractMining.fulfilled, (state, action) => {
                state.ContractMinings.push(action.payload)
            })
    },
})