import React from 'react'
import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import { Space, Tag } from 'antd';
import './Table.scss'
interface DataType {
    STT: string
    Name: string
    ISRC: string
    time: string
    singer: string
    author: string
    category: string
    format: string
    usetime: string
    update: string
    listen: string
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
        title: 'Mã ISRC',
        dataIndex: 'ISRC',
        key: 'ISRC',
    },
    {
        title: 'Thời lượng',
        key: 'time',
        dataIndex: 'time',

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
        title: 'Thể loại',
        key: 'category',
        dataIndex: 'category'
    },
    {
        title: 'Định dạng',
        key: 'format',
        dataIndex: 'format'
    },
    {
        title: 'Thời hạn sử dụng',
        key: 'usetime',
        dataIndex: 'usetime',
        render: (action: any) => {
            return (
                <>
                    <div>
                        <div className='list_tag_time' >
                            <div className='tag__cicrle' />
                            Còn thời hạn
                        </div>
                        07/10/2019
                    </div>
                </>
            )
        }

    },
    {
        title: 'Cập nhật',
        key: 'update',
        dataIndex: 'update',
        render: (action: any) => {
            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Cập nhật</a>
            )
        }
    },
    {
        title: 'Nghe',
        key: 'listen',
        dataIndex: 'listen',
        render: (action: any) => {
            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Nghe</a>
            )
        }
    },
];

const data: DataType[] = [
    {
        STT: '1',
        Name: 'Mất em ',
        ISRC: 'KRA40105463',
        time: '04:27',
        singer: 'Phan Mạnh Quỳnh',
        author: 'Phan Mạnh Quỳnh',
        category: 'Ballad',
        format: 'Audio',
        usetime: 'Còn thời hạn',
        update: 'Cập nhật',
        listen: 'Nghe',
    },
    {
        STT: '2',
        Name: 'Mất em ',
        ISRC: 'KRA40105463',
        time: '04:27',
        singer: 'Phan Mạnh Quỳnh',
        author: 'Phan Mạnh Quỳnh',
        category: 'Ballad',
        format: 'Audio',
        usetime: 'Còn thời hạn',
        update: 'Cập nhật',
        listen: 'Nghe',
    },
    {
        STT: '3',
        Name: 'Mất em ',
        ISRC: 'KRA40105463',
        time: '04:27',
        singer: 'Phan Mạnh Quỳnh',
        author: 'Phan Mạnh Quỳnh',
        category: 'Ballad',
        format: 'Audio',
        usetime: 'Còn thời hạn',
        update: 'Cập nhật',
        listen: 'Nghe',
    },
    {
        STT: '4',
        Name: 'Mất em ',
        ISRC: 'KRA40105463',
        time: '04:27',
        singer: 'Phan Mạnh Quỳnh',
        author: 'Phan Mạnh Quỳnh',
        category: 'Ballad',
        format: 'Audio',
        usetime: 'Còn thời hạn',
        update: 'Cập nhật',
        listen: 'Nghe',
    },
    {
        STT: '5',
        Name: 'Mất em ',
        ISRC: 'KRA40105463',
        time: '04:27',
        singer: 'Phan Mạnh Quỳnh',
        author: 'Phan Mạnh Quỳnh',
        category: 'Ballad',
        format: 'Audio',
        usetime: 'Còn thời hạn',
        update: 'Cập nhật',
        listen: 'Nghe',
    },
    {
        STT: '5',
        Name: 'Mất em ',
        ISRC: 'KRA40105463',
        time: '04:27',
        singer: 'Phan Mạnh Quỳnh',
        author: 'Phan Mạnh Quỳnh',
        category: 'Ballad',
        format: 'Audio',
        usetime: 'Còn thời hạn',
        update: 'Cập nhật',
        listen: 'Nghe',
    },
    {
        STT: '6',
        Name: 'Mất em ',
        ISRC: 'KRA40105463',
        time: '04:27',
        singer: 'Phan Mạnh Quỳnh',
        author: 'Phan Mạnh Quỳnh',
        category: 'Ballad',
        format: 'Audio',
        usetime: 'Còn thời hạn',
        update: 'Cập nhật',
        listen: 'Nghe',
    },
    {
        STT: '7',
        Name: 'Mất em ',
        ISRC: 'KRA40105463',
        time: '04:27',
        singer: 'Phan Mạnh Quỳnh',
        author: 'Phan Mạnh Quỳnh',
        category: 'Ballad',
        format: 'Audio',
        usetime: 'Còn thời hạn',
        update: 'Cập nhật',
        listen: 'Nghe',
    },
    {
        STT: '8',
        Name: 'Mất em ',
        ISRC: 'KRA40105463',
        time: '04:27',
        singer: 'Phan Mạnh Quỳnh',
        author: 'Phan Mạnh Quỳnh',
        category: 'Ballad',
        format: 'Audio',
        usetime: 'Còn thời hạn',
        update: 'Cập nhật',
        listen: 'Nghe',
    },
    {
        STT: '9',
        Name: 'Mất em ',
        ISRC: 'KRA40105463',
        time: '04:27',
        singer: 'Phan Mạnh Quỳnh',
        author: 'Phan Mạnh Quỳnh',
        category: 'Ballad',
        format: 'Audio',
        usetime: 'Còn thời hạn',
        update: 'Cập nhật',
        listen: 'Nghe',
    },
    {
        STT: '10',
        Name: 'Mất em ',
        ISRC: 'KRA40105463',
        time: '04:27',
        singer: 'Phan Mạnh Quỳnh',
        author: 'Phan Mạnh Quỳnh',
        category: 'Ballad',
        format: 'Audio',
        usetime: 'Còn thời hạn',
        update: 'Cập nhật',
        listen: 'Nghe',
    },

];
const TableComponent = () => {
    return (
        <div className='Table__list'>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default TableComponent