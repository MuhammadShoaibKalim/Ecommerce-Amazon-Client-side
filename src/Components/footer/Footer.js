import React from 'react';
import "./footr.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className='footer_container'>
                <div className='footr_details_one forres'>
                    <h3>Get to Know Us</h3>
                    <p>Career</p>
                    <p>Press Release</p>
                    <p>Our Services</p>
                </div>
                <div className='footr_details_one forres'>
                    <h3>Connect With Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className='footr_details_one  forres'>
                    <h3>Get to Know Us</h3>
                    <p>Career</p>
                    <p>Press Release</p>
                    <p>Our Services</p>
                </div>
                <div className='footr_details_one forres'>
                    <h3>Make Money with Us</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
            <div className='footr_details_last forres'>
                <img src='./amazon_PNG25.png' alt='footer_img' />
                <p>Condition of Use & Sell &nbsp;  Privacy Notice &nbsp;  adds-service &nbsp;  ©️ 1999-{year}, Amazon.com, Inc. or its Affilites. </p>
            </div>
        </footer>
    );
}

export default Footer;
