import React, { memo, useEffect } from 'react'
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
interface DataType {
    STT?: string
    id?: string
    Name: string
    ISRC: string
    time: string
    singer: string
    image: string
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

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'STT',
        key: 'STT',
        render: (text, object, index) => <div> {index + 1}</div>

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
        title: '',
        key: 'update',
        dataIndex: 'update',
        render: (_, { id }) => {


            return (
                <Link to={`/edit-record/${id}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>Cập nhật</Link>
            )
        }
    },
    {
        title: '',
        key: 'listen',
        dataIndex: 'listen',
        render: (action: any, index) => {


            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Nghe</a>
            )
        }
    },
];

const TableComponent = () => {
    const dispatch = useAppDispatch()

    const ListRecord = useSelector((state: RootState) => state.record.ListRecord)
    useEffect(() => {
        dispatch(fetchRecords())
    }, [dispatch])
    return (
        <div className='Table__list'>
            <Table columns={columns} dataSource={ListRecord} />
        </div>
    )
}

export default memo(TableComponent)