import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from "./Auth/AuthSlice";
import { RecordStoreSlice } from "./RecordStore/RecordStoreSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        record: RecordStoreSlice.reducer,


    }
})

export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch