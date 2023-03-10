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
            title: 'T??n b???n ghi',
            dataIndex: 'Name',
            key: 'Name',
        },

        {
            title: 'M?? ISRC',
            key: 'ISRC',
            dataIndex: 'ISRC',

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
            title: 'T??c gi???',
            key: 'author',
            dataIndex: 'author'
        },
        {
            title: 'Ng??y t???i',
            key: 'createAt',
            dataIndex: 'createAt'
        }
        ,
        {
            title: 'T??nh tr???ng',
            key: 'video',
            dataIndex: 'video',
            render: (action: any) => {
                return (
                    <>
                        <div>
                            <div className='list_tag_time' >
                                <div className='tag__cicrle' />
                                ???? ph?? duy???t
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
                        T??nh tr???ng ph?? duy???t:
                    </div>
                    <Select
                        defaultValue="All"
                        style={{ width: 140 }}
                        //   onChange={handleChange}

                        options={[
                            {
                                value: 'All',
                                label: 'T???t c???',
                            },
                            {
                                value: 'new',
                                label: 'M???i',
                            },
                            {
                                value: 'approvaled',
                                label: '???? ph?? duy???t',
                            },
                            {
                                value: 'reject',
                                label: 'T??? ch???i',
                            },

                        ]}
                    />
                </div>



                <SearchConponent placeholder="T??n h???p ?????ng,s??? h???p ?????ng,ng?????i ???y quy???n..." />

            </div>

            <div className='content__table' style={{ width: 1090 }}>
                <Table columns={columns} dataSource={dataRecord} />
            </div>

        </div>
    )
}

export default DetailAuthorize