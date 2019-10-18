import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd'
let navData = [
  {name:'首页',path:'/home'},
  {name:'设置',path:'/setting'},
  {name:'用户管理',
    path:'/user',
    children:[
      {name:'用户列表',path:'/user/list'},
      {name:'用户删除',path:'/user/del'}
    ]
  }
]
const { SubMenu } = Menu
class CustomNav extends Component{
  renderItem=(data)=>{
    return data.map((item,index)=>{
      if(item.children){
        return( 
          <SubMenu title={item.name}>
            {this.renderItem(item.children)} 
          </SubMenu>
        )
      }else{
        return <Menu.Item>{item.name}</Menu.Item>
      }
    })
  }
  render(){ 
    console.log('导航',this)
    return(
      <div>
        <Menu style={ {width:256} } mode="vertical">
          {this.renderItem(navData)}
        </Menu>
      </div>
    )
  }
}

export default withRouter(CustomNav)