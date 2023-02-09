import React, { useState } from 'react'
import './product.scss';
import Nav from './nav';
import ProductContent from './product_content';

function Product({isLoggIn}) {
  const [urlName,setUrlName]=useState("All")
  console.log(urlName)

  return (
    <div className='context'>
        <Nav setUrlName={setUrlName}/>
        <ProductContent urlName={urlName} isLoggIn={isLoggIn} />
    </div>
  )
}

export default Product