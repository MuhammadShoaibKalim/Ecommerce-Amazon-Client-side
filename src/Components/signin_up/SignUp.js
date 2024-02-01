// import React from 'react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const SignUp = () => {

  const [uData, setUdata]=useState(
    { 
      name:" ",
      email:" ",
      password:" ",
      cpassword:" ",
    });
  // console.log(uData);
  return (
    <section>
    <div className='sign_container'>
          <div className='sign_header'>
             <img src='./blacklogoamazon.png' alt='amazon logo'/>
         </div>  
         <div className='sign_form'>
            <form>
               <h1>Sign-Up</h1>
               <div className='form_data'>
                   <label htmlFor='name'>Your Name</label>
                   <input type='text' 
                   onChange={(e)=>(setUdata({...uData, name:e.target.value}))} 
                   id='name' placeholder='Enter your first and last Name' />
                 </div>  
                 <div className='form_data'>
                   <label htmlFor='email'>Email or Phone Number</label>
                   <input type='text'
                  //  onChange={adddata} value={uData.email}
                   onChange={(e)=>(setUdata({...uData, email:e.target.value}))} 
                    id='email' />
                 </div>  
                  <div className='form_data'>
                   <label htmlFor='password'>Password</label>
                   <input type='password' id='password' 
                  //  onChange={adddata} value={uData.password}
                   onChange={(e)=>(setUdata({...uData, password:e.target.value}))} 
                    placeholder='At least 6 character' required/>
                 </div>  
                 <div className='form_data'>
                   <label htmlFor='cpassword'>Re-enter Password</label>
                   <input type='password' 
                  //  onChange={adddata} value={uData.cpass}
                   onChange={(e)=>(setUdata({...uData, cpassword:e.target.value}))} 
                   id='cpassword' required/>
                 </div>  
                 <button className='signin_btn'>Register</button>
            </form>
            <div className='signin_info'>
                <p> Already have an account? <NavLink to="/login"> Sign In</NavLink> </p>
         </div>
         </div>
         
    </div>
</section>
  )
}

export default SignUp;
