import React from 'react'

const navStyle = 'cursor-pointer hover:text-white transition-all hover:underline'

const NavBar = () => {
  return (
    <div className='w-screen flex fixed justify-between top-0 left-0 text-secondary py-6 px-20 backdrop-blur-md'>
      <div className='w-1/2'></div>
      <div className='space-x-5 text-sm flex'>
        <p className={navStyle}><span>00. </span>PROJECTS</p>
        <p className={navStyle}><span>01. </span>EXPERIENCE</p>
        <p className={navStyle}><span>02. </span>BLOGS</p>
        <p className={navStyle}><span>03. </span>CONTACT</p>
      </div>
    </div>
  )
}

export default NavBar