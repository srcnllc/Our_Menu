import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import RestaurantJSON from '../../../restaurant.json'
import { AiOutlineUp ,AiOutlineDown ,AiOutlineArrowLeft,AiOutlineArrowUp} from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";


function ProductContent({urlName,isLoggIn}) {
    const [product,setProduct]=useState(RestaurantJSON);
    const [altlist, setAltlist] = useState([]);
    const isDesktopOrMobile = useMediaQuery({
        query: '(max-width: 600px)'
      })
      
    useEffect(() => {
        (urlName !== "All") ?
       ( setAltlist(product.filter(item => item.category.toLowerCase() === `${urlName.toLowerCase()}`)))
        :setAltlist(product)
    },[urlName,product])
    function increase(item){
        (product.find((index)=>index.id === item.id)? setProduct([...product],item.price+=1):setProduct([...product]))
     }
     function decrease (item){
        (product.find((index)=>index.id === item.id)? setProduct([...product],(item.price > 0 ? item.price -=1 : 0)):setProduct([...product]))
     } 
     function removeProduct (item){
        setProduct(product.filter((index)=>index.id !== item.id))
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
            {isLoggIn && 
                <div className="delete">
            {isDesktopOrMobile ?<AiOutlineArrowUp/>:<AiOutlineArrowLeft/>} 
                <RiDeleteBin2Fill className='deleteButton' onClick={()=>removeProduct(item)}/> 
            </div>
            }
        
        </div>
        ))}
    </div>
  )
}
export default ProductContent