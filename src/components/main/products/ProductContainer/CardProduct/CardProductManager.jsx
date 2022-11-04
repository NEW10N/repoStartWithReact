import React,{useState} from 'react'
import CardProduct from './CardProduct';

function CardProductManager({producto}) {

    
    const [tempProducto, settempProducto] = useState({...producto});
    console.log(tempProducto);

    function onAdd(add){
        let productCopy = {...tempProducto}
        productCopy.stock = productCopy.stock - add
        settempProducto(productCopy)
        
    }
  return (
    <CardProduct producto={tempProducto} onAdd={onAdd} />
  )
}

export default CardProductManager