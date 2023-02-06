import React, { useEffect } from "react";
import './UnitUsed.scss'
import { Input, Switch, Table } from 'antd';
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../../shared/hook/reduxhook";
import { fetchContractMinings } from "../../../redux/ContractMining/repository";
const { Search } = Input;

interface DataType {
    id?: string
    key?: number
    NameConpany: string
    NumberContract: string
    Admin: string
    NumberCustomer: number
    device: number
    expire: string
    status: string

}

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'STT',
        key: 'STT',
        render: (text, object, index) => <div> {index + 1}</div>

    },
    {
        title: 'Tên tài khoản quản trị',
        dataIndex: 'NameConpany',
        key: 'NameConpany',
    },
    {
        title: 'Số hợp đông',
        dataIndex: 'NumberContract',
        key: 'NumberContract',
    },
    {
        title: 'Admin',
        key: 'Admin',
        dataIndex: 'Admin',

    },
    {
        title: 'Người dùng',
        key: 'NumberCustomer',
        dataIndex: 'NumberCustomer'
    },
    {
        title: 'Thiết bị chỉ định',
        key: 'device',
        dataIndex: 'device'
    },
    {
        title: 'Ngày hết hạn',
        key: 'expire',
        dataIndex: 'expire'
    },
    {
        title: 'Trạng thái',
        key: 'status',
        dataIndex: 'status',
        render: () => {
            return (
                <div>
                    <Switch defaultChecked style={{ marginRight: 5 }} />
                    Đang kích hoạt
                </div>
            )
        }
    },

    {
        title: '',
        key: 'update',
        dataIndex: 'update',
        render: (_, { id }) => {


            return (
                <Link to={`/manager/Unit-used/detail-unit/${id}}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>Xem chi tiết</Link>
            )
        }
    }
];


const UnitUsed = () => {
    const dispatch = useAppDispatch()
    const ContractMinings = useAppSelector((state) => state.contractMining.ContractMinings)
    let dataRecord: DataType[] | any;
    dataRecord = ContractMinings.map((item, index) => {
        return {
            id: item.id,
            key: index,
            NameConpany: item.NameUnitUse,
            NumberContract: item.NameContract,
            Admin: 'Admin 1',
            NumberCustomer: 1,
            device: 2,
            expire: item.DayExpire,
            status: 'Đang kích hoạt'
        }
    })

    useEffect(() => {
        dispatch(fetchContractMinings())
    }, [dispatch])
    return (
        <div className="unitused__page">
            <div className="title__page">Danh sách đơn vị sử dụng</div>
            <div className="action__playlist">
                <Search placeholder="Tên bản ghi,ca sĩ..." style={{ width: 368 }} />
            </div>
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
                <div className='profile__action'>
                    <Link to='/edit-profile' className='action_edit'>
                        <div className='icon_action_profile' >
                            <FiEdit />
                        </div>
                        Xóa
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default UnitUsed