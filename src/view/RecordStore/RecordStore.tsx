import React, { useState } from "react";
import { Input, Select, Space } from 'antd';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { AiOutlineAppstore, AiOutlineUnorderedList } from "react-icons/ai";
import './RecordStore.scss'
import ChangeLanguage from "../../shared/components/Language/Language";
import TableComponent from "./Table/Table";
import SelectComponent from "./Select/SelectComponent";
import ListViewCard from "./ListViewCard/ListViewCard";
import SearchConponent from "../../shared/components/SearchComponent/SearchComponent";
const { Search } = Input;




const RecordStore = () => {
    const [showItemView, setShowItemView] = useState('1')
    const onChange = (key: string) => {
        setShowItemView(key)
    };
    return (
        <div className="record__store__page">
            <div className="title__page">
                Kho bản ghi
            </div>

            {/* <Search placeholder="Tên bản ghi,ca sĩ..." style={{ width: 368 }} /> */}
            <SearchConponent placeholder="Tên bản ghi,ca sĩ..." />
            <div className="list_actions">
                <SelectComponent />
                <Tabs
                    style={{ marginTop: 20, marginLeft: 150 }}
                    defaultActiveKey="1"
                    onChange={onChange}
                    items={[
                        {
                            label: <AiOutlineUnorderedList style={{ fontSize: 28 }} />,
                            key: '1',
                        },
                        {
                            label: <AiOutlineAppstore style={{ fontSize: 28 }} />,
                            key: '2',

                        }
                    ]}
                />
            </div>
            <div style={{ maxWidth: 1060 }}>
                {showItemView === '1' ? <TableComponent /> : <ListViewCard />}
            </div>


        </div>
    )
}

export default RecordStore