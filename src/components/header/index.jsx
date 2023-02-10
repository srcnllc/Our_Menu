import React from 'react'
import './header.scss';


function Header({isLoggIn,setIsLoggedIn}) {
  console.log(isLoggIn)
  const handleLogin=() => {
    setIsLoggedIn(isLoggIn?false:true);
  }
  return (
    <> 
       <h1 className='header'>Our Menu</h1>
      <button className='button' onClick={()=>handleLogin()}>{isLoggIn ?'Çıkış yap':'Giriş Yap'}</button>
    </>
  )
}

export default Header