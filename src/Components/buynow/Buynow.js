import React from 'react'
import './buynow.css';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import Option from './Option';
import fulfilled from '../../assets/fulfilled.jpg'
import Subtotal from './Subtotal';
import Right from './Right';

const Buynow = () => {
  return (
    <div className='buynow_section'> 
     <div className='buynow_container'>
        <div className='left_buy'>
           <h1>Shopping Cart</h1>
           <p> Select all items</p>
           <span className='leftbuyprice'>Price </span>
           <Divider/>

           <div className='item_containert'>
            <img src='https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70' alt=''/>
             <div className='items_details' >
                <h3>Molife Sense 500 Smartwatch  (Black Strap, Freesize)</h3>
                <h3>Smart Watches</h3>
                <h3 className='diffrentprice'> 4049.00 PKR </h3>
                <h3 className='unusuall'>Usaully dispateched in 8 days.</h3>
                <p> Eligible for Free Shopping </p>
                <img src={fulfilled} alt='fulfilled'/>
                <Option/> 
             </div>
             <h3 className="price_item"> 499.00 PKR</h3>
           </div>
           <Divider/>
           <Subtotal/>
        </div>
        <Right/>

     </div>
    </div>
  )
}

export default Buynow;
