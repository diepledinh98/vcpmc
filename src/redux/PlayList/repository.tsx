import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from '../../configs/index'
import { IPlayList } from "./interface";


export const fetchPlayLists = createAsyncThunk("playlist/fetchplaylists", async (thunkAPI) => {
    let playlists: Array<undefined | object> = [];
    const q = collection(db, "playlists");

    const querySnapshot = await getDocs(q);

    let id: string
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        id = doc.id
        playlists.push({ id, ...doc.data() });
    });

    return playlists as Array<IPlayList>;
})
export const createPlayList = createAsyncThunk("playlist/createplaylist", async (body: Omit<IPlayList, 'id'>, thunkAPI) => {
    addDoc(collection(db, 'playlists'), {
        ...body
    })
    return {
        ...body,
    } as IPlayList;
})