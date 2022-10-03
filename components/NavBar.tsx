import React from 'react'

export const ahrefStyle = 'cursor-pointer hover:text-white transition-all hover:underline'

const NavBar = () => {
  return (
    <div className='w-screen flex fixed justify-between top-0 left-0 text-secondary py-6 px-20 backdrop-blur-sm z-10'>
      <div className='w-1/2'></div>
      <div className='space-x-5 text-sm flex'>
        <a href='' className={ahrefStyle}><span>00. </span>PROJECTS</a>
        <a href='' className={ahrefStyle}><span>01. </span>EXPERIENCE</a>
        <a href='' className={ahrefStyle}><span>02. </span>BLOGS</a>
        <a href='' className={ahrefStyle}><span>03. </span>CONTACT</a>
      </div>
    </div>
  )
}

export default NavBar