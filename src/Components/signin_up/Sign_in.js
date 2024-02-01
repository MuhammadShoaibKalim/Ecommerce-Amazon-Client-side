import React, { useState } from 'react'
import "./signup.css";
import { NavLink } from 'react-router-dom';

const Sign_in = () => {
  
const [logData, setData]=useState(
  {
    email:" ",
    password:" "
  });
console.log(logData);

const adddata=(e)=>{
   const {name, value}=e.target;

   setData( ()=>{
    return {
      ...logData,
      [name]:value
    }
   })
}


  return (
   <section>
       <div className='sign_container'>
             <div className='sign_header'>
                <img src='./blacklogoamazon.png' alt='amazon logo'/>
            </div>  
            <div className='sign_form'>
               <form>
                  <h1>Sign In</h1>
                     <div className='form_data'>
                      <label htmlFor='email'>Email</label>
                      <input type='text' id='email' 
                      onChange={adddata} value={logData.email}
                      placeholder='Enter your email' required/>
                    </div>  
                    <div className='form_data'>
                      <label htmlFor='email'>Password</label>
                      <input type='password' 
                      onChange={adddata} value={logData.password}
                      id='password' placeholder='Enter your password' required/>
                    </div>  
                    <button className='signin_btn'>Continue</button>
               </form>
            </div>
            <div className='create_accountinfo'>
                <p>New to Amazon?</p>
                    <NavLink to="/register"> 
                    <button className=''> Create Your Amazon Account</button>
                    </NavLink>
            </div>
       </div>
   </section>
  )
}

export default Sign_in;
