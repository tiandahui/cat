export default{
  /* changeTokenModal(params){
    let action ={
      type:'CHANGE_TOKEN_MODAL',
      params,
    }
    return action
  }, */
  changeTokenModalAsync(params){
    return (dispatch)=>{
      let action={type:'CHANGE_TOKEN_MODAL'}
      setTimeout(()=>{
        let islogin = false
        action.params = islogin
        dispatch(action)
      },1000)
    }
  }
}