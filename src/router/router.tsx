import React from "react";
import Login from "../view/Auth/Login/Login";
import Profile from "../view/Auth/Profile/Profile";
import UpdateProfile from "../view/Auth/UpdateProfile/UpdateProfile";
import BroadcastSchedule from "../view/BroadcastSchedule/BroadcastSchedule";
import Help from "../view/Help/Help";
import Authorization from "../view/Manager/Authorization/Authorization";
import UpdateAuthorization from "../view/Manager/Authorization/Update/UpdateAuthorization";
import AddContract from "../view/Manager/Contract/AddContract/AddContract";
import AddContractMining from "../view/Manager/Contract/AddContractMining/AddContractMining";
import Contract from "../view/Manager/Contract/Contract";
import DetailAuthorizeContract from "../view/Manager/Contract/DetailContract/DetailAuthorizeContract/DetailAuthorizeContract";
import Adddvice from "../view/Manager/Device/Adddevice/AddDevice";
import Device from "../view/Manager/Device/Device";
import Manager from "../view/Manager/Manger";
import AddUser from "../view/Manager/UnitUsed/AddUser/AddUser";
import DetailUnit from "../view/Manager/UnitUsed/DetailUnit/DetailUnit";
import DetailUser from "../view/Manager/UnitUsed/DetailUser/DetailUser";
import UnitUsed from "../view/Manager/UnitUsed/UnitUsed";
import UpdateUser from "../view/Manager/UnitUsed/UpdateUser/UpdateUser";
import AddPlayList from "../view/PlayList/AddPlayList/AddPlayList";
import AddRecord from "../view/PlayList/AddRecord/AddRecord";
import DetailPlayList from "../view/PlayList/DetailPlayList/DetailPlayList";
import PlayList from "../view/PlayList/PlayList";
import UpdatePlayList from "../view/PlayList/UpdatePlayList/UpdatePlayList";
import RecordStore from "../view/RecordStore/RecordStore";
import UpdateRecord from "../view/RecordStore/UpdateRecord/UpdateRecord";
import Distribute from "../view/Revenue/Distribute/Distribute";
import DetailHisotry from "../view/Revenue/Hisory/DetailHistory/DetailHistory";
import History from "../view/Revenue/Hisory/History";
import DetailReport from "../view/Revenue/Report/DetailReport/DetailReport";
import DetailRevenue from "../view/Revenue/Report/DetailRevenue/DetailRevenue";
import Report from "../view/Revenue/Report/Report";
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
    { path: '/manager/contract/detail-authorized-contract/:id', component: <DetailAuthorizeContract /> },
    { path: '/manager/device', component: <Device /> },
    { path: '/manager/device/add-device', component: <Adddvice /> },
    { path: '/manager/Authorization-unit', component: <Authorization /> },
    { path: '/manager/Authorization-unit/update-authorization-unit/:id', component: <UpdateAuthorization /> },
    { path: '/manager/Unit-used/detail-unit/:id', component: <DetailUnit /> },
    { path: '/manager/Unit-used/detail-unit/add-user/:id', component: <AddUser /> },
    { path: '/manager/Unit-used/detail-user/:id', component: <DetailUser /> },
    { path: '/manager/Unit-used/detail-user/update-user/:id', component: <UpdateUser /> },
    { path: '/manager/Unit-used', component: <UnitUsed /> },
    { path: '/revenue', component: <Revenue /> },
    { path: '/revenue/report-revenue', component: <Report /> },
    { path: '/revenue/report-revenue/detail-report', component: <DetailReport /> },
    { path: '/revenue/report-revenue/detail-report/detail-revenue/:id', component: <DetailRevenue /> },
    { path: '/revenue/history-revenue', component: <History /> },
    { path: '/revenue/history-revenue/detail-revenue/:id', component: <DetailHisotry /> },
    { path: '/revenue/distribute-revenue', component: <Distribute /> },
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