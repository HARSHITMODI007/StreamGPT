import React from 'react'
import logo from "../Utils/logo.webp"
const Header = () => {
  
  return (
    <div className='bg-black-600 absolute px-8 py-2 bg-gradient-to-b from-gray z-10'>
      <img src={logo} alt="StreamGPT Logo" style={{ width: '150px', height: '100px' }} />
      
  
    </div>)
  
}

export default Header
