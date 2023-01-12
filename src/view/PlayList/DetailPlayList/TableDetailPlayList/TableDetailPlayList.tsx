import { Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'
import { IRecordStore } from '../../../../redux/RecordStore/interface'
import ListenComponent from '../../../../shared/components/ListenComponent/ListenComponent'
import './style.scss'
interface DataType {
    id?: string
    Name: string

    singer: string
    author: string
    video: string

}



const data: DataType[] = [

]
interface dataTableProps {
    dataTable: IRecordStore[]
}
const TableDetailPlayList = (props: dataTableProps) => {

    let dataRecord: DataType[] | any;
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [onVideo, setOnVideo] = useState('')

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

        },

        {
            // title: '',
            // key: 'detail',
            // dataIndex: 'detail',
            render: (_, { video }) => {


                return (
                    <a style={{ color: '#FF7506', textDecoration: 'underline' }} onClick={() => handleOpen(video)}>Nghe</a>
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
    dataRecord = props.dataTable.map((item, index) => {
        return {
            id: item.id,
            Name: item.Name,
            singer: item.singer,
            author: item.author,
            video: item.video
        }
    })

    const handleOpen = (video: string) => {
        setOnVideo(video)
        setIsOpen(true)
    }
    return (
        <div className='Table_detail__list_playlist'>
            <ListenComponent onIsOpen={isOpen} setIsOpen={setIsOpen} onVideo={onVideo} />
            <Table columns={columns} dataSource={dataRecord} />
        </div>
    )
}

export default TableDetailPlayList