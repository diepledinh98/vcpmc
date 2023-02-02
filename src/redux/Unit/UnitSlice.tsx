import { createSlice } from "@reduxjs/toolkit";
import { IUnit } from "./interface";
import { fetchUnit } from "./repository";
interface ListUnit {
    Units: IUnit[]
}
const initialState: ListUnit = {
    Units: []
}
export const UnitSlice = createSlice({
    name: 'Unit',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUnit.fulfilled, (state, action) => {
                state.Units = action.payload
            })
    },
})