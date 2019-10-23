import React,{Component} from 'react'
import CustomNav from '../customNav'
import TokenModel from '../modal'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreator from '../../store/actionCreator'
import './index.less'

class Admin extends Component{
  componentDidMount(){
    setTimeout(()=>{
      if(false){

      }else{
        this.props.changeTokenModal(true)
      }
    },1000)
  }
  render(){
    console.log('admin',this)
    return(
      <div className='admin'>
        <TokenModel></TokenModel>
        <div className='admin-nav'>
          <CustomNav></CustomNav>
        </div>
        <div className='admin-content'>
          <div>
            头部信息
          </div>
          <div>
            {this.props.children}
          </div>
          <div>
            底部信息
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(Admin)