import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import moment from 'moment'
import React, { useState } from 'react'
import { VscCalendar } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import { IDevice } from '../../../../redux/Device/interface'
import { createdevice } from '../../../../redux/Device/repository'
import { useAppDispatch } from '../../../../shared/hook/reduxhook'
const Adddvice = () => {
    const naviagte = useNavigate()
    const dispatch = useAppDispatch()
    const [formData, setFormData] = useState({

        NameDevice: "",
        SKU: "",
        MAC: "",
        time: "",
        label: "",
        infomation: "",
        note: "",
        username: "",
        password: "",
        location: "",
    });
    const handleChangeInfo = (event: string) => {
        setFormData((prev) => ({ ...prev, infomation: event }))
    }
    const handleChangeLabel = (event: string) => {
        setFormData((prev) => ({ ...prev, label: event }))
    }
    const handleAddDevice = () => {
        const body: IDevice = formData
        dispatch(createdevice(formData))
        naviagte('/manager/device')
    }
    return (
        <div className='add__user__page'>
            <div className="title__page">Thêm thiết bị mới</div>
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
                            label="Tên thiết bị"
                            name="namedevice"
                            rules={[{ required: true, message: 'Vui lòng nhập tên thiết bị!' }]}
                        >

                            <Input style={{ width: 286 }} onChange={(event => setFormData((prev) => ({ ...prev, NameDevice: event.target.value })))} />
                        </Form.Item>

                        <Form.Item
                            label="SKU/ID"
                            name="SKU/ID"
                            rules={[{ required: true, message: 'Vui lòng nhập SKU/ID!' }]}
                        >
                            <Input style={{ width: 286 }} onChange={(event => setFormData((prev) => ({ ...prev, SKU: event.target.value })))} />
                        </Form.Item>

                        <Form.Item
                            label="Địa chỉ MAC"
                            name="MAC"
                            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ MAC!!' }]}
                        >
                            <Input style={{ width: 286 }} onChange={(event => setFormData((prev) => ({ ...prev, MAC: event.target.value })))} />
                        </Form.Item>

                        <Form.Item
                            label="Thời hạn bảo hành"
                            name="EffectDate"
                            rules={[{ required: true, message: 'Vui lòng chọn ngày hiệu lực!' }]}
                        >

                            <DatePicker suffixIcon={<VscCalendar />}
                                onChange={(date: any) => setFormData((prev) => ({ ...prev, time: moment(date).format('DD/MM/YYYY') }))}
                            />
                        </Form.Item>
                        <Form.Item
                            label='Label'
                            name="Label"
                            rules={[{ required: true, message: 'Vui lòng chọn Label!' }]}
                        >
                            <Select
                                onChange={handleChangeLabel}
                                style={{ width: 286, borderColor: '#727288' }}


                                options={[
                                    {
                                        value: 'Device 12345',
                                        label: 'Device 12345',
                                    },
                                    {
                                        value: 'Device 32145',
                                        label: 'Device 32145',
                                    },
                                    {
                                        value: 'Device 32146',
                                        label: 'Device 32146',
                                    },
                                    {
                                        value: 'Device 32147',
                                        label: 'Device 32147',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item
                            label='Thông tin'
                            name="infomation"
                            rules={[{ required: true, message: 'Vui lòng chọn thông tin!' }]}
                        >
                            <Select

                                style={{ width: 286, borderColor: '#727288' }}
                                onChange={handleChangeInfo}

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
                        <Form.Item
                            label="Ghi chú:"
                            name="note"

                        >
                            <TextArea rows={4} style={{ width: 286, maxWidth: 'none' }}
                                onChange={(event => setFormData((prev) => ({ ...prev, note: event.target.value })))}
                            />

                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ marginLeft: 200 }} >
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
                        <Form.Item
                            label="Vị trí"
                            name="place"
                            rules={[{ required: true, message: 'Vui lòng nhập vị trí!' }]}
                        >
                            <Input style={{ width: 286 }} onChange={(event => setFormData((prev) => ({ ...prev, location: event.target.value })))} />
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
                        <Button type="primary" htmlType="submit" className='btn__save' onClick={handleAddDevice}>
                            Lưu
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Adddvice