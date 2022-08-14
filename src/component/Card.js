import React, { Component } from 'react'
import Rating from './Rating'
import { Modal, Button } from 'antd';


const Card = ({ e }) => {


  return (
    <div className='movieCard flip-card' >
      <div className='flip-card-inner'>
        <div className='movieCard flip-card'>

          
            <img className='img' src={e.img} alt=''></img>
          <div className='movieDesc'>
            <p className='textName'>{e.name} - {e.year}</p>
            <Rating count={e.star} />


          </div>

        </div>
        

      </div>
    </div>
  )
}


export default Card