import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from "./Auth/AuthSlice";
import { RecordStoreSlice } from "./RecordStore/RecordStoreSlice";
import { PlayListSlice } from './PlayList/PlayListSlice';
import { AuthorizationSlice } from './Authorization/AuthorizationSlice';
import { UnitSlice } from './Unit/UnitSlice';
import { ContractAuthorizedSlice } from './ContractAuthorized/ContractAuthorizedSlice';
import { ContractMiningSlice } from './ContractMining/ContractMiningSlice';
export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        record: RecordStoreSlice.reducer,
        playlist: PlayListSlice.reducer,
        Authorization: AuthorizationSlice.reducer,
        Unit: UnitSlice.reducer,
        ContractAuthorized: ContractAuthorizedSlice.reducer,
        contractMining: ContractMiningSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch