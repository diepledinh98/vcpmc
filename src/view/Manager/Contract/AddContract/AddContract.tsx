import { Button, Col, DatePicker, Form, Input, Radio, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";
import React, { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { IContractAuthorized } from "../../../../redux/ContractAuthorized/interface";
import { createContractAuthorized } from "../../../../redux/ContractAuthorized/repository";
import { useAppDispatch } from "../../../../shared/hook/reduxhook";
import './AddContract.scss'
const AddContract = () => {
    const naviagte = useNavigate()
    const dispatch = useAppDispatch()
    const [date, setDate] = useState('')
    const [formData, setFormData] = useState({
        NumberContract: "",
        NameContract: "",
        DayEffect: "",
        DayExpire: "",
        legalAuthorized: "",
        NamePersonAuthorized: "",
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

    const HandleSaveContract = () => {

        const body: IContractAuthorized = formData
        dispatch(createContractAuthorized(body))
        naviagte('/manager/contract')
    }
    // const handleChange = (event: any) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         if (reader.readyState === 2) {
    //             if (reader.result) {
    //                 let data = reader.result.toString()
    //                 setImage(reader.result.toString())
    //                 setFormData((prev) => ({
    //                     ...prev,
    //                     image: data

    //                 }))

    //             }

    //         }
    //     }
    //     reader.readAsDataURL(event.target.files[0])
    // }
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
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NumberContract: event.target.value })))} />
                            </Form.Item>
                            <Form.Item
                                label="Tên hợp đồng"
                                name="nameContract"
                                rules={[{ required: true, message: 'Vui lòng nhập tên hợp đồng!!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NameContract: event.target.value })))} />
                            </Form.Item>
                            <Form.Item
                                label="Ngày hiệu lực"
                                name="EffectDate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày hiệu lực!' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />}
                                    onChange={(date: any) => setFormData((prev) => ({ ...prev, DayEffect: moment(date).format('DD/MM/YYYY') }))}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Ngày hết hạn"
                                name="expirationDate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày hết hạn!' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />}
                                    onChange={(date: any) => setFormData((prev) => ({ ...prev, DayExpire: moment(date).format('DD/MM/YYYY') }))}
                                />
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
                                <Radio.Group value="" style={{ marginLeft: 30 }} onChange={(event => setFormData((prev) => ({ ...prev, legalAuthorized: event.target.value })))}>
                                    <Radio value="Cá nhân">Cá nhân</Radio>
                                    <Radio value="Tổ chức">Tổ chức</Radio>

                                </Radio.Group>

                            </Form.Item>

                            <Form.Item
                                label="Tên người ủy quyền:"
                                name="name__authorize"
                                rules={[{ required: true, message: 'Vui lòng nhập tên người ủy quyền!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NamePersonAuthorized: event.target.value })))} />

                            </Form.Item>

                            <Form.Item
                                label="Giới tính:"
                                name="sex"
                                rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
                            >
                                <Radio.Group value="" style={{ marginLeft: 30 }} onChange={(event => setFormData((prev) => ({ ...prev, sex: event.target.value })))}>
                                    <Radio value="Nam">Nam</Radio>
                                    <Radio value="Nữ">Nữ</Radio>

                                </Radio.Group>

                            </Form.Item>

                            <Form.Item
                                label="Ngày sinh"
                                name="Birthdate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />}
                                    onChange={(date: any) => setFormData((prev) => ({ ...prev, Birthday: moment(date).format('DD/MM/YYYY') }))}
                                />
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
                        </Col>
                        <Col span={8}>
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

                                <DatePicker suffixIcon={<VscCalendar />}
                                    onChange={(date: any) => setFormData((prev) => ({ ...prev, DayProviderCMND: moment(date).format('DD/MM/YYYY') }))}
                                />
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
                                label="Email:"
                                name="email"
                                rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, Email: event.target.value })))} />

                            </Form.Item>
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
                            <Button className='btn__cancel' >
                                Hủy
                            </Button>
                            <Button htmlType="submit" className='btn__save' onClick={HandleSaveContract}>
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