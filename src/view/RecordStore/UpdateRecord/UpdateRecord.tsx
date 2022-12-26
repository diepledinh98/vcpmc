import { Breadcrumb, Button, Col, Form, Input, Row, Select } from 'antd'
import React from 'react'
import { BsFileEarmarkMusic } from 'react-icons/bs'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import music from '../../../shared/images/music.png'
import './UpdateRecord.scss'
const UpdateRecord = () => {
    return (
        <div className='update__record__page'>
            <div className="breadcumb">
                <Breadcrumb separator=">">

                    <Breadcrumb.Item>
                        <a href="">Kho bản ghi</a>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item>Cập nhật thông tin</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='title__record'>
                Bản ghi - Mất em
            </div>

            <div className='content'>
                <div className='record__left'>
                    <div className='record_info'>
                        <div className='title_info'>
                            Thông tin bản ghi
                        </div>
                        <div className='record_info_music'>
                            <img src={music} alt='' className='record__img' />
                            <div className='music__name'>
                                <BsFileEarmarkMusic className='record_icon' />
                                Matern.mp3</div>
                        </div>
                        <Row>
                            <Col span={12} className="info_name">
                                Ngày thêm:
                            </Col>
                            <Col span={12} className="info_value">
                                07/04/2021 - 17:45:30
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Người tải lên:
                            </Col>
                            <Col span={12} className="info_value">
                                Super Admin
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12} className="info_name">
                                Người duyệt:
                            </Col>
                            <Col span={12} className="info_value">
                                Hệ thống <br />
                                (Tự động phê duyệt)
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Ngày phê duyệt:
                            </Col>
                            <Col span={12} className="info_value">
                                07/04/2021 - 17:45:50
                            </Col>
                        </Row>
                    </div>
                    <div className='record_authority'>
                        <div className='title_info'>
                            Thông tin ủy quyền
                        </div>
                        <Row>
                            <Col span={12} className="info_name">
                                Số hợp đồng:
                            </Col>
                            <Col span={12} className="info_value">
                                BH123
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Ngày nhận ủy quyền:
                            </Col>
                            <Col span={12} className="info_value">
                                01/05/2021
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Ngày hết hạn:
                            </Col>
                            <Col span={12} className="info_value">
                                01/08/2025
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="info_name">
                                Trạng thái:
                            </Col>
                            <Col span={12} className="info_value" >
                                <div className='list_tag_time'>
                                    <div className='tag__cicrle' />
                                    Còn thời hạn
                                </div>

                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='record_right'>
                    <div className='title_info' style={{ marginBottom: 20 }}>
                        Chỉnh sửa thông tin
                    </div>

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        {/* <Form.Item
                        label="Tên đăng nhập"
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                    >
                        <h3>Tên đăng nhập</h3>
                        <Input className='username-input' />
                    </Form.Item> */}
                        <h3 >Tên bản ghi: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Tên đăng nhập"
                            name="username"
                            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                        >
                            <Input className='username-input' defaultValue="Mất em" />
                        </Form.Item>
                        <h3 >Mã ISRC: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập password!' }]}
                        >

                            <Input className='username-input' defaultValue='KRA40105463' />
                        </Form.Item>
                        {/* {error && <div className='error__message'>{error}</div>} */}
                        <h3 >Ca sĩ: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập password!' }]}
                        >

                            <Input className='username-input' defaultValue='Noo Phước Thịnh' />
                        </Form.Item>
                        <h3 >Tác giả: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập password!' }]}
                        >

                            <Input className='username-input' defaultValue='Chu bin' />
                        </Form.Item>
                        <h3 >Nhà sản xuất: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập password!' }]}
                        >

                            <Input className='username-input' defaultValue='Nguyễn Nam Minh Thụy' />
                        </Form.Item>


                        <h3 >Thể Loại: <span style={{ color: 'red' }}>*</span></h3>
                        <Form.Item
                            // label="Password"
                            // name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập password!' }]}
                        >

                            <Select
                                defaultValue="All"
                                style={{ width: 490 }}
                                //   onChange={handleChange}

                                options={[
                                    {
                                        value: 'All',
                                        label: 'Tất cả',
                                    },
                                    {
                                        value: 'pop',
                                        label: 'Pop',
                                    },
                                    {
                                        value: 'edm',
                                        label: 'EDM',
                                    },
                                    {
                                        value: 'ballad',
                                        label: 'Ballad',
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Form>
                </div>



            </div>
            <div className='list__btn' >
                <Link to='/'>

                    <Button className='btn__cancel' >
                        Hủy
                    </Button>
                </Link>

                <Button htmlType="submit" className='btn__save'>
                    Lưu
                </Button>
            </div>
        </div>
    )
}

export default UpdateRecord