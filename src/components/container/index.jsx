import React, { useState } from 'react'
import './container.scss';
import Header from '../header';
import Product from '../product';


function Contaner() {
  const [isLoggIn,setIsLoggedIn]=useState(false)

  return (
    <div className='container'>
        <Header isLoggIn={isLoggIn} setIsLoggedIn={setIsLoggedIn}/>
        <Product isLoggIn={isLoggIn}/>
    </div>
  )
}

export default Contaner