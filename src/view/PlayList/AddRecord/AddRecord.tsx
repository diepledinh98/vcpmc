import { Button, Col, message, Row, Select, Table } from "antd";
import Search from "antd/es/input/Search";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRecord, deleteAllRecord, deleteRecord } from "../../../redux/PlayList/PlayListSlice";
import ListenComponent from "../../../shared/components/ListenComponent/ListenComponent";
import { useAppDispatch, useAppSelector } from "../../../shared/hook/reduxhook";
import './__AddRecord.scss'
interface DataType {
    id?: string
    STT: string
    Name: string
    singer: string
    author: string
    video: string
}


const data: DataType[] = [

]
const AddRecord = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [onVideo, setOnVideo] = useState('')
    const records = useAppSelector(state => state.record.ListRecord)
    const records__added = useAppSelector(state => state.playlist.Record__Added)


    let dataRecord: DataType[] | any;
    let dataRecord__Added: DataType[] | any;
    dataRecord__Added = records__added.map((item, index) => {
        return {
            id: item?.id,
            Name: item?.Name,
            singer: item?.singer,
            author: item?.author,
            video: item?.video
        }
    })
    dataRecord = records.map((item, index) => {
        return {
            id: item?.id,
            Name: item?.Name,
            singer: item?.singer,
            author: item?.author,
            video: item?.video
        }
    })
    const handleSave = () => {
        navigate('/playlist/add-playlist')
    }
    const handleCancel = () => {
        dispatch(deleteAllRecord())
        navigate('/playlist/add-playlist')
    }
    const handleDeleteRecordAdded = (id: string) => {
        dispatch(deleteRecord(id))
    }
    const handleOpen = (video: string) => {
        setOnVideo(video)
        setIsOpen(true)
    }
    const handleAddRecord = (id: string) => {
        const recorditem = records.find((item) => item.id === id)
        let check_Item_Added = records__added.find((item) => item.id === id)
        if (check_Item_Added !== undefined) {
            message.error('Record đã bị trùng!')
        } else {
            if (recorditem) {
                dispatch(addRecord(recorditem))
            }
        }
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
            align: 'center',
            render: (text, object, index) => <div> {index + 1}</div>

        },
        {
            title: 'Tên bản ghi',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'ca sĩ',
            dataIndex: 'singer',

            key: 'singer',
        },
        {
            title: 'Tác giả',
            key: 'author',

            dataIndex: 'author',

        }
        ,
        {
            title: '',
            key: 'listen',
            dataIndex: 'listen',
            render: (_, { video }) => {
                console.log(video);

                return (
                    <a style={{ color: '#FF7506', textDecoration: 'underline' }} onClick={() => handleOpen(video)}>Nghe</a>
                )
            }
        },

        {
            title: '',
            key: 'update',
            dataIndex: 'update',
            render: (_, { id }) => {
                if (id) {
                    return (
                        <a style={{ color: '#FF7506', textDecoration: 'underline' }} onClick={() => handleAddRecord(id)}>Thêm</a>
                    )
                }
            }
        },
    ];

    const columns2: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
            align: 'center',
            render: (text, object, index) => <div> {index + 1}</div>

        },
        {
            title: 'Tên bản ghi',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'ca sĩ',
            dataIndex: 'singer',

            key: 'singer',
        },
        {
            title: 'Tác giả',
            key: 'author',

            dataIndex: 'author',

        }
        ,
        {
            title: '',
            key: 'listen',
            dataIndex: 'listen',
            render: (_, { video }) => {
                return (
                    <a style={{ color: '#FF7506', textDecoration: 'underline' }} onClick={() => handleOpen(video)}>Nghe</a>
                )
            }
        },

        {
            title: '',
            key: 'update',
            dataIndex: 'update',
            render: (_, { id }) => {
                if (id) {
                    return (
                        <a style={{ color: '#FF7506', textDecoration: 'underline' }} onClick={() => handleDeleteRecordAdded(id)}>Gỡ</a>
                    )
                }
            }
        },
    ];
    return (
        <div className="add__record__page">
            <ListenComponent onIsOpen={isOpen} setIsOpen={setIsOpen} onVideo={onVideo} />
            <div className='title__page'>
                Thêm bản ghi
            </div>
            <div className="content__add__record">
                <div className="store__add__record">
                    <div className="title__name__add___record">Kho bản ghi</div>
                    <div className="actions__add__record">
                        <div className="select__add__record">
                            <div className="name__select">Thể loại</div>
                            <Select
                                defaultValue="All"
                                style={{ width: 118, marginRight: 24 }}
                                //   onChange={handleChange}

                                options={[
                                    {
                                        value: 'All',
                                        label: 'Tất cả',
                                    },
                                    {
                                        value: 'pop',
                                        label: 'Pop',
                                    },
                                    {
                                        value: 'edm',
                                        label: 'EDM',
                                    },
                                    {
                                        value: 'ballad',
                                        label: 'Ballad',
                                    },
                                ]}
                            />

                            <div className="name__select">Playlist mẫu</div>
                            <Select
                                defaultValue="All"
                                style={{ width: 155 }}
                                //   onChange={handleChange}

                                options={[
                                    {
                                        value: 'All',
                                        label: 'Tất cả',
                                    },
                                    {
                                        value: 'pop',
                                        label: 'Pop',
                                    },
                                    {
                                        value: 'edm',
                                        label: 'EDM',
                                    },
                                    {
                                        value: 'ballad',
                                        label: 'Ballad',
                                    },
                                ]}
                            />
                        </div>

                        <div className="search__add__record">
                            <Search placeholder="Tên bản ghi,ca sĩ..." style={{ width: 500 }} />
                        </div>

                    </div>


                    <div className='Table_detail__list_playlist' style={{ width: 540 }}>
                        <Table columns={columns} dataSource={dataRecord} pagination={false} style={{ fontSize: 10 }} />
                    </div>

                </div>
                <div className="table__record__added">
                    <div className="title__name__add___record">Danh sách bản ghi được thêm vào Playlist</div>
                    <div className="info__added__record">
                        <div className="list__info__added__record">
                            <div className="name__added__record">Tổng số</div>
                            <div className="value__added__record">0 bản ghi</div>
                        </div>

                        <div className="list__info__added__record">
                            <div className="name__added__record">Tổng thời lượng</div>
                            <div className="value__added__record">00:03:12</div>
                        </div>
                    </div>
                    <div className="search__add__record">
                        <Search placeholder="Tên bản ghi,ca sĩ..." style={{ width: 500 }} />
                    </div>
                    <div className='Table_detail__list_playlist' style={{ width: 570 }}>
                        <Table columns={columns2} dataSource={dataRecord__Added} pagination={false} />
                    </div>
                </div>


            </div>
            <div className="btn__actions">

                <Button className='btn__cancel' onClick={handleCancel}>
                    Hủy
                </Button>
                <Button htmlType="submit" className='btn__save' onClick={handleSave}>
                    Lưu
                </Button>
            </div>
        </div>
    )
}

export default AddRecord