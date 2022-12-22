import React, { memo, useEffect, useState } from 'react';
import { Button, Col, Form, Input, Modal, Row } from 'antd';
import './ModalChangePassword.scss'
import { getAuth, signInWithEmailAndPassword, updatePassword, updateProfile, User } from "firebase/auth";
import { auth } from '../../../../configs';
import { useNavigate } from 'react-router-dom';
interface OpenProps {
    setIsOpen: (value: boolean) => void,
    onIsOpen: boolean
}
const ModalChangePassword = (props: OpenProps) => {
    const navigate = useNavigate()
    const auth = getAuth();
    const user: User | any = auth.currentUser;
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [newPassword, setNewPassword] = useState('')
    const handleOk = async () => {
        console.log(user);

        if (user) {
            console.log(newPassword);

            await updatePassword(user, newPassword).then(async () => {

                await signInWithEmailAndPassword(auth, 'admin@gmail.com', newPassword)
                    .then((userCurrent) => {
                        const user = userCurrent.user;
                        navigate('/profile')

                    })
                    .catch((err) => {
                        // setError('Sai tên đăng nhập hoặc mật khẩu')
                    })
            }).catch((error) => {
                console.log("loi");

            });
        } else {
            // No user is signed in.
        }
        props.setIsOpen(false)
        setTimeout(() => {
            return (

                <h3 style={{ color: 'red' }}>da thay doi mat khau</h3>
            )
        }, 800)
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        props.setIsOpen(false)
    };
    return (

        <Modal
            title="Thay đổi mật khẩu"
            open={props.onIsOpen}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            width={392}
            footer={null}
            style={{
                backgroundColor: '#3E3E5B'
            }}
        >
            <div className='from__change__password'>
                <Form

                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={handleOk}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <h3>Mật khẩu hiện tại:</h3>
                    <Form.Item

                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu hiện tại!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <h3>Mật khẩu mới:</h3>
                    <Form.Item

                        name="retype_password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới!' }]}
                    >
                        <Input.Password onChange={(event) => setNewPassword(event.target.value)} />
                    </Form.Item>


                    <h3>Nhập lại mật khẩu mới:</h3>
                    <Form.Item

                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu mới!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Row>
                        <Col>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button className='btn__cancel' onClick={handleCancel}>
                                    Hủy
                                </Button>
                            </Form.Item>
                        </Col>

                        <Col >
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button htmlType="submit" className='btn__save' onClick={handleOk}>
                                    Lưu
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Modal>
    )
}

export default memo(ModalChangePassword)

function updateUser(uid: any, arg1: { email: string; phoneNumber: string; emailVerified: boolean; password: string; displayName: string; photoURL: string; disabled: boolean; }) {
    throw new Error('Function not implemented.');
}
function getASecureRandomPassword(): any {
    throw new Error('Function not implemented.');
}

