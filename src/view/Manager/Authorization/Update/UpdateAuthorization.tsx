import { Button, Col, Form, Input, Radio, Row, Select } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Iauthorization } from '../../../../redux/Authorization/interface'
import { updateAuthorization } from '../../../../redux/Authorization/repository'
import { useAppDispatch, useAppSelector } from '../../../../shared/hook/reduxhook'
import './style.scss'
const UpdateAuthorization = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const idd = useParams()

    let id: any = idd.id
    const Authorizations: Array<any> | undefined = useAppSelector((state) => {
        return state.Authorization.Authorizations
    });
    const authorization: Iauthorization = Authorizations?.find((value) => value.id == id);

    const [formData, setFormData] = useState({
        Name: authorization.Name,
        username: authorization.username,
        email: authorization.email,
        password: authorization.password,
        role: authorization.role,
        expire: authorization.expire,
        phone: authorization.phone,
        status: authorization.status
    });

    const setSelectedItems = (value: string) => {
        setFormData((prev) => ({ ...prev, role: value }))
    }
    const onFinish = () => {
        const body = formData
        dispatch(updateAuthorization({ id, body }))
        navigate('/manager/Authorization-unit')
    }
    return (
        <div className='update_page'>
            <div className="title__page">Cập nhật thông tin</div>

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

                            <Input
                                style={{ width: 286 }}
                                className='username-input'
                                defaultValue={formData.Name}
                                onChange={(event => setFormData((prev) => ({ ...prev, Name: event.target.value })))} />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập Email!!' }]}
                        >
                            <Input style={{ width: 176 }}
                                className='username-input'
                                defaultValue={formData.email}
                                onChange={(event => setFormData((prev) => ({ ...prev, email: event.target.value })))} />
                        </Form.Item>
                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!!' }]}
                        >
                            <Input style={{ width: 176 }}
                                className='username-input'
                                defaultValue={formData.phone}
                                onChange={(event => setFormData((prev) => ({ ...prev, phone: event.target.value })))} />
                        </Form.Item>

                        <Form.Item
                            label="Vai trò"
                            name="role"
                            rules={[{ required: true, message: 'Vui lòng chọn vai trò!!' }]}
                        >
                            <Select

                                style={{ width: 176, borderColor: '#727288' }}
                                //   onChange={handleChange}
                                defaultValue={authorization.role}
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

                            <Input style={{ width: 286 }}
                                className='username-input'
                                defaultValue={formData.username}
                                onChange={(event => setFormData((prev) => ({ ...prev, username: event.target.value })))}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                        >
                            <Input.Password style={{ width: 286 }}
                                defaultValue={formData.password}
                                onChange={(event => setFormData((prev) => ({ ...prev, password: event.target.value })))}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Nhập lại mật khẩu"
                            name="nameContract"
                            rules={[{ required: true, message: 'Vui lòng nhập nhập lại mật khẩu!!' }]}
                        >
                            <Input.Password style={{ width: 286 }} defaultValue={authorization.password} />
                        </Form.Item>


                        <Form.Item
                            label="Trạng thái"
                            name="status"
                            rules={[{ required: true, message: 'Vui lòng chọn trạng thái!!' }]}
                        >
                            <Radio.Group className="check__status" defaultValue={formData.status}
                                onChange={(event => setFormData((prev) => ({ ...prev, status: event.target.value })))}>
                                <Radio value={true}>Đã kích hoạt</Radio>
                                <Radio value={false}>Ngưng kích hoạt</Radio>
                            </Radio.Group>
                        </Form.Item>

                    </Col>
                </Row>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <div className='list_btn'>
                        <Link to='/manager/Authorization-unit'>

                            <Button className='btn__cancel'>
                                Hủy
                            </Button>
                        </Link>
                        <Button type="primary" htmlType="submit" className='btn__save' onClick={onFinish}>
                            Lưu
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateAuthorization