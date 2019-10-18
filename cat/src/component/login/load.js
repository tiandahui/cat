import React from 'react'
import Loadable from 'react-loadable';
 
const LoadingComponent = () =>{
  return (
    <div className='test'>
      loading
    </div>
  )
}
 
export default Loadable ({
  loader:()=>import('./index.js'),
  loading:LoadingComponent
})