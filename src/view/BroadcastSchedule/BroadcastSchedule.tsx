import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiListPlus } from "react-icons/bi";
import './style.scss'
interface DataType {
    // STT: string
    Name: string
    timeStart: string
}
const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'STT',
        key: 'STT',
        align: 'center',
        render: (text, object, index) => <div> {index + 1}</div>

    },
    {
        title: 'Tên lịch phát',
        dataIndex: 'Name',
        key: 'Name',
    },
    {
        title: 'Thời gian phát',
        dataIndex: 'timeStart',
        key: 'timeStart',
    },
    {
        title: '',
        key: 'detail',
        dataIndex: 'detail',
        render: () => {
            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }} >Xem chi tiết</a>
            )

        }
    },
    {
        title: '',
        key: 'delete',
        dataIndex: 'delete',
        render: () => {
            return (
                <a style={{ color: '#FF7506', textDecoration: 'underline' }} >Xóa</a>
            )

        }
    }
]

var data: readonly any[] | undefined = []
const BroadcastSchedule = () => {
    return (
        <div className="sechedule__page">
            <div className="title__page">Danh sách lịch phát</div>
            <div className="content">
                <div className="content__table">
                    <Table columns={columns} dataSource={[
                        {

                            Name: "lịch phát tháng 1",
                            timeStart: " 12/01/2022-28/12/2022",
                        }

                    ]} />
                </div>
                <div className="actions__add__record">
                    <div className='action_edit' >
                        <div className='icon_action_profile' >
                            <BiListPlus />
                        </div>
                        Thêm lịch phát
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BroadcastSchedule