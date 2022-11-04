import React from 'react'
import Product from './Product'

const ProductList = ({products}) => {
    // const {productsD} = products
    console.log("Lista Productos",products)
  return (
    <>
    {products.map((element,key) =>{
        return <Product producto ={element} key={key}/>
        // return <div>nnombre {element.title} </div>
    })}
    </>
  )
}

export default ProductList