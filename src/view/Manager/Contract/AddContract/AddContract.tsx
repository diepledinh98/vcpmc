import { Button, Col, DatePicker, Form, Input, Radio, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";
import './AddContract.scss'
const AddContract = () => {
    return (
        <div className="add__contract__page">
            <div className="title__page">Thêm hợp đồng ủy quyền mới</div>
            <div className="content">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    labelAlign="left"
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    //   onFinish={onFinish}
                    //   onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row>
                        <Col span={8}>
                            <Form.Item
                                label="Số hợp đồng"
                                name="numberContract"
                                rules={[{ required: true, message: 'Vui lòng nhập số hợp đồng!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Tên hợp đồng"
                                name="nameContract"
                                rules={[{ required: true, message: 'Vui lòng nhập tên hợp đồng!!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Ngày hiệu lực"
                                name="EffectDate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày hiệu lực!' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />} />
                            </Form.Item>

                            <Form.Item
                                label="Ngày hết hạn"
                                name="expirationDate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày hết hạn!' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />} />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <div className="attach__file">
                                <p>Tệp đính kèm:</p>
                                <input type="file" className="add_image" id="customFile" />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="profit">
                                <div className="profit__title">
                                    <BsExclamationCircle style={{ marginRight: 10 }} />
                                    Mức nhuận bút
                                </div>

                                <div className="content__profit">
                                    Quyền tác giả:
                                    <p>0%</p>
                                </div>
                                <div className="content__profit">
                                    Quyền liên quan:
                                    <p>0%</p>
                                </div>
                                <div className="content__profit__relationship">
                                    Quyền của người biểu diễn:
                                    <p>50%</p>
                                </div>
                                <div className="content__profit__relationship">
                                    Quyền của nhà sản xuất:<br /> (Bản ghi/video)
                                    <p>50%</p>
                                </div>

                            </div>
                        </Col>
                    </Row>


                    <div className="info__auhtorize__person">Thông tin pháp nhân ủy quyền</div>
                    <Row>
                        <Col span={8}>
                            <Form.Item
                                label="Pháp nhân ủy quyền"
                                name="radio"
                                rules={[{ required: true, message: 'Vui lòng chọn pháp nhân ủy quyền!' }]}
                            >
                                <Radio.Group value={1} style={{ marginLeft: 30 }}>
                                    <Radio value={1}>Cá nhân</Radio>
                                    <Radio value={2}>Tổ chức</Radio>

                                </Radio.Group>

                            </Form.Item>

                            <Form.Item
                                label="Tên người ủy quyền:"
                                name="name__authorize"
                                rules={[{ required: true, message: 'Vui lòng nhập tên người ủy quyền!' }]}
                            >
                                <Input />

                            </Form.Item>

                            <Form.Item
                                label="Giới tính:"
                                name="sex"
                                rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
                            >
                                <Radio.Group value={1} style={{ marginLeft: 30 }}>
                                    <Radio value={1}>Nam</Radio>
                                    <Radio value={2}>Nữ</Radio>

                                </Radio.Group>

                            </Form.Item>

                            <Form.Item
                                label="Ngày sinh"
                                name="Birthdate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />} />
                            </Form.Item>

                            <Form.Item
                                label="Quốc tịch:"
                                name="national"
                                rules={[{ required: true, message: 'Vui lòng nhập quốc tịch!' }]}
                            >
                                <Input />

                            </Form.Item>
                            <Form.Item
                                label="Số điện thoại:"
                                name="phone"
                                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                            >
                                <Input />

                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="CMND/CCCD:"
                                name="cmnd"
                                rules={[{ required: true, message: 'Vui lòng nhập CMND/CCCD!' }]}
                            >
                                <Input />

                            </Form.Item>

                            <Form.Item
                                label="Ngày cấp"
                                name="providedate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày cấp' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />} />
                            </Form.Item>

                            <Form.Item
                                label="Nơi cấp:"
                                name="where"
                                rules={[{ required: true, message: 'Vui lòng nhập nơi cấp!' }]}
                            >
                                <Input />

                            </Form.Item>
                            <Form.Item
                                label="Mã số thuế:"
                                name="taxcode"
                                rules={[{ required: true, message: 'Vui lòng nhập mã số thuế!' }]}
                            >
                                <Input />

                            </Form.Item>

                            <Form.Item
                                label="Nơi cư chứ:"
                                name="place"
                                rules={[{ required: true, message: 'Vui lòng nhập mã nơi cư chú!' }]}
                            >
                                <TextArea rows={4} style={{ height: 90 }} />

                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="Email:"
                                name="email"
                                rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}
                            >
                                <Input />

                            </Form.Item>
                            <Form.Item
                                label="Tên đăng nhập:"
                                name="username"
                                rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                            >
                                <Input />

                            </Form.Item>
                            <Form.Item
                                label="Mật khẩu:"
                                name="password"
                                rules={[{ required: true, message: 'Vui lòng nhập nhập khẩu!' }]}
                            >
                                <Input />

                            </Form.Item>
                            <Form.Item
                                label="Số tài khoản:"
                                name="account"
                                rules={[{ required: true, message: 'Vui lòng nhập số tài khoản!' }]}
                            >
                                <Input />

                            </Form.Item>
                            <Form.Item
                                label="Ngân hàng:"
                                name="bank"
                                rules={[{ required: true, message: 'Vui lòng nhập tên ngân hàng!' }]}
                            >
                                <Input />

                            </Form.Item>
                        </Col>
                    </Row>



                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <div className="btn_group">
                            <Button className='btn__cancel' >
                                Hủy
                            </Button>
                            <Button htmlType="submit" className='btn__save'>
                                Lưu
                            </Button>
                        </div>

                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default AddContract