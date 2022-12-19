import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Button, MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import vietnam from '../../images/vietnam.png'
import english from '../../images/english.png'
import './Language.scss'
const items: MenuProps['items'] = [
    {
        label: 'Tiếng Việt',
        key: '1',
        icon: <img src={vietnam} alt='' />
    },
    {
        label: 'Tiếng Anh',
        key: '2',
        icon: <img src={english} alt='' />

    },
];
const handleMenuClick: MenuProps['onClick'] = (e) => {

};
const menuProps = {
    items,
    onClick: handleMenuClick,
};
const ChangeLanguage = () => {
    return (
        <div className="change_language">
            <Dropdown menu={menuProps}>
                <Button>
                    <Space>
                        Tiếng việt
                        <img src={vietnam} alt='' style={{ marginTop: 5 }} />
                        <DownOutlined style={{ color: '#ffff' }} />
                    </Space>
                </Button>
            </Dropdown>
        </div>
    )
}

export default ChangeLanguage