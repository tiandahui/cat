import React,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox, Card ,message } from 'antd';
import './index.less'
class Login extends Component{
  submit=()=>{
    console.log('登录')
    /* let result = this.props.form.getFieldsValue()
    console.log(result) */
    this.props.form.validateFields((err,data)=>{
      if(err){
        message.error('输入信息有误请重试')
      }else{
        this.$axios.get('/yapi/admin/login',{us:123,ps:456})
        .then((data)=>{
          console.log(data)
        })
        message.success('登陆成功，1秒后跳转首页',1,()=>{
          this.props.history.push('/admin')
        })
      }
      console.log(err,data)
    })
  }
  render() {
    console.log(this)
    let {getFieldDecorator} = this.props.form
      return (
        <div className='login-box'>
          <Card style={ {width:'400px',position:'fixed',top:'17vh',right:'50px'} }>
            <div className='login-form'>
              <Form className="login-form">
                <Form.Item>
                  {getFieldDecorator('us',{
                    rules: [{ required: true, message: 'Please input your username!' },
                            { min: 6, message: '用户名长度6-9位!' },
                            { max: 9, message: '用户名长度6-9位!' }]
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('ps',{
                    rules: [{ required: true, message: 'Please input your username!' },
                            { min: 10, message: '用户名长度10-16位!' },
                            { max: 16, message: '用户名长度10-16位!' }]
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  <Checkbox>Remember me</Checkbox>
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                  <Button type="primary" onClick={this.submit} className="login-form-button">
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </div>
      )
    }
  }
export default Form.create()(Login)
// form.create 是一个高阶组件  将form表单的相关