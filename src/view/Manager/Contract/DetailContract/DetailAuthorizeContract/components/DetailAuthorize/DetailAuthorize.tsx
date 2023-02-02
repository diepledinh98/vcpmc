import { Select } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IContractAuthorized } from '../../../../../../../redux/ContractAuthorized/interface'
import ListenComponent from '../../../../../../../shared/components/ListenComponent/ListenComponent'
import SearchConponent from '../../../../../../../shared/components/SearchComponent/SearchComponent'
import { useAppDispatch, useAppSelector } from '../../../../../../../shared/hook/reduxhook'
import './DetailAuthorize.scss'

interface DataType {
    id?: string
    Name: string
    ISRC: string
    singer: string
    author: string
    createAt: string
    status: string
    video: string



}


const DetailAuthorize = () => {
    const { id } = useParams()
    const contracAithorizeds: Array<any> | undefined = useAppSelector((state) => {
        return state.ContractAuthorized.ListContractAuthorized
    });
    const records: Array<any> | any = useAppSelector((state) => {
        return state.record.ListRecord
    });
    const contracAithorized = contracAithorizeds?.find((value) => value.id == id);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [onVideo, setOnVideo] = useState('')
    const handleOpen = (video: string) => {
        setOnVideo(video)
        setIsOpen(true)
    }
    let dataRecord: DataType[] | any;
    //lay data

    dataRecord = records

    // for (var i: number = 0; i < contracAithorized.listRecord?.length; i = i + 1) {

    //     for (var j: number = 0; j < records?.length; j = j + 1) {


    //         if (contracAithorized.listRecord[i].toString() == records[j].id.toString()) {
    //             dataRecord.push(records[j])

    //         }
    //     }
    // }

    // console.log(dataRecord);
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
            key: 'createAt',
            dataIndex: 'createAt'
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
            render: (_, { video }) => {


                return (
                    <a style={{ color: '#FF7506', textDecoration: 'underline' }} onClick={() => handleOpen(video)}>Nghe</a>
                )
            }
        },
    ];
    return (
        <div className='detail__authorized__page'>

            <ListenComponent onIsOpen={isOpen} setIsOpen={setIsOpen} onVideo={onVideo} />
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
                <Table columns={columns} dataSource={dataRecord} />
            </div>

        </div>
    )
}

export default DetailAuthorize