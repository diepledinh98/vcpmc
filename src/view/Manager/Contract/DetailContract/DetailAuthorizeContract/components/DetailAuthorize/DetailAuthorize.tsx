import { Select } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchConponent from '../../../../../../../shared/components/SearchComponent/SearchComponent'
import './DetailAuthorize.scss'

interface DataType {
    id?: string
    NameRecord: string
    ISRC: string
    singer: string
    author: string
    dateUpload: string
    status: string
    video?: string



}

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'STT',
        key: 'STT',
        render: (text, object, index) => <div> {index + 1}</div>

    },
    {
        title: 'Tên bản ghi',
        dataIndex: 'NameRecord',
        key: 'NameRecord',
    },

    {
        title: 'Mã ISRC',
        key: 'ISRC',
        dataIndex: 'ISRC',

    },
    {
        title: 'Ca sĩ',
        key: 'singer',
        dataIndex: 'singer'
    },
    {
        title: 'Tác giả',
        key: 'author',
        dataIndex: 'author'
    },
    {
        title: 'Tác giả',
        key: 'author',
        dataIndex: 'author'
    },
    {
        title: 'Ngày tải',
        key: 'dateUpload',
        dataIndex: 'dateUpload'
    }
    ,
    {
        title: 'Tình trạng',
        key: 'video',
        dataIndex: 'video',
        render: (action: any) => {
            return (
                <>
                    <div>
                        <div className='list_tag_time' >
                            <div className='tag__cicrle' />
                            Đã phê duyệt
                        </div>

                    </div>
                </>
            )
        }

    },

    {
        title: '',
        key: 'listen',
        dataIndex: 'listen',
        render: () => {


            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }} >Nghe</a>
            )
        }
    },
];
const DetailAuthorize = () => {
    return (
        <div className='detail__authorized__page'>
            <div className='list_actions'>
                <div className="select_item">
                    <div className="select_name">
                        Tình trạng phê duyệt:
                    </div>
                    <Select
                        defaultValue="All"
                        style={{ width: 140 }}
                        //   onChange={handleChange}

                        options={[
                            {
                                value: 'All',
                                label: 'Tất cả',
                            },
                            {
                                value: 'new',
                                label: 'Mới',
                            },
                            {
                                value: 'approvaled',
                                label: 'Đã phê duyệt',
                            },
                            {
                                value: 'reject',
                                label: 'Từ chối',
                            },

                        ]}
                    />
                </div>



                <SearchConponent placeholder="Tên hợp đồng,số hợp đồng,người ủy quyền..." />

            </div>

            <div className='content__table' style={{ width: 1090 }}>
                <Table columns={columns} dataSource={[
                    {
                        NameRecord: "Mất Em",
                        ISRC: "VNA123456",
                        singer: "Vương Anh Tú",
                        author: "Vương Anh Tú",
                        dateUpload: "01/04/2021 15:53:13",
                        status: "Mới",


                    }
                ]} />
            </div>

        </div>
    )
}

export default DetailAuthorize