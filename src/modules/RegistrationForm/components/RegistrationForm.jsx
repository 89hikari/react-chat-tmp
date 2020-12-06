import React, { Component } from 'react'
import { Button, WhiteBlock } from './../../../components';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class RegistrationForm extends Component {
    render() {
        const success = false;
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };
        return (
            <div>
                <div className="auth__top">
                    <h2>Registration</h2>
                    <p>You have to register before start chatting</p>
                </div>
                <WhiteBlock>

                    {!success ? (
                        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                            <Form.Item hasFeedback name="username">
                                <Input size="large" validateStatus='success' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item name="password" hasFeedback>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" size="large" />
                            </Form.Item>
                            <Form.Item name="password-confirm" hasFeedback>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Confirm password" size="large" />
                            </Form.Item>
                            <Form.Item>
                                <Button size="large" type="primary">Register</Button>
                            </Form.Item>

                            <Link className="auth__registration-link" to="/login">Already registered?</Link>

                        </Form>
                    ) : (<div className="auth__success-block">
                        <div className="warning-img">
                            <ExclamationCircleOutlined style={{ fontSize: '45px', color: '#08c' }} />
                        </div>
                        <h2>Confirm your account</h2>
                        <p>We have sent you an confirming email. Please check your mail.</p>

                    </div>)}
                </WhiteBlock>
            </div>
        )
    }
};

export default RegistrationForm;