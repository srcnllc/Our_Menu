import React, { useState } from 'react'

function Nav({setUrlName}) {
  const handleClick=(e)=>{
    setUrlName(e.target.innerText)
  }
  return (
    <ul className='nav'>
        <li className='navlink' onClick={handleClick}>All</li>
        <li className='navlink' onClick={handleClick}>Breakfast</li>
        <li className='navlink' onClick={handleClick}>Lunch</li>
        <li className='navlink' onClick={handleClick}>Shakes</li>
    </ul>
  )
}

export default Nav