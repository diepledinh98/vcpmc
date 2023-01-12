import { Select } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import SearchConponent from '../../../../../shared/components/SearchComponent/SearchComponent'
import './AuthorizeContract.scss'

interface DataType {
    id?: string
    NumberContract: string
    NameContract: string
    PersonAuthorized: string
    Mining: string
    Effect: string
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
        title: 'Số hợp đồng',
        dataIndex: 'NumberContract',
        key: 'NumberContract',
    },
    {
        title: 'Tên hợp đồng',
        dataIndex: 'NameContract',
        key: 'NameContract',
    },
    {
        title: 'Người ủy quyền',
        key: 'PersonAuthorized',
        dataIndex: 'PersonAuthorized',

    },
    {
        title: 'Quyền sở hữu',
        key: 'Mining',
        dataIndex: 'Mining'
    },

    {
        title: 'Hiệu lực hợp đồng',
        key: 'Effect',
        dataIndex: 'Effect',
        render: (action: any) => {
            return (
                <>
                    <div>
                        <div className='list_tag_time' >
                            <div className='tag__cicrle' />
                            Còn thời hạn
                        </div>
                    </div>
                </>
            )
        }

    },
    {
        title: 'Ngày tạo',
        key: 'createAt',
        dataIndex: 'createAt'
    },
    {
        title: '',
        key: 'update',
        dataIndex: 'update',
        render: (_, { id }) => {


            return (
                <Link to='/manager/contract/detail-authorized-contract' style={{ color: '#FF7506', textDecoration: 'underline' }}>Xem chi tiết</Link>
            )
        }
    },
    {
        title: '',
        key: 'listen',
        dataIndex: 'listen',
        render: () => {


            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }} >Lý do hủy</a>
            )
        }
    },
];
const AuthorizeContract = () => {
    return (
        <div className='authorize__contract__page'>

            <div className="list_actions">
                <div className="select_item">
                    <div className="select_name">
                        Quyền sở hữu:
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
                                value: 'actions',
                                label: 'Người biểu diễn',
                            },
                            {
                                value: 'creator',
                                label: 'Nhà sản xuất',
                            },

                        ]}
                    />
                </div>

                <div className="select_item">
                    <div className="select_name">
                        Hiệu lực hợp đồng:
                    </div>
                    <Select
                        defaultValue="All"
                        style={{ width: 140, marginRight: 100 }}
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
                                value: 'creator',
                                label: 'Còn thời hạn',
                            },
                            {
                                value: 'new',
                                label: 'Hết hạn',
                            },
                            {
                                value: 'creator',
                                label: 'Hủy',
                            },

                        ]}
                    />
                </div>

                <SearchConponent placeholder="Tên hợp đồng,số hợp đồng,người ủy quyền..." />
            </div>
            <div className='content'>
                <div className='content__table'>
                    <Table columns={columns} dataSource={[
                        {
                            NumberContract: "HD123",
                            NameContract: "Hợp đồng ủy quyền bài hát",
                            PersonAuthorized: "Vương anh Tú",
                            Mining: "Người biểu diễn",
                            Effect: "còn",
                            createAt: "01/04/2021 15:33:13"
                        }
                    ]} />
                </div>

                <div className="actions__add__record">
                    <div className='action_edit' >
                        <Link to="/manager/contract/add-contract" className='icon_action_profile' >
                            <AiOutlinePlus />
                        </Link>
                        Thêm hợp đồng
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorizeContract