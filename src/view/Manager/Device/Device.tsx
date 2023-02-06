import Table, { ColumnsType } from "antd/es/table";
import React, { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { fetchdevices } from "../../../redux/Device/repository";
import { useAppDispatch, useAppSelector } from "../../../shared/hook/reduxhook";
import './Device.scss'
interface DataType {
    id?: string
    NameDevice: string
    status: string
    location: string
    time: string
    MAC: string
    Memory: string
}

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'STT',
        key: 'STT',
        render: (text, object, index) => <div> {index + 1}</div>

    },
    {
        title: 'Tên thiết bị',
        dataIndex: 'NameDevice',
        key: 'NameDevice',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: () => {
            return (
                <div>Đang kích hoạt | Đang hoạt động</div>
            )
        }
    },
    {
        title: 'Địa điểm',
        key: 'location',
        dataIndex: 'location',

    },
    {
        title: 'Hạn hợp đồng',
        key: 'time',
        dataIndex: 'time'
    },
    {
        title: 'MAC Address',
        key: 'MAC',
        dataIndex: 'MAC'
    },
    {
        title: 'Memory',
        key: 'Memory',
        dataIndex: 'Memory'
    }
];

const Device = () => {
    const dispatch = useAppDispatch()
    const devices = useAppSelector((state) => state.Device.Devices)
    let dataRecord: DataType[] | any;
    dataRecord = devices.map((item, index) => {
        return {
            id: item.id,
            NameDevice: item.NameDevice,
            status: 'Còn hiệu lực',
            location: item.location,
            time: item.time,
            MAC: item.MAC,
            Memory: '0.00GB/32GB'
        }
    })

    useEffect(() => {
        dispatch(fetchdevices())
    }, [dispatch])
    return (
        <div className="device__page">
            <div className="title__page">Danh sách thiết bị</div>

            <div className="content">

                <div className='Table__list' style={{ marginTop: 30 }}>
                    <Table
                        columns={columns}
                        dataSource={dataRecord}
                        rowSelection={{
                            type: 'checkbox'
                        }}
                    />


                </div>
                <div className='profile__action' style={{ height: 390 }}>
                    <Link to='/manager/device/add-device' className='action_edit'>
                        <div className='icon_action_profile' >
                            <FiEdit />
                        </div>
                        Thêm thiết bị
                    </Link>
                    <Link to='/edit-profile' className='action_edit'>
                        <div className='icon_action_profile' >
                            <FiEdit />
                        </div>
                        Kích hoạt thiết bị
                    </Link>
                    <Link to='/edit-profile' className='action_edit'>
                        <div className='icon_action_profile' >
                            <FiEdit />
                        </div>
                        Khóa thiết bị
                    </Link>
                    <Link to='/edit-profile' className='action_edit'>
                        <div className='icon_action_profile' >
                            <FiEdit />
                        </div>
                        Xóa thiết bị
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Device