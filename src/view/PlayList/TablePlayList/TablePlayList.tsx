import { Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchPlayLists } from '../../../redux/PlayList/repository'
import { useAppDispatch, useAppSelector } from '../../../shared/hook/reduxhook'
import './TablePlayList.scss'
interface DataType {
    id?: string
    Name: string
    NumberRecord: number
    time: string
    topic: string[]
    createAt: string
    PersonCreateAt: string

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
        render: (_, { topic }) => {
            return topic.map((item, index) => {
                return (
                    <Tag key={index}>{item}</Tag>
                )
            })
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
        render: (_, { id }) => {
            return (
                <Link to={`/playlist/detail-playlist/${id}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>Chi tiết</Link>
            )
        }
    }
];

const data: DataType[] = [

]
const TablePlayList = () => {
    const dispatch = useAppDispatch()
    const playlists = useAppSelector((state) => state.playlist.PlayLists)

    let dataRecord: DataType[] | any;

    dataRecord = playlists.map((item, index) => {
        return {
            id: item.id,
            Name: item.namePlayList,
            NumberRecord: item.numberPlayList,
            time: item.timePlayList,
            topic: item.topic,
            createAt: item.createAt,
            PersonCreateAt: item.personAt
        }
    })

    useEffect(() => {
        dispatch(fetchPlayLists())
    }, [dispatch])
    console.log(playlists);

    return (
        <div className='Table__list_playlist'>
            <Table columns={columns} dataSource={dataRecord} />
        </div>
    )
}

export default TablePlayList