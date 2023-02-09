import { Select, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchContractMinings } from "../../../../redux/ContractMining/repository";
import { useAppDispatch, useAppSelector } from "../../../../shared/hook/reduxhook";
import './DetailReport.scss'
interface DataType {
    id?: string
    NumberContract: string
    UnitUsed: string
    DurationContract: string
    ContractType: string
    NumberDeviceAsyns: string
    SumPlay: number
    deadtime: string


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
        title: 'Số thiết bị đã đồng bộ',
        key: 'NumberDeviceAsyns',
        dataIndex: 'NumberDeviceAsyns'
    },
    {
        title: 'Tổng lượt phát',
        key: 'SumPlay',
        dataIndex: 'SumPlay'
    },
    {
        title: 'Ngày chốt đối soát',
        key: 'deadtime',
        dataIndex: 'deadtime'
    },
    {
        title: '',
        key: 'update',
        dataIndex: 'update',
        render: (_, { id }) => {


            return (
                <Link to={`/revenue/report-revenue/detail-report/detail-revenue/${id}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>Chi tiết doanh thu</Link>
            )
        }
    },
    {
        title: '',
        key: 'update',
        dataIndex: 'update',
        render: (_, { id }) => {


            return (
                <Link to={`/revenue/history-revenue/detail-revenue/${id}}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>Lịch sử đồng bộ trên thiết bị</Link>
            )
        }
    },
];
const DetailReport = () => {
    const dispatch = useAppDispatch()
    const contractMining = useAppSelector((state) => state.contractMining.ContractMinings)
    let dataRecord: DataType[] | any

    dataRecord = contractMining.map((item) => {
        return {
            id: item.id,
            NumberContract: item.NumberContract,
            UnitUsed: item.NameUnitUse,
            DurationContract: `${item.DayEffect} - ${item.DayExpire}`,
            ContractType: item.contractType,
            NumberDeviceAsyns: '3/8',
            SumPlay: 300000,
            deadtime: item.DayExpire
        }
    })
    useEffect(() => {
        dispatch(fetchContractMinings())
    }, [dispatch])
    return (
        <div className="detail__report__page">
            <div className="title__page">Doanh thu theo hợp đồng khai thác</div>
            <div className="action">
                <div className="action__name">Theo tháng:</div>
                <Select
                    defaultValue="Theo tháng"
                    style={{ width: 150 }}
                    //   onChange={handleChange}
                    options={[
                        {
                            value: 'Theo tháng',
                            label: 'Theo tháng',
                        },
                        {
                            value: 'Theo Ngày',
                            label: 'Theo Ngày',
                        },
                        {
                            value: 'Theo Tuần',
                            label: 'Theo Tuần',
                        }
                    ]}
                />

                <Select
                    defaultValue="6/2021"
                    style={{ width: 150 }}
                    //   onChange={handleChange}
                    options={[
                        {
                            value: '6/2021',
                            label: '6/2021',
                        },
                        {
                            value: '7/2021',
                            label: '7/2021',
                        },
                        {
                            value: '8/2021',
                            label: '8/2021',
                        }
                    ]}
                />
            </div>

            <div className="contaier">
                <div className='Table__list' style={{ marginTop: 30 }}>
                    <Table
                        columns={columns}
                        dataSource={dataRecord}

                    />
                </div>
            </div>
        </div>
    )
}

export default DetailReport