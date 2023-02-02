import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../configs";
import { IContractAuthorized } from "./interface";


export const fetchContractAuthorizeds = createAsyncThunk("ContractAuthorized/fetchContractAuthorizeds", async (thunkAPI) => {
    let Units: Array<undefined | object> = [];
    const q = collection(db, "ContractAuthorizeds");

    const querySnapshot = await getDocs(q);

    let id: string
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        id = doc.id
        Units.push({ id, ...doc.data() });
    });


    return Units as Array<IContractAuthorized>;
})

export const createContractAuthorized = createAsyncThunk("ContractAuthorized/createContractAuthorized", async (body: Omit<IContractAuthorized, 'id'>, thunkAPI) => {
    addDoc(collection(db, 'ContractAuthorizeds'), {
        ...body
    })
    return {
        ...body,
    } as IContractAuthorized;
})
