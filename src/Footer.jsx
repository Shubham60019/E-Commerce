import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='mainfooter'>
    <div className='footer'> <br /><br />
        <ul className='foot'>
            <li>ABOUT
                <ul className='about'>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                </ul>
            </li>
            <li>
                HELP
                <ul className='help'>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                </ul>
            </li>
            <li>
            CONSUMER POLICY
            <ul className='consumer mx-4'>
                <li>Return Policy</li>
                <li>Terms of Use</li>
                <li>Security</li>
                <li>Privacy</li>
            </ul>
            </li>
            <li>
            SOCIAL
            <ul className='social'>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>YouTube</li>
            </ul>
            </li>
        </ul>
        <ul className='detail'>
            <li className='detail1'>Mail Us:
                <p className='para1 mx-2'>Flix Kart india Private Limited, #225, 13th cross, 17th main road,

HSR Layout,

Bengaluru, 560102,

Karnataka, India</p>
            </li>
            <li className='detail2'>Registered Office Address:
                <p className='para2 mx-4'>Flix Kart india Private Limited, #225, 13th cross, 17th main road,

HSR Layout,

Bengaluru, 560102,

Karnataka, India

Telephone: 8871803049</p>
            </li>
        </ul>
    </div>
    <hr className='hr'/>
    <div>
        <ul className='bottom'>
            <li>Items</li>
            <li>Discount</li>
            <li>Help Center</li>
            <li>© 2012-2023 FlixKart.com</li>
        </ul>
    </div>
    </div>
  )
}

export default Footer