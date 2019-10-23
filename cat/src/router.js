import React,{Component} from 'react'
import ComponentImport from './utils/componentImport'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'

// import Login from './component/login/load'
const Login = ComponentImport(()=>import('./component/login'))
const Admin = ComponentImport(()=>import('./component/admin'))
const Home = ComponentImport(()=>import('./component/home'))
const UserList = ComponentImport(()=>import('./component/user'))
class RootRouter extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Redirect exact from='/' to='login' />
          <Route path='/login' component={Login} ></Route>
          <Route path='/admin' render={()=>{
            return(
              <Admin>
                <Route path='/admin/home' component={Home}></Route>
                <Route path='/admin/user/list' component={UserList}></Route>
              </Admin>
            )
          }} ></Route>
        </Switch>
      </HashRouter>
    )
  }
}

export default RootRouter