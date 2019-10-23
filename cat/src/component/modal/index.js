import React,{Component,Fragment} from 'react'
import {Card} from 'antd'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import './index.less'

class  TokenModal extends Component{
  render(){
    console.log(this)
    let {tokenModal} = this.props
    return(
      <Fragment>
        {!tokenModal ||
        <div className='token-model'>
          <Card title='token失效'>
            token缺失，请重新登录
            <button onClick={()=>{
              this.props.history.push('/login')
            }}>去登陆</button>
          </Card>
        </div>}
      </Fragment>
      
      
    )
  }
}

export default connect(state=>state)(withRouter(TokenModal))