import { Col, Row } from "antd";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import './DetailUser.scss'
const DetailUser = () => {
    return (
        <div className="detail__user__page">
            <div className="title__page">Thông tin người dùng</div>
            <div className="container" style={{ marginTop: 30, display: 'flex' }}>
                <div className="content">
                    <Row>
                        <Col span={8}>
                            <Row>
                                <Col span={8}>
                                    <div className="title">
                                        Tên người dùng:
                                    </div>
                                </Col>
                                <Col span={8} offset={1}>
                                    <div className="value">
                                        Nguyễn Văn A
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={8} offset={3}>
                            <Row>
                                <Col span={8}>
                                    <div className="title">
                                        Tên đăng nhập:
                                    </div>
                                </Col>
                                <Col span={8} offset={1}>
                                    <div className="value">
                                        nguyenvana@gmail.com
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Row>
                                <Col span={8}>
                                    <div className="title">
                                        Vai trò:
                                    </div>
                                </Col>
                                <Col span={8} offset={1}>
                                    <div className="value">
                                        QA
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={8} offset={3}>
                            <Row>
                                <Col span={8}>
                                    <div className="title">
                                        Mật khẩu:
                                    </div>
                                </Col>
                                <Col span={8} offset={1}>
                                    <div className="value">
                                        *********
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Row>
                                <Col span={8}>
                                    <div className="title">
                                        Email:
                                    </div>
                                </Col>
                                <Col span={8} offset={1}>
                                    <div className="value">
                                        nguyenvana@gmail.com
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={8} offset={3}>
                            <Row>
                                <Col span={8}>
                                    <div className="title">
                                        Trạng thái thiết bị:
                                    </div>
                                </Col>
                                <Col span={8} offset={1}>
                                    <div className="value">
                                        Đã kích hoạt
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className='profile__action' style={{ height: 110, marginLeft: 40 }}>
                    <Link to='/manager/Unit-used/detail-user/update-user/sdfdfsfs' className='action_edit'>
                        <div className='icon_action_profile' >
                            <FiEdit />
                        </div>
                        Chỉnh sửa
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default DetailUser