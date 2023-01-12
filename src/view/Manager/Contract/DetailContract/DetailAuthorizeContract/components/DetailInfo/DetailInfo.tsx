import { Button, Col, DatePicker, Form, Input, Radio, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { AiFillFileWord } from "react-icons/ai";
import { BsExclamationCircle } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";
import './style.scss'
const DetailInfo = () => {
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
                                <h3 className="item__contract">BH123</h3>
                            </Form.Item>
                            <Form.Item
                                label="Tên hợp đồng"
                                name="nameContract"
                                rules={[{ required: true, message: 'Vui lòng nhập tên hợp đồng!!' }]}
                            >
                                <h3 className="item__contract">Hợp đồng tác phẩm ủy quyền âm nhạc</h3>
                            </Form.Item>
                            <Form.Item
                                label="Ngày hiệu lực"
                                name="EffectDate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày hiệu lực!' }]}
                            >

                                <h3 className="item__contract">01/05/2021</h3>
                            </Form.Item>

                            <Form.Item
                                label="Ngày hết hạn"
                                name="expirationDate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày hết hạn!' }]}
                            >

                                <h3 className="item__contract">01/12/2021</h3>
                            </Form.Item>
                            <Form.Item
                                label="Tinh Trạng"
                                name="expirationDate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày hết hạn!' }]}
                            >

                                <h3 className="item__contract">Còn thời hạn</h3>
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <div className="attach__file">
                                <p style={{ marginRight: 10 }}>Tệp đính kèm:</p>
                                <h3 className="item__contract"><AiFillFileWord style={{ fontSize: 20 }} /> hetthuongnhoem.doc</h3>
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

                                <h3 className="item__contract">Cá nhân</h3>
                            </Form.Item>

                            <Form.Item
                                label="Tên người ủy quyền:"
                                name="name__authorize"
                                rules={[{ required: true, message: 'Vui lòng nhập tên người ủy quyền!' }]}
                            >
                                <h3 className="item__contract">Nguyễn Văn A</h3>

                            </Form.Item>

                            <Form.Item
                                label="Giới tính:"
                                name="sex"
                                rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
                            >
                                <h3 className="item__contract">Nam</h3>

                            </Form.Item>

                            <Form.Item
                                label="Ngày sinh"
                                name="Birthdate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
                            >

                                <h3 className="item__contract">10/02/1984</h3>
                            </Form.Item>

                            <Form.Item
                                label="Quốc tịch:"
                                name="national"
                                rules={[{ required: true, message: 'Vui lòng nhập quốc tịch!' }]}
                            >
                                <h3 className="item__contract">Việt Nam</h3>

                            </Form.Item>
                            <Form.Item
                                label="Số điện thoại:"
                                name="phone"
                                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                            >
                                <h3 className="item__contract">(+84) 345 678 901</h3>

                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="CMND/CCCD:"
                                name="cmnd"
                                rules={[{ required: true, message: 'Vui lòng nhập CMND/CCCD!' }]}
                            >
                                <h3 className="item__contract">123456789012</h3>

                            </Form.Item>

                            <Form.Item
                                label="Ngày cấp"
                                name="providedate"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày cấp' }]}
                            >

                                <h3 className="item__contract">10/07/2011</h3>
                            </Form.Item>

                            <Form.Item
                                label="Nơi cấp:"
                                name="where"
                                rules={[{ required: true, message: 'Vui lòng nhập nơi cấp!' }]}
                            >
                                <h3 className="item__contract">Tp.HCM, Việt Nam</h3>

                            </Form.Item>
                            <Form.Item
                                label="Mã số thuế:"
                                name="taxcode"
                                rules={[{ required: true, message: 'Vui lòng nhập mã số thuế!' }]}
                            >
                                <h3 className="item__contract">93287489</h3>

                            </Form.Item>

                            <Form.Item
                                label="Nơi cư chứ:"
                                name="place"
                                rules={[{ required: true, message: 'Vui lòng nhập mã nơi cư chú!' }]}
                            >
                                <h3 className="item__contract">69/53, Nguyễn Gia Trí, Phường 25,
                                    Quận Bình Thạnh, Thành phố Hồ Chí Minh.
                                </h3>

                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="Email:"
                                name="email"
                                rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}
                            >
                                <h3 className="item__contract">nguyenvana@gmail.com</h3>

                            </Form.Item>
                            <Form.Item
                                label="Tên đăng nhập:"
                                name="username"
                                rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                            >
                                <h3 className="item__contract">nguyenvana@gmail.com</h3>

                            </Form.Item>
                            <Form.Item
                                label="Mật khẩu:"
                                name="password"
                                rules={[{ required: true, message: 'Vui lòng nhập nhập khẩu!' }]}
                            >
                                <h3 className="item__contract">123456789012</h3>

                            </Form.Item>
                            <Form.Item
                                label="Số tài khoản:"
                                name="account"
                                rules={[{ required: true, message: 'Vui lòng nhập số tài khoản!' }]}
                            >
                                <h3 className="item__contract">123456789012</h3>

                            </Form.Item>
                            <Form.Item
                                label="Ngân hàng:"
                                name="bank"
                                rules={[{ required: true, message: 'Vui lòng nhập tên ngân hàng!' }]}
                            >
                                <h3 className="item__contract">ACB - Ngân hàng Á Châu</h3>

                            </Form.Item>
                        </Col>
                    </Row>



                    {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <div className="btn_group">
                            <Button className='btn__cancel' >
                                Hủy
                            </Button>
                            <Button htmlType="submit" className='btn__save'>
                                Lưu
                            </Button>
                        </div>

                    </Form.Item> */}
                </Form>
            </div>
        </div>
    )
}

export default DetailInfo