import React from "react";
import Login from "../view/Auth/Login/Login";
import Profile from "../view/Auth/Profile/Profile";
import UpdateProfile from "../view/Auth/UpdateProfile/UpdateProfile";
import BroadcastSchedule from "../view/BroadcastSchedule/BroadcastSchedule";
import Help from "../view/Help/Help";
import Manager from "../view/Manager/Manger";
import PlayList from "../view/PlayList/PlayList";
import RecordStore from "../view/RecordStore/RecordStore";
import Revenue from "../view/Revenue/Revenue";
import Setting from "../view/Setting/Setting";


type routeType = {
    path: string;
    component: React.ReactElement;
};

export const privateRoutes: routeType[] = [
    { path: '/', component: <RecordStore /> },
    { path: '/profile', component: <Profile /> },
    { path: '/edit-profile', component: <UpdateProfile /> },
    { path: '/playlist', component: <PlayList /> },
    { path: '/schedule', component: <BroadcastSchedule /> },
    { path: '/manager', component: <Manager /> },
    { path: '/revenue', component: <Revenue /> },
    { path: '/setting', component: <Setting /> },
    { path: '/help', component: <Help /> }
]

export const publicRoutes: routeType[] = [
    { path: '/login', component: <Login /> },
    { path: '/profile', component: <Profile /> },
]