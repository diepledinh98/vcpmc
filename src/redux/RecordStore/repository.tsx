import { async } from "@firebase/util";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from '../../configs/index'
import { IRecordStore } from "./interface";
export const fetchRecords = createAsyncThunk("records/fetchrecords", async (thunkAPI) => {
    let devices: Array<undefined | object> = [];
    const q = collection(db, "records");

    const querySnapshot = await getDocs(q);

    let id: string
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        id = doc.id
        devices.push({ id, ...doc.data() });
    });

    return devices as Array<IRecordStore>;
})

export const updateRecord = createAsyncThunk("records/updateRecord", async ({ idRecord, body }: { idRecord: string, body: IRecordStore }) => {
    const recordNeedUpdate = doc(db, "records", idRecord);
    updateDoc(recordNeedUpdate, { ...body })
    return {
        ...body,
    } as IRecordStore;
})