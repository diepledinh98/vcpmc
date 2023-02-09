import { DatePicker, Select } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import React from "react";
import { VscCalendar } from "react-icons/vsc";
import { Link } from "react-router-dom";
import SearchConponent from "../../../shared/components/SearchComponent/SearchComponent";
import { useAppDispatch, useAppSelector } from "../../../shared/hook/reduxhook";
import './Distribute.scss'
interface DataType {
    id?: string
    NumberContract: string
    NamePerson: string
    NumberRecord: number
    Revenue: string
    Fee: string
    royalties: string
    deadline: string
}

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'STT',
        key: 'STT',
        render: (text, object, index) => <div> {index + 1}</div>

    },
    {
        title: 'Hợp đồng ủy quyền',
        dataIndex: 'NumberContract',
        key: 'NumberContract',
    },
    {
        title: 'Người ủy quyền',
        dataIndex: 'NamePerson',
        key: 'NamePerson',

    },
    {
        title: 'Số bài hát ủy quyền',
        key: 'NumberRecord',
        dataIndex: 'NumberRecord',


    },
    {
        title: 'Doanh thu (VNĐ)',
        key: 'Revenue',
        dataIndex: 'Revenue'
    },
    {
        title: 'Tổng doanh thu',
        key: 'SumRevenue',
        dataIndex: 'SumRevenue'
    }
    ,
    {
        title: 'Hành chính phí (VNĐ)',
        key: 'Fee',
        dataIndex: 'Fee'
    }
    ,
    {
        title: 'Mức nhuận bút (VNĐ)',
        key: 'royalties',
        dataIndex: 'royalties'
    }
    ,
    {
        title: 'Ngày chốt đối soát',
        key: 'deadline',
        dataIndex: 'deadline'
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
const Distribute = () => {
    const dispatch = useAppDispatch()
    const contractMining = useAppSelector((state) => state.ContractAuthorized.ListContractAuthorized)
    let dataRecord: DataType[] | any
    dataRecord = contractMining.map((item) => {
        return {
            id: item.id,
            NumberContract: item.NumberContract,
            NamePerson: item.NamePersonAuthorized,
            NumberRecord: '2',
            Revenue: '365.000.000',
            Fee: '365.000.000',
            royalties: '365.000.000',
            deadline: item.DayExpire
        }
    })
    return (
        <div className="distrisbute__revenue__page">
            <div className="title__page">Quản lý phân phối doanh thu</div>
            <div className="actions">
                <div className="select">
                    <div className="action__name">Theo tháng:</div>
                    <DatePicker suffixIcon={<VscCalendar />}

                    />
                </div>
                <div className="search">
                    <SearchConponent placeholder="Tên bản ghi,ca sĩ..." />
                </div>
                <div className="title__Name">Danh sách hợp đồng ủy quyền</div>

            </div>
            <div className="container">
                <div className="content">
                    <div className='Table__list' >
                        <Table
                            columns={columns}
                            dataSource={dataRecord}
                        />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Distribute