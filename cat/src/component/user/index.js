import React,{Component} from 'react'
import {Card,Table,Spin} from 'antd'
const columns = [
  {
    title: '姓名',
    width:'200',
    dataIndex: 'name',
    key: 'name',
    fixed:'left'
  },
  {
    title: '姓名',
    width:'200',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    width:'200',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    width:'200',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '图片',
    width:'200',
    dataIndex: 'img',
    key: 'img',
    render(imgPath){
      let arr = ['未知','男','女']
      return(
        <img src={imgPath} width='80' height='50' alt="" />
      )
    }
  },
  {
    title: '图片3',
    width:'200',
    dataIndex: 'img',
    key: 'img',
    render(imgPath){
      let arr = ['未知','男','女']
      return(
        <img src={imgPath} width='80' height='50' alt="" />
      )
    }
  },
  {
    title: '图片2',
    width:'200',
    dataIndex: 'img',
    key: 'img',
    render(imgPath){
      let arr = ['未知','男','女']
      return(
        <img src={imgPath} width='80' height='50' alt="" />
      )
    }
  },
  {
    title: '性别',
    width:'100',
    dataIndex: 'sex',
    key: 'sex',
    render(data){
      let arr = ['未知','男','女']
      return(
        <span>{arr[data]}</span>
      )
    }
  }
];

const dataSource =[
  {name:'QIUQIU',sex:2,address:'老牛湾',age:3,key:1},
  {name:'qiuqiu',sex:1,address:'老牛湾',age:3,key:2},
]
class UserList extends Component{
  constructor(){
    super()
    this.state={
      spinning:true
    }
  }
  componentDidMount(){
    this.refreshData()
  }
  refreshData(){
    let url = '/api/getThemeById?themeid=3&page=2'
    this.$axios.get(url)
    .then((data)=>{
      console.log(data)
      this.setState({spinning:false})
    })
  }
  render(){
    let {spinning} = this.state
    return(
      <div className='userlist-box'>
        <Card style={{background:'pink',overflow:'hidden',width:'700px'}}>
          <Spin spinning={false}>
            <Table dataSource={dataSource} columns={columns} scroll={{x:700,y:140}}></Table>
          </Spin>
        </Card>
      </div>
    )
  }
}

export default UserList