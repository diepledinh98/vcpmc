import { Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React from 'react'
import './style.scss'
interface DataType {
    STT: string
    Name: string
    singer: string
    author: string


}

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'STT',
        key: 'STT',

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

    },

    {
        // title: '',
        // key: 'detail',
        // dataIndex: 'detail',
        render: (action: any) => {
            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Nghe</a>
            )
        }
    },
    {
        // title: '',
        // key: 'detail',
        // dataIndex: 'detail',
        render: (action: any) => {
            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Gỡ</a>
            )
        }
    }
];

const data: DataType[] = [
    {
        STT: '1',
        Name: 'Top ca khúc 2021',

        singer: 'Tăng Phúc ft Mỹ Lệ',
        author: 'Origin'
    },
    {
        STT: '2',
        Name: 'Top ca khúc 2021',

        singer: 'Tăng Phúc ft Mỹ Lệ',
        author: 'Origin'
    },
    {
        STT: '3',
        Name: 'Top ca khúc 2021',

        singer: 'Tăng Phúc ft Mỹ Lệ',
        author: 'Origin'
    },
    {
        STT: '4',
        Name: 'Top ca khúc 2021',

        singer: 'Tăng Phúc ft Mỹ Lệ',
        author: 'Origin'
    },
    {
        STT: '5',
        Name: 'Top ca khúc 2021',

        singer: 'Tăng Phúc ft Mỹ Lệ',
        author: 'Origin'
    }
]
const TableDetailPlayList = () => {
    return (
        <div className='Table_detail__list_playlist'>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default TableDetailPlayList