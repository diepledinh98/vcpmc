import React from "react";

import { Input, Switch, Table } from 'antd';
import { ColumnsType } from "antd/es/table";
import { Link, useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { useAppSelector } from "../../../../shared/hook/reduxhook";
const { Search } = Input;

interface DataType {
    id?: string
    key?: number
    NameCustomer: string
    role: string
    email: string
    username: string
    lastupdate: string
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
        title: 'Tên người dùng',
        dataIndex: 'NameCustomer',
        key: 'NameCustomer',
    },
    {
        title: 'Vai trò',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'Email',
        key: 'email',
        dataIndex: 'email',

    },
    {
        title: 'Tên đăng nhập',
        key: 'username',
        dataIndex: 'username'
    },
    {
        title: 'cập nhật lần cuối',
        key: 'lastupdate',
        dataIndex: 'lastupdate'
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
                <Link to={`/manager/Unit-used/detail-user/${id}}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>Xem chi tiết</Link>
            )
        }
    }
];


const DetailUnit = () => {

    const { id } = useParams()
    const ContractMinings: Array<any> | undefined = useAppSelector((state) => {
        return state.contractMining.ContractMinings
    });
    const ContractMining = ContractMinings?.find((value) => value.id == id);
    let dataRecord: DataType[] | any;

    dataRecord = ContractMining?.ListUnit.map((item: any) => {
        return {
            id: item.id,
            key: indexedDB,
            NameCustomer: item.Name,
            role: item.role,
            email: item.email,
            username: item.username,
            lastupdate: "02/02/2021",
            status: "Còn thời hạn"
        }
    })
    return (
        <div className="unitused__page">
            <div className="title__page">Đơn vị sử dụng ABCD</div>
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
                <div className='profile__action' style={{ height: 290 }}>
                    <Link to={`/manager/Unit-used/detail-unit/add-user/${id}`} className='action_edit'>
                        <div className='icon_action_profile' >
                            <FiEdit />
                        </div>
                        Thêm người dùng
                    </Link>
                    <Link to='/edit-profile' className='action_edit'>
                        <div className='icon_action_profile' >
                            <FiEdit />
                        </div>
                        Xóa
                    </Link>
                    <Link to='/edit-profile' className='action_edit'>
                        <div className='icon_action_profile' >
                            <FiEdit />
                        </div>
                        Vai trò
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default DetailUnit