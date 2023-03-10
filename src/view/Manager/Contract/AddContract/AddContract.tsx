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
            <div className="title__page">Th??m h???p ?????ng ???y quy???n m???i</div>
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
                                label="S??? h???p ?????ng"
                                name="numberContract"
                                rules={[{ required: true, message: 'Vui l??ng nh???p s??? h???p ?????ng!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NumberContract: event.target.value })))} />
                            </Form.Item>
                            <Form.Item
                                label="T??n h???p ?????ng"
                                name="nameContract"
                                rules={[{ required: true, message: 'Vui l??ng nh???p t??n h???p ?????ng!!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NameContract: event.target.value })))} />
                            </Form.Item>
                            <Form.Item
                                label="Ng??y hi???u l???c"
                                name="EffectDate"
                                rules={[{ required: true, message: 'Vui l??ng ch???n ng??y hi???u l???c!' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />}
                                    onChange={(date: any) => setFormData((prev) => ({ ...prev, DayEffect: moment(date).format('DD/MM/YYYY') }))}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Ng??y h???t h???n"
                                name="expirationDate"
                                rules={[{ required: true, message: 'Vui l??ng ch???n ng??y h???t h???n!' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />}
                                    onChange={(date: any) => setFormData((prev) => ({ ...prev, DayExpire: moment(date).format('DD/MM/YYYY') }))}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <div className="attach__file">
                                <p>T???p ????nh k??m:</p>
                                <input type="file" className="add_image" id="customFile" />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="profit">
                                <div className="profit__title">
                                    <BsExclamationCircle style={{ marginRight: 10 }} />
                                    M???c nhu???n b??t
                                </div>

                                <div className="content__profit">
                                    Quy???n t??c gi???:
                                    <p>0%</p>
                                </div>
                                <div className="content__profit">
                                    Quy???n li??n quan:
                                    <p>0%</p>
                                </div>
                                <div className="content__profit__relationship">
                                    Quy???n c???a ng?????i bi???u di???n:
                                    <p>50%</p>
                                </div>
                                <div className="content__profit__relationship">
                                    Quy???n c???a nh?? s???n xu???t:<br /> (B???n ghi/video)
                                    <p>50%</p>
                                </div>

                            </div>
                        </Col>
                    </Row>


                    <div className="info__auhtorize__person">Th??ng tin ph??p nh??n ???y quy???n</div>
                    <Row>
                        <Col span={8}>
                            <Form.Item
                                label="Ph??p nh??n ???y quy???n"
                                name="radio"
                                rules={[{ required: true, message: 'Vui l??ng ch???n ph??p nh??n ???y quy???n!' }]}
                            >
                                <Radio.Group value="" style={{ marginLeft: 30 }} onChange={(event => setFormData((prev) => ({ ...prev, legalAuthorized: event.target.value })))}>
                                    <Radio value="C?? nh??n">C?? nh??n</Radio>
                                    <Radio value="T??? ch???c">T??? ch???c</Radio>

                                </Radio.Group>

                            </Form.Item>

                            <Form.Item
                                label="T??n ng?????i ???y quy???n:"
                                name="name__authorize"
                                rules={[{ required: true, message: 'Vui l??ng nh???p t??n ng?????i ???y quy???n!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NamePersonAuthorized: event.target.value })))} />

                            </Form.Item>

                            <Form.Item
                                label="Gi???i t??nh:"
                                name="sex"
                                rules={[{ required: true, message: 'Vui l??ng ch???n gi???i t??nh!' }]}
                            >
                                <Radio.Group value="" style={{ marginLeft: 30 }} onChange={(event => setFormData((prev) => ({ ...prev, sex: event.target.value })))}>
                                    <Radio value="Nam">Nam</Radio>
                                    <Radio value="N???">N???</Radio>

                                </Radio.Group>

                            </Form.Item>

                            <Form.Item
                                label="Ng??y sinh"
                                name="Birthdate"
                                rules={[{ required: true, message: 'Vui l??ng ch???n ng??y sinh!' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />}
                                    onChange={(date: any) => setFormData((prev) => ({ ...prev, Birthday: moment(date).format('DD/MM/YYYY') }))}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Qu???c t???ch:"
                                name="national"
                                rules={[{ required: true, message: 'Vui l??ng nh???p qu???c t???ch!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, nationality: event.target.value })))} />

                            </Form.Item>
                            <Form.Item
                                label="S??? ??i???n tho???i:"
                                name="phone"
                                rules={[{ required: true, message: 'Vui l??ng nh???p s??? ??i???n tho???i!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, phone: event.target.value })))} />

                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="CMND/CCCD:"
                                name="cmnd"
                                rules={[{ required: true, message: 'Vui l??ng nh???p CMND/CCCD!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, CMND: event.target.value })))} />

                            </Form.Item>

                            <Form.Item
                                label="Ng??y c???p"
                                name="providedate"
                                rules={[{ required: true, message: 'Vui l??ng ch???n ng??y c???p' }]}
                            >

                                <DatePicker suffixIcon={<VscCalendar />}
                                    onChange={(date: any) => setFormData((prev) => ({ ...prev, DayProviderCMND: moment(date).format('DD/MM/YYYY') }))}
                                />
                            </Form.Item>

                            <Form.Item
                                label="N??i c???p:"
                                name="where"
                                rules={[{ required: true, message: 'Vui l??ng nh???p n??i c???p!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, PlaceProviderCMND: event.target.value })))} />

                            </Form.Item>
                            <Form.Item
                                label="M?? s??? thu???:"
                                name="taxcode"
                                rules={[{ required: true, message: 'Vui l??ng nh???p m?? s??? thu???!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, TaxCode: event.target.value })))} />

                            </Form.Item>

                            <Form.Item
                                label="N??i c?? ch???:"
                                name="place"
                                rules={[{ required: true, message: 'Vui l??ng nh???p m?? n??i c?? ch??!' }]}
                            >
                                <TextArea rows={4} style={{ height: 90 }} onChange={(event => setFormData((prev) => ({ ...prev, Place: event.target.value })))} />

                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="Email:"
                                name="email"
                                rules={[{ required: true, message: 'Vui l??ng nh???p Email!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, Email: event.target.value })))} />

                            </Form.Item>
                            <Form.Item
                                label="T??n ????ng nh???p:"
                                name="username"
                                rules={[{ required: true, message: 'Vui l??ng nh???p t??n ????ng nh???p!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, username: event.target.value })))} />

                            </Form.Item>
                            <Form.Item
                                label="M???t kh???u:"
                                name="password"
                                rules={[{ required: true, message: 'Vui l??ng nh???p nh???p kh???u!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, password: event.target.value })))} />

                            </Form.Item>
                            <Form.Item
                                label="S??? t??i kho???n:"
                                name="account"
                                rules={[{ required: true, message: 'Vui l??ng nh???p s??? t??i kho???n!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NumberAccount: event.target.value })))} />

                            </Form.Item>
                            <Form.Item
                                label="Ng??n h??ng:"
                                name="bank"
                                rules={[{ required: true, message: 'Vui l??ng nh???p t??n ng??n h??ng!' }]}
                            >
                                <Input onChange={(event => setFormData((prev) => ({ ...prev, NameBank: event.target.value })))} />

                            </Form.Item>
                        </Col>
                    </Row>



                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <div className="btn_group">
                            <Button className='btn__cancel' >
                                H???y
                            </Button>
                            <Button htmlType="submit" className='btn__save' onClick={HandleSaveContract}>
                                L??u
                            </Button>
                        </div>

                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default AddContract