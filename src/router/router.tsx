import React from "react";
import Login from "../view/Auth/Login/Login";
import Profile from "../view/Auth/Profile/Profile";
import UpdateProfile from "../view/Auth/UpdateProfile/UpdateProfile";
import BroadcastSchedule from "../view/BroadcastSchedule/BroadcastSchedule";
import Help from "../view/Help/Help";
import Authorization from "../view/Manager/Authorization/Authorization";
import AddContract from "../view/Manager/Contract/AddContract/AddContract";
import AddContractMining from "../view/Manager/Contract/AddContractMining/AddContractMining";
import Contract from "../view/Manager/Contract/Contract";
import DetailAuthorizeContract from "../view/Manager/Contract/DetailContract/DetailAuthorizeContract/DetailAuthorizeContract";
import Device from "../view/Manager/Device/Device";
import Manager from "../view/Manager/Manger";
import UnitUsed from "../view/Manager/UnitUsed/UnitUsed";
import AddPlayList from "../view/PlayList/AddPlayList/AddPlayList";
import AddRecord from "../view/PlayList/AddRecord/AddRecord";
import DetailPlayList from "../view/PlayList/DetailPlayList/DetailPlayList";
import PlayList from "../view/PlayList/PlayList";
import UpdatePlayList from "../view/PlayList/UpdatePlayList/UpdatePlayList";
import RecordStore from "../view/RecordStore/RecordStore";
import UpdateRecord from "../view/RecordStore/UpdateRecord/UpdateRecord";
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
    { path: '/manager/contract', component: <Contract /> },
    { path: '/manager/contract/add-contract', component: <AddContract /> },
    { path: '/manager/contract/add-contract-mining', component: <AddContractMining /> },
    { path: '/manager/contract/detail-authorized-contract', component: <DetailAuthorizeContract /> },
    { path: '/manager/device', component: <Device /> },
    { path: '/manager/Authorization-unit', component: <Authorization /> },
    { path: '/manager/Unit-used', component: <UnitUsed /> },
    { path: '/revenue', component: <Revenue /> },
    { path: '/setting', component: <Setting /> },
    { path: '/help', component: <Help /> },
    { path: '/edit-record/:id', component: <UpdateRecord /> },
    { path: '/playlist/detail-playlist/:id', component: <DetailPlayList /> },
    { path: '/playlist/add-playlist', component: <AddPlayList /> },
    { path: '/playlist/add-playlist/add-record', component: <AddRecord /> },
    { path: '/playlist/edit-playlist/:id', component: <UpdatePlayList /> },
]

export const publicRoutes: routeType[] = [
    { path: '/login', component: <Login /> },

]