import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { IRecordStore } from "../RecordStore/interface";
import { IPlayList } from "./interface";
import { createPlayList } from "./repository";
import { fetchPlayLists } from "./repository";
interface ListPlayListType {
    PlayLists: IPlayList[]
    Record__Added: IRecordStore[]
}

const initialState: ListPlayListType = {
    PlayLists: [],
    Record__Added: []
}
export const PlayListSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        addRecord: (state, action: PayloadAction<IRecordStore>) => {
            const record = action.payload
            state.Record__Added.push(record)
        },
        deleteRecord: (state, action: PayloadAction<string>) => {
            const recordId = action.payload
            const foundRecordIndex = state.Record__Added.findIndex((record) => record.id === recordId)
            if (foundRecordIndex !== -1) {
                state.Record__Added.splice(foundRecordIndex, 1)
            }
        },
        deleteAllRecord: (state) => {
            state.Record__Added = []
        }
    },
    extraReducers(builder) {
        builder
            .addCase(createPlayList.fulfilled, (state, action) => {
                const playlist = action.payload
                state.PlayLists.push(playlist)
                state.Record__Added = []
            })
            .addCase(fetchPlayLists.fulfilled, (state, action) => {
                state.PlayLists = action.payload
            })
    },
})
export const { addRecord, deleteRecord, deleteAllRecord } = PlayListSlice.actions