import React from 'react'
import './UpdateProfile.scss'
import avatar from '../../../shared/images/avatar.png'
import { VscCalendar, VscDeviceCamera } from 'react-icons/vsc'
import { BsCamera, BsCheckCircle } from 'react-icons/bs'
import { Button, Col, DatePicker, Form, Input, Row } from 'antd'
import { FiEdit, FiLock, FiLogOut } from 'react-icons/fi'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Link } from 'react-router-dom'
const UpdateProfile = () => {
    dayjs.extend(customParseFormat);
    const dateFormat = 'DD/MM/YYYY';
    return (
        <div className='edit__profile__page'>
            <div className='main_title'>Thông tin cơ bản</div>

            <div className='profile__content'>
                <div className='profile__info'>
                    <div className='profile__info-user'>
                        <img src={avatar} alt='' className='profile__avatar' />
                        <BsCamera className='profile__camera' />
                        <h3 className='profile__name'>Tuyết Nguyễn</h3>
                    </div>
                    <div className='profile__form'>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            className='login-form'


                        >
                            <Row >
                                <Col span={12}>
                                    <Form.Item
                                        // label="Tên đăng nhập"
                                        name="username"
                                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                                    >
                                        <h3>Họ:</h3>
                                        <Input style={{ width: 196 }} value='Nguyễn' />
                                    </Form.Item>
                                </Col>
                                <Col span={12} >
                                    <Form.Item
                                        // label="Tên đăng nhập"
                                        name="username"
                                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                                    >
                                        <h3>Tên:</h3>
                                        <Input style={{ width: 196 }} value='Tuyết' />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row >
                                <Col span={12}>
                                    <Form.Item
                                        // label="Tên đăng nhập"
                                        name="username"
                                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                                    >
                                        <h3>Ngày sinh:</h3>
                                        <DatePicker suffixIcon={<VscCalendar />} defaultValue={dayjs('02/02/1998', dateFormat)} format={dateFormat} />
                                    </Form.Item>
                                </Col>
                                <Col span={12} >
                                    <Form.Item
                                        // label="Tên đăng nhập"
                                        name="username"
                                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                                    >
                                        <h3>Số điện thoại:</h3>
                                        <Input style={{ width: 196 }} value='+84 250 123 151' />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row >
                                <Col span={24}>
                                    <Form.Item
                                        // label="Tên đăng nhập"
                                        name="username"
                                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                                    >
                                        <h3>Email:</h3>
                                        <Input style={{ width: 406, background: ' #3E3E50', color: '#878891' }} value='tuyetnguyenngoc@alta.com.vn' disabled />
                                    </Form.Item>
                                </Col>

                            </Row>
                            <Row >
                                <Col span={24}>
                                    <Form.Item
                                        // label="Tên đăng nhập"
                                        name="username"
                                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                                    >
                                        <h3>Tên đăng nhập:</h3>
                                        <Input style={{ width: 406, background: ' #3E3E50', color: '#878891' }} value='tuyetnguyenngoc@alta.com.vn' disabled />
                                    </Form.Item>
                                </Col>

                            </Row>
                            <Row >
                                <Col span={24}>
                                    <Form.Item
                                        // label="Tên đăng nhập"
                                        name="username"
                                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                                    >
                                        <h3>Phân quyền:</h3>
                                        <Input style={{ width: 196, background: ' #3E3E50', color: '#878891' }} value='Admin' disabled />
                                    </Form.Item>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <Link to='/profile'>

                                            <Button className='btn__cancel' >
                                                Hủy
                                            </Button>
                                        </Link>
                                    </Form.Item>
                                </Col>

                                <Col >
                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <Button htmlType="submit" className='btn__save'>
                                            Lưu
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default UpdateProfile