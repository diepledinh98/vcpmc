import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../configs";
import { IDevice } from "./interface";




export const fetchdevices = createAsyncThunk("device/fetchdevices", async (thunkAPI) => {
    let Units: Array<undefined | object> = [];
    const q = collection(db, "devices");

    const querySnapshot = await getDocs(q);

    let id: string
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        id = doc.id
        Units.push({ id, ...doc.data() });
    });


    return Units as Array<IDevice>;
})

export const createdevice = createAsyncThunk("devices/createdevice", async (body: Omit<IDevice, 'id'>, thunkAPI) => {
    addDoc(collection(db, 'devices'), {
        ...body
    })
    return {
        ...body,
    } as IDevice;
})
