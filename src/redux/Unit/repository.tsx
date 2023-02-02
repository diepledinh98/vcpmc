import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configs";
import { IUnit } from "./interface";

export const fetchUnit = createAsyncThunk("Unit/fetchUnit", async (thunkAPI) => {
    let Units: Array<undefined | object> = [];
    const q = collection(db, "Units");

    const querySnapshot = await getDocs(q);

    let id: string
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        id = doc.id
        Units.push({ id, ...doc.data() });
    });


    return Units as Array<IUnit>;
})