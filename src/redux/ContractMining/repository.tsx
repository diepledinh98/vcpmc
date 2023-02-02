import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../configs";
import { IContractMining } from "./interface";



export const fetchContractMinings = createAsyncThunk("ContractMining/fetchContractMinings", async (thunkAPI) => {
    let Units: Array<undefined | object> = [];
    const q = collection(db, "ContractMinings");

    const querySnapshot = await getDocs(q);

    let id: string
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        id = doc.id
        Units.push({ id, ...doc.data() });
    });


    return Units as Array<IContractMining>;
})

export const createContractMining = createAsyncThunk("ContractMining/createContractMining", async (body: Omit<IContractMining, 'id'>, thunkAPI) => {
    addDoc(collection(db, 'ContractMinings'), {
        ...body
    })
    return {
        ...body,
    } as IContractMining;
})
