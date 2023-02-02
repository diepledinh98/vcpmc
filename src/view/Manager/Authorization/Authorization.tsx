import React, { useEffect } from "react";
import { Input, Switch, Table } from 'antd';
import './Authorization.scss'
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../shared/hook/reduxhook";
import { fetchAuthorizations } from "../../../redux/Authorization/repository";
const { Search } = Input;

interface DataType {
    id?: string
    Name: string
    username: string
    email: string
    expire: string
    phone: string
    status: boolean

}



const Authorization = () => {
    const dispatch = useAppDispatch()
    const Authorizations = useAppSelector((state) => state.Authorization.Authorizations)

    let dataRecord: DataType[] | any;





    useEffect(() => {
        dispatch(fetchAuthorizations())
    }, [dispatch])

    dataRecord = Authorizations.map((item, index) => {
        return {
            id: item.id,
            Name: item.Name,
            username: item.username,
            email: item.email,
            expire: item.expire,
            phone: item.phone,
            status: item.status

        }
    })

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
            align: 'center',
            render: (text, object, index) => <div> {index + 1}</div>
        },
        {
            title: 'Họ tên',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'Tên đăng nhập',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',

            key: 'email',
        },
        {
            title: 'Ngày hết hạn',
            key: 'expire',

            dataIndex: 'expire',

        },
        {
            title: 'Số điện thoại',
            key: 'phone',

            dataIndex: 'phone',

        },
        {
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status',
            render: (_, { status }) => {
                return (
                    <div>
                        <Switch defaultChecked={status} style={{ marginRight: 5 }} disabled={true} />
                        {status ? 'Đang kích hoạt' : 'Ngưng kích hoạt'}

                    </div>
                )
            }
        },
        {
            title: '',
            key: 'detail',
            dataIndex: 'detail',
            render: (_, { id }) => {
                return (
                    <Link to={`/manager/Authorization-unit/update-authorization-unit/${id}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>Cập nhật</Link>
                )
            }
        }
    ];
    return (
        <div className="Authorization__page">
            <div className="title__page">Danh sách đối tác ủy quyền</div>
            <div className="action__playlist">
                <Search placeholder="Tên bản ghi,ca sĩ..." style={{ width: 368 }} />
            </div>

            <div className='Table__list_playlist' style={{ marginTop: 20 }}>
                <Table columns={columns} dataSource={dataRecord} />
            </div>
        </div>
    )
}

export default Authorization