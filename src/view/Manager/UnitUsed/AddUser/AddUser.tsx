import { Button, Col, Form, Input, Row, Select } from 'antd'
import { log } from 'console'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './AddUser.scss'
const AddUser = () => {
    const { id } = useParams()
    const [formData, setFormData] = useState({
        Name: "",
        username: "",
        email: "",
        password: "",
        role: "",
        expire: "",
        phone: "",
        status: "",
    });

    const setSelectedItems = (value: string) => {
        setFormData((prev) => ({ ...prev, role: value }))
    }

    const handleAddUser = () => {

    }
    return (
        <div className='add__user__page'>
            <div className="title__page">Thêm người dùng</div>
            <Form
                name="basic"
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                labelAlign='left'
                // initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Row >
                    <Col span={12} >
                        <Form.Item
                            label="Tên người dùng"
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}
                        >

                            <Input style={{ width: 286 }} onChange={(event => setFormData((prev) => ({ ...prev, Name: event.target.value })))} />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập Email!!' }]}
                        >
                            <Input style={{ width: 176 }} onChange={(event => setFormData((prev) => ({ ...prev, email: event.target.value })))} />
                        </Form.Item>


                        <Form.Item
                            label="Vai trò"
                            name="role"
                            rules={[{ required: true, message: 'Vui lòng chọn vai trò!!' }]}
                        >
                            <Select

                                style={{ width: 176, borderColor: '#727288' }}
                                //   onChange={handleChange}
                                onChange={setSelectedItems}
                                options={[
                                    {
                                        value: 'QA',
                                        label: 'QA',
                                    },
                                    {
                                        value: 'SuperAdmin',
                                        label: 'Super Admin',
                                    },
                                    {
                                        value: 'GroupAdmin',
                                        label: 'Group Admin',
                                    },
                                    {
                                        value: 'Subuser',
                                        label: 'Sub-user',
                                    },
                                ]}
                            />
                        </Form.Item>

                    </Col>
                    <Col span={12} style={{ marginLeft: 160 }} >
                        <Form.Item
                            label="Tên đăng nhập"
                            name="username"
                            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                        >

                            <Input style={{ width: 286 }} onChange={(event => setFormData((prev) => ({ ...prev, username: event.target.value })))} />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                        >
                            <Input.Password style={{ width: 286 }} onChange={(event => setFormData((prev) => ({ ...prev, password: event.target.value })))} />
                        </Form.Item>
                        <Form.Item
                            label="Nhập lại mật khẩu"
                            name="nameContract"
                            rules={[{ required: true, message: 'Vui lòng nhập nhập lại mật khẩu!!' }]}
                        >
                            <Input.Password style={{ width: 286 }} />
                        </Form.Item>


                        {/* <Form.Item
                            label="Trạng thái"
                            name="status"
                            rules={[{ required: true, message: 'Vui lòng chọn trạng thái!!' }]}
                        >
                            <Radio.Group className="check__status">
                                <Radio value={1}>Đã kích hoạt</Radio>
                                <Radio value={2}>Ngưng kích hoạt</Radio>
                            </Radio.Group>
                        </Form.Item> */}

                    </Col>
                </Row>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <div className='list_btn'>

                        <Button className='btn__cancel'>
                            Hủy
                        </Button>
                        <Button type="primary" htmlType="submit" className='btn__save' onClick={handleAddUser}>
                            Lưu
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddUser