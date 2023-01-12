import { Select, Tabs } from "antd";
import React, { useState } from "react";
import SelectComponent from "../../RecordStore/Select/SelectComponent";
import AuthorizeContract from "./components/AuthorizeContract/AuthorzieContract";
import MiningContract from "./components/MiningContract/MiningContract";
import './Contract.scss'
const Contract = () => {
    const [showItemView, setShowItemView] = useState('1')
    const onChange = (key: string) => {
        setShowItemView(key)
    };
    return (
        <div className="contract__page">
            <div className="title__page">Danh sách hợp đồng</div>
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                className="active"
                items={[
                    {
                        label: 'Hợp đồng ủy quyền',
                        key: '1',
                    },
                    {
                        label: 'Hợp đồng khai thác',
                        key: '2',

                    }
                ]}
            />

            {showItemView === '1' ? <AuthorizeContract /> : <MiningContract />}
        </div>
    )
}

export default Contract