import React, { useState } from "react";
import './MenuBar.scss'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import logo from '../../../shared/images/logo.png'
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { BsCollectionPlay, BsCalendar4Week } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { VscCalendar } from "react-icons/vsc";
import { TbReportMoney } from "react-icons/tb";
import { MdPlaylistPlay } from "react-icons/md";
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Kho bản ghi', '/', <BsCollectionPlay style={{ fontSize: 25, marginTop: 10, marginLeft: 13 }} />),
    getItem('Playlist', '/playlist', <MdPlaylistPlay style={{ fontSize: 35, marginTop: 5, marginLeft: 13 }} />),
    getItem('Lập lịch phát', '/schedule', <VscCalendar style={{ fontSize: 25, marginTop: 10, marginLeft: 13 }} />),
    getItem('Quản lý', '/manager', <CgFileDocument style={{ fontSize: 25, marginTop: 10, marginLeft: 13 }} />),
    getItem('Doanh thu', '/revenue', <TbReportMoney style={{ fontSize: 25, marginTop: 10, marginLeft: 13 }} />),
    getItem('Cài đặt', '/setting', <FiSettings style={{ fontSize: 25, marginTop: 10, marginLeft: 13 }} />),
    getItem('Hỗ trợ', '/help', <FiHelpCircle style={{ fontSize: 25, marginTop: 10, marginLeft: 13 }} />),
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const MenuBar = () => {
    const navigate = useNavigate()
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const handleLogo = () => {
        navigate('/')
    }
    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <div className="menu__bar">
            <div className="menubar__logo" onClick={handleLogo}>
                <img src={logo} alt='' className="logo_sub" />
            </div>
            <Menu
                onClick={({ key }) => {
                    navigate(key)
                }}
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                defaultSelectedKeys={[window.location.pathname]}
                style={{ width: 120 }}
                items={items}
            />
        </div>
    )
}

export default MenuBar