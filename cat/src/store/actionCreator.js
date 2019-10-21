export default{
  changeTokenModal(params){
    let action ={
      type:'CHANGE_TOKEN_MODAL',
      params,
    }
    return action
  }
}