import React from 'react'
import './buynow.css'
import purchase from '../../assets/purchase.jpg';

const Right = () => {
  return (
    <div className='right_buy'>
      <img src={purchase} alt='purchase' />
      <div className='cost_right'> 
      <p>Your order is Eligible for free delivery.</p>
      <span style={{color:"565659"}}>Select this option at checkout. Details </span>

      <h3>Subtotal (1 item ): 499.00 PKR</h3>
      <button className='rightbuy_btn'>Process to Buy  </button>
      <div className='emi'> Emi available </div>
       </div>
    </div>
  )
}

export default Right
