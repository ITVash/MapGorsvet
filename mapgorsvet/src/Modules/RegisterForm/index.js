import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Link } from 'react-router-dom';
import './style.sass';

import { Form, Icon, Input, Button } from 'antd';

class RegisterForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='form__auth'>
        
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item><h2>Регистрация</h2>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Пожалуйста, введите Ваш E-Mail!' }],
            })(
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="email"
                placeholder="E-Mail"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Пожалуйста, введите Ваш Логин!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Логин"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Пожалуйста, введите Ваш Пароль!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Пароль"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('repassword', {
              rules: [{ required: true, message: 'Пожалуйста, повторите Ваш Пароль!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Повторите пароль"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Войти
            </Button>
          </Form.Item>
          <Link className='link' to='/login' >Вернуться на страницу авторизации</Link>
        </Form>
      </div>
     );
  }
}

const WrappedRegisterForm = Form.create({ name: 'normal_login' })(RegisterForm);
export default WrappedRegisterForm;