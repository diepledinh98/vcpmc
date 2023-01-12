import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import SearchConponent from '../../../../../shared/components/SearchComponent/SearchComponent'
interface DataType {
    id?: string
    NumberContract: string
    Customer: string
    expirationDate: string
    createAtEffect: string
    createAt: string
    EffectContract: string

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
        title: 'Khách hàng',
        dataIndex: 'Customer',
        key: 'Customer',
    },
    {
        title: 'Ngày tạo',
        key: 'createAt',
        dataIndex: 'createAt',

    },
    {
        title: 'Ngày hiệu lực',
        key: 'createAtEffect',
        dataIndex: 'createAtEffect'
    },
    {
        title: 'Ngày hết hạn',
        key: 'expirationDate',
        dataIndex: 'expirationDate'
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
        render: () => {


            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Xem chi tiết</a>
            )
        }
    },
    {
        title: '',
        key: 'listen',
        dataIndex: 'listen',
        render: () => {


            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }} >Sao chép hợp đồng</a>
            )
        }
    },
];
const MiningContract = () => {
    return (
        <div className='authorize__contract__page'>

            <div className="list_actions">


                <SearchConponent placeholder="Tên hợp đồng,số hợp đồng,người ủy quyền..." />
            </div>
            <div className='content'>
                <div className='content__table'>
                    <Table columns={columns} dataSource={[
                        {
                            NumberContract: "HD123",
                            Customer: "Công ty ABC",
                            expirationDate: "02/12/2022",
                            createAtEffect: "02/12/2021",
                            createAt: "01/04/2021 15:53:13",
                            EffectContract: "new"
                        }
                    ]} />
                </div>

                <Link to="/manager/contract/add-contract-mining" className="actions__add__record">
                    <div className='action_edit' >
                        <div className='icon_action_profile' >
                            <AiOutlinePlus />
                        </div>
                        Thêm hợp đồng
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MiningContract