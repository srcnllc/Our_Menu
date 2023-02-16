import React, { useEffect, useState } from 'react'
import RestaurantJSON from '../../../restaurant.json'
import { AiOutlineUp ,AiOutlineDown } from "react-icons/ai";



function ProductContent({urlName,isLoggIn}) {
    const [product,setProduct]=useState(RestaurantJSON);
    const [altlist, setAltlist] = useState([]);

      
    useEffect(() => {
        (urlName !== "All") ?
       ( setAltlist(product.filter(item => item.category.toLowerCase() === `${urlName.toLowerCase()}`)))
        :setAltlist(product)
    },[urlName,product])
    function increase(item){
        (product.find((index)=>index.id === item.id)? setProduct([...product],item.price+=1):setProduct([...product]))
     }
     function decrease (item){
        (product.find((index)=>index.id === item.id)? setProduct([...product],item.price-=1):setProduct([...product]))
     }
  return (
    <div className='productBody'>
        {altlist.map((item)=>(
        <div className='card' key={item.id}>
            <div className="cartImage">
                <img src={item.img} alt={item.name} />
            </div>
            <div className="cartDesc">
                <div className="title">
                    <p className='titleName'>{item.name}</p>
                    <div className="price">
                        <span >{item.price}€</span>
                        {isLoggIn && <div className='price_Icon'>
                            <AiOutlineUp id='upPrice' onClick={()=>increase(item)}/>
                            <AiOutlineDown id='downPrice' onClick={()=>decrease(item)}/>
                            </div>} 
                    </div>
                </div>
                <div className="des">{item.desc}</div>
            </div>
        </div>
        ))}
    </div>
  )
}
export default ProductContent