import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from "./Auth/AuthSlice";
import { RecordStoreSlice } from "./RecordStore/RecordStoreSlice";
import { PlayListSlice } from './PlayList/PlayListSlice';
export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        record: RecordStoreSlice.reducer,
        playlist: PlayListSlice.reducer

    }
})

export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch