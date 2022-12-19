import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import './Login.scss'
import logo from '../../../shared/images/logo.png'
import ChangeLanguage from '../../../shared/components/Language/Language';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../configs';
const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onFinish = (values: any) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCurrent) => {
                const user = userCurrent.user;
                navigate('/')
            })
            .catch((err) => {
                setError('Sai tên đăng nhập hoặc mật khẩu')
            })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='login_page'>
            <div className='content-form'>
                <ChangeLanguage />
                <img src={logo} alt="" className="logo-img" />
                <h3 className="main-title">Đăng nhập</h3>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    {/* <Form.Item
                        label="Tên đăng nhập"
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                    >
                        <h3>Tên đăng nhập</h3>
                        <Input className='username-input' />
                    </Form.Item> */}
                    <h3 style={{ marginLeft: -240 }}>Tên đăng nhập:</h3>
                    <Form.Item
                        // label="Tên đăng nhập"
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                    >
                        <Input className='username-input' onChange={event => setEmail(event.target.value)} />
                    </Form.Item>
                    <h3 style={{ marginLeft: -260 }}>Password:</h3>
                    <Form.Item
                        // label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập password!' }]}
                    >

                        <Input.Password onChange={event => setPassword(event.target.value)} />
                    </Form.Item>
                    {error && <div className='error__message'>{error}</div>}
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox style={{ marginLeft: -630 }}>Ghi nhớ đăng nhập</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" style={{ marginLeft: -450 }}>
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>

                <a className='forgot'>Quên mật khẩu?</a>
            </div>
        </div>
    )
}

export default Login