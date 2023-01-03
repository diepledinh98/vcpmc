import React, { useState } from "react";
import { Input, Select, Space, Tabs } from 'antd';
import './Playlist.scss'
import { AiOutlineAppstore, AiOutlineUnorderedList } from "react-icons/ai";
import TablePlayList from "./TablePlayList/TablePlayList";
import { BiListPlus } from "react-icons/bi";
import ListViewCard from "../RecordStore/ListViewCard/ListViewCard";
import ListCardPlayList from "./ListCardPlayList/ListCardPlayList";
import { Link } from "react-router-dom";
const { Search } = Input;

const PlayList = () => {
    const [showItemView, setShowItemView] = useState('1')
    const onChange = (key: string) => {
        setShowItemView(key)
    };
    return (
        <div className="playlist__page">
            <div className="title__page">Playlist</div>
            <div className="action__playlist">
                <Search placeholder="Tên bản ghi,ca sĩ..." style={{ width: 368 }} />
                <Tabs
                    style={{ marginLeft: 650 }}
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

                <Link to='/playlist/add-playlist' className="link__add_playlist">
                    <BiListPlus className="iconadd" />
                    Thêm playlist
                </Link>
            </div>
            <div className="content__playlist" style={{ maxWidth: 1060 }}>
                {showItemView === '1' ? <TablePlayList /> : <ListCardPlayList />}
            </div>
        </div>
    )
}

export default PlayList