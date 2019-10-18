import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './style.sass';

import { Form, Icon, Input, Button } from 'antd';

class LoginForm extends Component {
  state = {
    red : false
  }
  //const this.setStore = this.props.set;
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({red : true});
        this.props.set(values);
        console.log('Received values of form: ', values);
        this.props.auth({values});
      }
    });
  };
  render() {
    console.log("Props",this.props);
    const { red } = this.state;
    if (red) {
      return <Redirect push to="/" />
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='form__auth'>
        
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item><h2>Войдите в систему</h2>
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
            <Button type="primary" htmlType="submit" className="login-form-button">
              Войти
            </Button>
          </Form.Item>
          <Link className='link' to='/register' >Зарегистрироваться</Link>
        </Form>
      </div>
     );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default WrappedLoginForm;