import { createSlice } from "@reduxjs/toolkit";
import { IRecordStore } from "./interface";
import { fetchRecords, updateRecord } from "./repository";

interface ListRecord {
    ListRecord: IRecordStore[]
}

const initialState: ListRecord = {
    ListRecord: []
}

export const RecordStoreSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecords.fulfilled, (state, action) => {
                state.ListRecord = action.payload
            })
            .addCase(updateRecord.fulfilled, (state, action) => {
                state.ListRecord.find((record, index) => {
                    if (record.id === action.payload.id) {
                        state.ListRecord[index] = action.payload
                        return true
                    }
                    return false
                })
            })
    },
})