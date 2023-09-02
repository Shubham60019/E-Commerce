import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div id='main'>
        <div className='logo'>Flix Kart</div>
        <div>
            <ul className='list' >
                <li>Menu</li>
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
        <button className='btn'>Sign In</button>
    </div>
  )
}

export default Nav