import React from 'react'
import Banner from './Banner'
import "./home.css";
import Slide from './Slide';
// import festival from "https://img.etimg.com/thumb/width-420,height-315,imgsize-30954,resizemode-75,msid-106866909/top-trending-products/news/amazon-great-republic-day-sale-2024-up-to-80-off-on-home-dcor.jpg"
import festival from "../../assets/festival 2.jpg";
import centerImage from "../../assets/center image.jpg"

const Maincomp = () => {
  return (
    <div className='home_section'>
      <div className='banner_part'>
        <Banner/>
        
      </div>
      <div className='slide_part'>
        <div className='left_slide'>
          <Slide title=" Deal of the Day"/>
        </div>
        <div className='right_slide'>
          <h4>Festival latest Launches</h4>
          <img src={festival} alt="festival" />
          <a href='#'>See more</a>
        </div>
      </div>
        <Slide title= "Today's Deal"/>
        <div  className='center_img'>
          <img src={centerImage} alt="center img" />
        </div>
        <Slide title= "Best Seller"/>
        <Slide title= "Upto 80% offer"/>

    </div>
  )
}

export default Maincomp;
