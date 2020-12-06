import React, { Component } from 'react'
import { Button, WhiteBlock } from './../../../components';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
          };
        return (
            <div>
                <div className="auth__top">
                    <h2>Login</h2>
                    <p>Please log into your account</p>
                </div>
                <WhiteBlock>
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                        <Form.Item hasFeedback name="username">
                            <Input size="large" validateStatus='success' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password" hasFeedback>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item>
                            <Button size="large" type="primary" >Login</Button>
                        </Form.Item>

                        <Link className="auth__registration-link" to="/reg">Register now</Link>

                    </Form>
                </WhiteBlock>
            </div>
        )
    }
};

export default LoginForm;