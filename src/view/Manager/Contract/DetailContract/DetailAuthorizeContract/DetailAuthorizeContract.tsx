import { Button, Col, DatePicker, Form, Input, Radio, Row, Tabs } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";
import ActionProfile from "../../../../Auth/components/ActionProfile/ActionProfile";
import ActionAuthorize from "./components/Action/ActionAuthorize/ActionAuthorize";
import ActionInfo from "./components/Action/ActionInfo/ActionInfo";

import DetailAuthorize from "./components/DetailAuthorize/DetailAuthorize";
import DetailInfo from "./components/DetailInfo/DetailInfo";
const DetailAuthorizeContract = () => {
    const [showItemView, setShowItemView] = useState('1')
    const onChange = (key: string) => {
        setShowItemView(key)
    };
    return (
        <div className="contract__page">
            {/* <div className="title__page">Danh sách hợp đồng</div> */}
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                className="active"
                items={[
                    {
                        label: 'Thông tin hợp đồng',
                        key: '1',
                    },
                    {
                        label: 'Tác phẩm ủy quyền',
                        key: '2',

                    }
                ]}
                style={{ marginBottom: 20 }}
            />
            <div style={{ display: 'flex', position: 'relative' }}>
                {showItemView === '1' ? <DetailInfo /> : <DetailAuthorize />}

                {showItemView === '1' ? <ActionInfo /> : <ActionAuthorize />}
            </div>
        </div>
    )
}

export default DetailAuthorizeContract