import { Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React from 'react'
import './TablePlayList.scss'
interface DataType {
    STT: string
    Name: string
    NumberRecord: number
    time: string
    topic: string
    createAt: string
    PersonCreateAt: string
    detail: string

}

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'STT',
        key: 'STT',

    },
    {
        title: 'Tiêu đề',
        dataIndex: 'Name',
        key: 'Name',
    },
    {
        title: 'Số bản ghi',
        dataIndex: 'NumberRecord',
        align: 'right',
        key: 'NumberRecord',
    },
    {
        title: 'Thời lượng',
        key: 'time',
        align: 'right',
        dataIndex: 'time',

    },
    {
        title: 'Chủ đề',
        key: 'topic',
        dataIndex: 'topic',
        render: (action: any) => {
            return (
                <>
                    <Tag>Pop</Tag>
                    <Tag>Chill</Tag>
                    <Tag>Dinga</Tag>
                    <Tag>Songs</Tag>
                    <Tag>Lofi</Tag>
                    <Tag>...</Tag>
                </>
            )
        }

    },
    {
        title: 'Ngày tạo',
        key: 'createAt',
        dataIndex: 'createAt',

    },
    {
        title: 'Người tạo',
        key: 'PersonCreateAt',
        dataIndex: 'PersonCreateAt'
    }

    ,
    {
        title: '',
        key: 'detail',
        dataIndex: 'detail',
        render: (action: any) => {
            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Chi tiết</a>
            )
        }
    }
];

const data: DataType[] = [
    {
        STT: '1',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    },
    {
        STT: '2',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    }, {
        STT: '3',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    }, {
        STT: '4',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    }, {
        STT: '5',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    }, {
        STT: '6',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    }, {
        STT: '7',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    }, {
        STT: '8',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    }, {
        STT: '9',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    }, {
        STT: '10',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    }, {
        STT: '11',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    }, {
        STT: '12',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    }, {
        STT: '13',
        Name: 'Top ca khúc 2021',
        NumberRecord: 20,
        time: '01:04:27',
        topic: 'Pop',
        createAt: '22/10/2021',
        PersonCreateAt: 'Cindy Cường',
        detail: 'chi tiết'
    },
]
const TablePlayList = () => {
    return (
        <div className='Table__list_playlist'>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default TablePlayList