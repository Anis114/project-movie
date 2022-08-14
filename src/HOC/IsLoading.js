import React from 'react'
import { Spin } from 'antd';
const IsLoading = (Component) => {
   return  function LoadingHocComp({loading, ...props}){
      if(loading){
          return (<Spin />)
       }else{
          return (<Component {...props} />)
       }
   }
}
export default IsLoading