
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { fetchContractMinings } from "../../../redux/ContractMining/repository";
import { useAppDispatch, useAppSelector } from "../../../shared/hook/reduxhook";
interface DataType {
    id?: string
    NumberContract: string
    UnitUsed: string
    DurationContract: string
    ContractType: string
    SumPlay: string
    SumRevenue: string
    RevenueUnDistribute: string
    Deadline: string
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
        title: 'Đơn vị khai thác',
        dataIndex: 'UnitUsed',
        key: 'UnitUsed',

    },
    {
        title: 'Thời hạn hợp đồng',
        key: 'DurationContract',
        dataIndex: 'DurationContract',


    },
    {
        title: 'Loại hợp đồng',
        key: 'ContractType',
        dataIndex: 'ContractType'
    },
    {
        title: 'Tổng lượt phát',
        key: 'SumPlay',
        dataIndex: 'SumPlay'
    },
    {
        title: 'Tổng doanh thu',
        key: 'SumRevenue',
        dataIndex: 'SumRevenue'
    }
    ,
    {
        title: 'Doanh thu chưa phân phối',
        key: 'RevenueUnDistribute',
        dataIndex: 'RevenueUnDistribute'
    }
    ,
    {
        title: 'Ngày chốt đối soát',
        key: 'Deadline',
        dataIndex: 'Deadline'
    },
    {
        title: '',
        key: 'update',
        dataIndex: 'update',
        render: (_, { id }) => {


            return (
                <Link to={`/revenue/history-revenue/detail-revenue/${id}}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>Xem chi tiết</Link>
            )
        }
    },
];
const History = () => {
    const dispatch = useAppDispatch()
    const contractMining = useAppSelector((state) => state.contractMining.ContractMinings)
    let dataRecord: DataType[] | any

    dataRecord = contractMining.map((item) => {
        return {
            id: item.id,
            NumberContract: item.NameContract,
            UnitUsed: item.NameUnitUse,
            DurationContract: `${item.DayEffect} - ${item.DayExpire}`,
            ContractType: item.contractType,
            SumPlay: '365',
            SumRevenue: '2.000.000',
            RevenueUnDistribute: '0',
            Deadline: item.DayExpire
        }
    })
    useEffect(() => {
        dispatch(fetchContractMinings())
    }, [dispatch])
    return (
        <div className="histoy__page">
            <div className="title__page">Lịch sử đối phát doanh thu</div>

            <div className="content" style={{ display: 'flex', justifyContent: 'space-between' }}>

                <div className='Table__list' style={{ marginTop: 30 }}>
                    <Table
                        columns={columns}
                        dataSource={dataRecord}

                    />


                </div>
                <div className='profile__action' style={{ height: 110 }}>
                    <Link to='/manager/device/add-device' className='action_edit'>
                        <div className='icon_action_profile' >
                            <FiEdit />
                        </div>
                        Xuất File
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default History