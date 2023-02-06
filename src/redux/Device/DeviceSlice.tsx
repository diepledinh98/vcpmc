import { createSlice } from "@reduxjs/toolkit";
import { IDevice } from "./interface";
import { createdevice, fetchdevices } from "./repository";

interface ListDevice {
    Devices: IDevice[]
}

const initialState: ListDevice = {
    Devices: []
}


export const DeviceSlice = createSlice({
    name: 'devices',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchdevices.fulfilled, (state, action) => {
                state.Devices = action.payload
            })
            .addCase(createdevice.fulfilled, (state, action) => {
                state.Devices.push(action.payload)
            })
    },
})