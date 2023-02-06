
import { Col, Row } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import React from "react";
import { useParams } from "react-router-dom";
import { IContractMining } from "../../../../redux/ContractMining/interface";
import { useAppSelector } from "../../../../shared/hook/reduxhook";
import './DetailHisotry.scss'
interface DataType {
    id?: string
    NameSinger: string
    Sumplay: string
    SumRevenue: string
    PerformanceRights: string
    produceRight: string
    VCPMC: string
}
const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'STT',
        key: 'STT',
        render: (text, object, index) => <div> {index + 1}</div>

    },
    {
        title: 'Tên bài hát',
        dataIndex: 'NameSinger',
        key: 'NameSinger',
    },
    {
        title: 'Tổng số lượt phát',
        dataIndex: 'Sumplay',
        key: 'Sumplay',

    },
    {
        title: 'Tổng doanh thu',
        key: 'SumRevenue',
        dataIndex: 'SumRevenue',


    },
    {
        title: 'Quyền biểu diễn',
        key: 'PerformanceRights',
        dataIndex: 'PerformanceRights'
    },
    {
        title: 'Quyền sản xuất',
        key: 'produceRight',
        dataIndex: 'produceRight'
    },
    {
        title: 'VCPMC',
        key: 'VCPMC',
        dataIndex: 'VCPMC'
    }

];
const DetailHisotry = () => {
    const { id } = useParams()
    const ContractMinings: Array<any> | undefined = useAppSelector((state) => {
        return state.contractMining.ContractMinings
    });
    const contractMining: IContractMining = ContractMinings?.find((value) => value.id == id);
    return (
        <div className="history__page">
            <div className="title__page">Doanh thu theo hợp đồng - HĐ123 - Kỳ Tháng 03/2021</div>
            <div className="container">
                <div className="content">
                    <div className="content__left">
                        <div className="box_first">
                            <div className="title_box">Thông tin hợp đồng</div>
                            <Row>
                                <Col span={16} className="content_name">Số hợp đồng:</Col>
                                <Col span={8} className="content_value">HĐ123</Col>
                                <Col span={16} className="content_name">Đơn vị khai thác:</Col>
                                <Col span={8} className="content_value">Cty ABC</Col>
                                <Col span={16} className="content_name">Loại hợp đồng:</Col>
                                <Col span={8} className="content_value">Trọn gói</Col>
                                <Col span={16} className="content_name">Hiệu lực từ:</Col>
                                <Col span={8} className="content_value">01/01/2021</Col>
                                <Col span={16} className="content_name">Ngày hết hạn:</Col>
                                <Col span={8} className="content_value">Trọn gói</Col>
                                <Col span={16} className="content_name">Giá trị hợp đồng:</Col>
                                <Col span={8} className="content_value">Trọn gói</Col>
                                <Col span={16} className="content_name">Giá trị phân phối theo ngày:</Col>
                                <Col span={8} className="content_value">Trọn gói</Col>
                            </Row>
                        </div>
                        <div className="box_second">
                            <div className="title_box">Thông tin đối soát</div>
                            <Row>
                                <Col span={16} className="content_name">Ký đối soát:</Col>
                                <Col span={8} className="content_value">01/01/2021</Col>
                                <Col span={16} className="content_name">Số bài hát:</Col>
                                <Col span={8} className="content_value">2</Col>
                                <Col span={16} className="content_name">Tổng số lượt phát:</Col>
                                <Col span={8} className="content_value">200.000 lượt</Col>
                                <Col span={16} className="content_name">Tổng doanh thu:</Col>
                                <Col span={8} className="content_value">300.000.000 VNĐ</Col>
                                <Col span={16} className="content_name">Doanh thu chưa phân phối:</Col>
                                <Col span={8} className="content_value">1.000.000 VNĐ</Col>
                                <Col span={16} className="content_name">Trạng thái đối soát:</Col>
                                <Col span={8} className="content_value">Chưa đối soát</Col>

                            </Row>
                        </div>
                    </div>
                    <div className="content__right">
                        <div className="title_right">Danh sách bản ghi</div>
                        <div className='Table__list' style={{ marginTop: 30 }}>
                            <Table
                                columns={columns}
                                dataSource={[
                                    {
                                        NameSinger: "Let Us Be",
                                        Sumplay: "365",
                                        SumRevenue: "365.000.000",
                                        PerformanceRights: "36.266",
                                        produceRight: "36.266",
                                        VCPMC: "36.200",
                                    }
                                ]}

                            />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailHisotry