import React from 'react'
import { Input } from 'antd';
import 'antd/dist/antd.css'



const { Search } = Input;
 const NameFilter= ({handleSearch,b})=>  {


       return (


               <Search className="searchInput"
                   placeholder="input search text"
                   onChange ={(e)=>handleSearch(e.target.value)} 
                enterButton="Search"
                   size="large"
                  
               />
       )
   }
   export default NameFilter






















