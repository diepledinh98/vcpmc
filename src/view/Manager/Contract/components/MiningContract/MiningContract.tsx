import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import SearchConponent from '../../../../../shared/components/SearchComponent/SearchComponent'
import { useAppDispatch, useAppSelector } from '../../../../../shared/hook/reduxhook'
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
    const dispatch = useAppDispatch()
    const contractMinings = useAppSelector((state) => state.contractMining.ContractMinings)
    let dataRecord: DataType[] | any;
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [onVideo, setOnVideo] = useState('')
    dataRecord = contractMinings.map((item, index) => {
        return {
            id: item.id,
            NumberContract: item.NameContract,
            Customer: item.NameUnitUse,
            expirationDate: item.DayExpire,
            createAtEffect: item.DayEffect,
            createAt: item.DayEffect,
            EffectContract: "Còn hiệu lực"

        }
    })
    return (
        <div className='authorize__contract__page'>

            <div className="list_actions">


                <SearchConponent placeholder="Tên hợp đồng,số hợp đồng,người ủy quyền..." />
            </div>
            <div className='content'>
                <div className='content__table'>
                    <Table columns={columns} dataSource={dataRecord} />
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