import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../configs";
import { Iauthorization } from "./interface";

export const fetchAuthorizations = createAsyncThunk("Authorization/fetchAuthorization", async (thunkAPI) => {
    let Authorizations: Array<undefined | object> = [];
    const q = collection(db, "Authorizations");

    const querySnapshot = await getDocs(q);

    let id: string
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        id = doc.id
        Authorizations.push({ id, ...doc.data() });
    });


    return Authorizations as Array<Iauthorization>;
})
export const updateAuthorization = createAsyncThunk("Authorization/updateAuthorization", async ({ id, body }: { id: string, body: Iauthorization }) => {
    const recordNeedUpdate = doc(db, "Authorizations", id);
    updateDoc(recordNeedUpdate, { ...body })
    return {
        ...body,
    } as Iauthorization;
})