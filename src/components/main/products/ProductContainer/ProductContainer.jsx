import React from 'react'
import CardProductManager from './CardProduct/CardProductManager'

function ProductContainer({listaProductos}) {
  
// let {nombre,imagen,stock,requerido,} = producto
  return (
    listaProductos.map(element =>{
      return <CardProductManager producto = {element}/>
    })
    // listaProductos.map(element =>{
      // return
      // <CardProductManager producto = {listaProductos[0]}/>
    // })
  );
}

export default ProductContainer