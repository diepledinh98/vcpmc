import React, { memo, useEffect, useState } from 'react'
import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import { Space, Tag } from 'antd';
import './Table.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/Store';
import { fetchRecords } from '../../../redux/RecordStore/repository';
import { useAppDispatch } from '../../../shared/hook/reduxhook';
import { Link } from 'react-router-dom';
import { IRecordStore } from '../../../redux/RecordStore/interface';
import ListenComponent from '../../../shared/components/ListenComponent/ListenComponent';
interface DataType {
    STT?: string
    id?: string
    key?: number
    Name: string
    ISRC: string
    time: string
    singer: string
    image: string
    video: string
    author: string
    category: string
    format: string
    usetime: string
    presonUpload: string
    personApproval: string
    producer: string
    ApprovalAt: string
    createAt: string

}

interface DataTableType {
    id?: string
    key?: number
    Name: string
    ISRC: string
    time: string
    singer: string
    image: string
    video: string
    author: string
}

const TableComponent = () => {
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [onVideo, setOnVideo] = useState('')
    const ListRecord = useSelector((state: RootState) => state.record.ListRecord)
    const handleOpen = (video: string) => {
        setOnVideo(video)
        setIsOpen(true)
    }


    let dataRecord: DataTableType[] | any;
    dataRecord = ListRecord.map((record, index) => {
        return {
            id: record.id,
            key: index + 1,
            Name: record.Name,
            ISRC: record.ISRC,
            time: record.time,
            singer: record.singer,
            image: record.image,
            video: record.video,
            author: record.author,
            category: record.category,
            format: record.format
        }
    })
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
            render: (text, object, index) => <div> {index + 1}</div>

        },
        {
            title: 'T??n b???n ghi',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'M?? ISRC',
            dataIndex: 'ISRC',
            key: 'ISRC',
        },
        {
            title: 'Th???i l?????ng',
            key: 'time',
            dataIndex: 'time',

        },
        {
            title: 'Ca s??',
            key: 'singer',
            dataIndex: 'singer'
        },
        {
            title: 'T??c gi???',
            key: 'author',
            dataIndex: 'author'
        },
        {
            title: 'Th??? lo???i',
            key: 'category',
            dataIndex: 'category'
        },
        {
            title: '?????nh d???ng',
            key: 'format',
            dataIndex: 'format'
        },
        {
            title: 'Th???i h???n s??? d???ng',
            key: 'usetime',
            dataIndex: 'usetime',
            render: (action: any) => {
                return (
                    <>
                        <div>
                            <div className='list_tag_time' >
                                <div className='tag__cicrle' />
                                C??n th???i h???n
                            </div>
                            07/10/2019
                        </div>
                    </>
                )
            }

        },
        {
            title: '',
            key: 'update',
            dataIndex: 'update',
            render: (_, { id }) => {


                return (
                    <Link to={`/edit-record/${id}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>C???p nh???t</Link>
                )
            }
        },
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
    ];
    useEffect(() => {
        dispatch(fetchRecords())
    }, [dispatch])

    const [rowkey, setRowkey] = useState(['1'])
    return (
        <div className='Table__list'>
            <Table
                columns={columns}
                dataSource={dataRecord}
                rowSelection={{
                    type: 'checkbox'
                }}
            />

            <ListenComponent onIsOpen={isOpen} setIsOpen={setIsOpen} onVideo={onVideo} />
        </div>
    )
}

export default memo(TableComponent)