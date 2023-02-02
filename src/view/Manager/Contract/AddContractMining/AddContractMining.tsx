import { Button, Col, DatePicker, Form, Input, Radio, Row, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";
import React, { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { IContractMining } from "../../../../redux/ContractMining/interface";
import { createContractMining } from "../../../../redux/ContractMining/repository";
import { useAppDispatch } from "../../../../shared/hook/reduxhook";
import './style.scss'
const AddContractMining = () => {
    const naviagte = useNavigate()
    const dispatch = useAppDispatch()
    const [date, setDate] = useState('')
    const [formData, setFormData] = useState({
        NumberContract: "",
        NameContract: "",
        DayEffect: "",
        DayExpire: "",
        NameUnitUse: "",
        NameRepresentative: "",
        position: "",
        contractType: "",
        sex: "",
        Birthday: "",
        nationality: "",
        phone: "",
        CMND: "",
        DayProviderCMND: "",
        PlaceProviderCMND: "",
        TaxCode: "",
        Place: "",
        Email: "",
        username: "",
        password: "",
        NumberAccount: "",
        NameBank: "",
    });
    const handleSave = () => {
        const body: IContractMining = formData
        dispatch(createContractMining(body))
        naviagte('/manager/contract')
    }
    return (
        <div className="add__contract_mining__page">
            <div className="title__page">Thêm hợp đồng khai thác mới</div>
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
                                label="Tên hợp đồng"
                                name="nameContract"
                                rules={[{ required: true, message: 'Vui lòng nhập tên hợp đồng!!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NameContract: event.target.value })))} />
                            </Form.Item>
                            <Form.Item
                                label="Số hợp đồng"
                                name="numberContract"
                                rules={[{ required: true, message: 'Vui lòng nhập số hợp đồng!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NumberContract: event.target.value })))} />
                            </Form.Item>

                            <Form.Item
                                label="Ngày hiệu lực"
                                name="EffectDate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày hiệu lực!' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />} onChange={(date: any) => setFormData((prev) => ({ ...prev, DayEffect: moment(date).format('DD/MM/YYYY') }))} />
                            </Form.Item>

                            <Form.Item
                                label="Ngày hết hạn"
                                name="expirationDate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày hết hạn!' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />} onChange={(date: any) => setFormData((prev) => ({ ...prev, DayExpire: moment(date).format('DD/MM/YYYY') }))} />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <div className="attach__file">
                                <p>Tệp đính kèm:</p>
                                <input type="file" className="add_image" id="customFile" />
                            </div>
                        </Col>
                        <Col span={8}>
                            <h3>Loại hợp đồng:</h3>
                            <Form.Item
                                // label="Tên đơn vị sử dụng:"
                                name="radio_contract"
                                rules={[{ required: true, message: 'Vui lòng chọn loại hợp đồng' }]}
                            >

                                <Radio.Group value="" style={{ marginLeft: 30 }} onChange={(event => setFormData((prev) => ({ ...prev, contractType: event.target.value })))}>
                                    <Space direction="vertical" className="tg" >
                                        <Radio value="Trọn gói" style={{ marginBottom: 52 }}> Trọn gói</Radio>
                                        <Radio value="Lượt phát">Lượt phát</Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>



                    <Row style={{ marginTop: 30 }}>
                        <Col span={8}>
                            <Form.Item
                                label="Tên đơn vị sử dụng:"
                                name="radio"
                                rules={[{ required: true, message: 'Vui lòng chọn tên đơn vị sử dụng' }]}
                            >

                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NameUnitUse: event.target.value })))} />
                            </Form.Item>

                            <Form.Item
                                label="Người đại diện:"
                                name="name__authorize"
                                rules={[{ required: true, message: 'Vui lòng nhập tên đại diện!' }]}
                            >

                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NameRepresentative: event.target.value })))} />
                            </Form.Item>
                            <Form.Item
                                label="Chức vụ:"
                                name="role"
                                rules={[{ required: true, message: 'Vui lòng nhập tên chức vụ!' }]}
                            >

                                <Input onChange={(event => setFormData((prev) => ({ ...prev, position: event.target.value })))} />
                            </Form.Item>


                            <Form.Item
                                label="Ngày sinh"
                                name="Birthdate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />} onChange={(date: any) => setFormData((prev) => ({ ...prev, Birthday: moment(date).format('DD/MM/YYYY') }))} />
                            </Form.Item>

                            <Form.Item
                                label="Quốc tịch:"
                                name="national"
                                rules={[{ required: true, message: 'Vui lòng nhập quốc tịch!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, nationality: event.target.value })))} />

                            </Form.Item>
                            <Form.Item
                                label="Số điện thoại:"
                                name="phone"
                                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, phone: event.target.value })))} />

                            </Form.Item>

                            <Form.Item
                                label="Email:"
                                name="email"
                                rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, Email: event.target.value })))} />

                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Giới tính:"
                                name="sex"
                                rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
                            >
                                <Radio.Group value={1} style={{ marginLeft: 30 }} onChange={(event => setFormData((prev) => ({ ...prev, sex: event.target.value })))}>
                                    <Radio value={1}>Nam</Radio>
                                    <Radio value={2}>Nữ</Radio>

                                </Radio.Group>

                            </Form.Item>
                            <Form.Item
                                label="CMND/CCCD:"
                                name="cmnd"
                                rules={[{ required: true, message: 'Vui lòng nhập CMND/CCCD!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, CMND: event.target.value })))} />

                            </Form.Item>

                            <Form.Item
                                label="Ngày cấp"
                                name="providedate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày cấp' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />} onChange={(date: any) => setFormData((prev) => ({ ...prev, DayProviderCMND: moment(date).format('DD/MM/YYYY') }))} />
                            </Form.Item>

                            <Form.Item
                                label="Nơi cấp:"
                                name="where"
                                rules={[{ required: true, message: 'Vui lòng nhập nơi cấp!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, PlaceProviderCMND: event.target.value })))} />

                            </Form.Item>
                            <Form.Item
                                label="Mã số thuế:"
                                name="taxcode"
                                rules={[{ required: true, message: 'Vui lòng nhập mã số thuế!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, TaxCode: event.target.value })))} />

                            </Form.Item>

                            <Form.Item
                                label="Nơi cư chứ:"
                                name="place"
                                rules={[{ required: true, message: 'Vui lòng nhập mã nơi cư chú!' }]}
                            >
                                <TextArea rows={4} style={{ height: 90 }} onChange={(event => setFormData((prev) => ({ ...prev, Place: event.target.value })))} />

                            </Form.Item>
                        </Col>

                        <Col span={8}>

                            <Form.Item
                                label="Tên đăng nhập:"
                                name="username"
                                rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, username: event.target.value })))} />

                            </Form.Item>
                            <Form.Item
                                label="Mật khẩu:"
                                name="password"
                                rules={[{ required: true, message: 'Vui lòng nhập nhập khẩu!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, password: event.target.value })))} />

                            </Form.Item>
                            <Form.Item
                                label="Số tài khoản:"
                                name="account"
                                rules={[{ required: true, message: 'Vui lòng nhập số tài khoản!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NumberAccount: event.target.value })))} />

                            </Form.Item>
                            <Form.Item
                                label="Ngân hàng:"
                                name="bank"
                                rules={[{ required: true, message: 'Vui lòng nhập tên ngân hàng!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NameBank: event.target.value })))} />

                            </Form.Item>
                        </Col>
                    </Row>



                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <div className="btn_group">
                            <Link to="/manager/contract">

                                <Button className='btn__cancel' >
                                    Hủy
                                </Button>
                            </Link>
                            <Button htmlType="submit" className='btn__save' onClick={handleSave}>
                                Lưu
                            </Button>
                        </div>

                    </Form.Item>
                </Form>
            </div>


            <div className="content__select">
                <div className="content__tg">
                    <div className="content__tg_item">
                        <div className="label_item">Giá trị hợp đồng <br /> (VNĐ)</div>
                        <Input style={{ width: 117, marginLeft: 27 }} value="214.500.000" />
                    </div>
                    <div className="content__tg_item">
                        <div className="label_item">Giá trị phân phối <br /> (VNĐ)</div>
                        <Input style={{ width: 117, marginLeft: 25 }} value="1.500.000" />
                    </div>
                </div>
                <div className="content__tg_item_x">
                    <div className="label_item_x">Giá trị hợp đồng <br /> (VNĐ)</div>
                    <Input style={{ width: 117, marginLeft: 30 }} value="" />
                </div>
            </div>
        </div>
    )
}

export default AddContractMining