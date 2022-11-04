import React from 'react';
import styled from 'styled-components';
import ProductContainer from './ProductContainer/ProductContainer'

const DivProducts = styled.div`
background-color: gray;
margin: 10px;
flex-grow: 1;
display:flex;
flex-direction:row;
flex-wrap: wrap;
justify-content: space-around;
`;

const ProductsContainer = () => {
  let listaProductos = [{
    id:1,
    nombre:"Macbook Pro 2021",
    imagen:"https://i.ytimg.com/vi/OUtwINwfdR0/maxresdefault.jpg",
    stock:20,
    precio:35000
}
,{
  id:2,
  nombre:"Mac",
  imagen:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0U3_FV404?wid=1420&hei=930&fmt=png-alpha&.v=1645143356602",
  stock:10,
  precio:40000
}
,{
  id:3,
  nombre:"XBOX",
  imagen:"https://www.cyberpuerta.mx/img/product/M/CP-MICROSOFT-RRS-00006-1.jpg",
  stock:7,
  precio:8000
}
,{
  id:4,
  nombre:"Iphone 13 Pro",
  imagen:"https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00750622734354l.jpg",
  stock:13,
  precio:23000
}
,{
  id:5,
  nombre:"MateView 28' ",
  imagen:"https://i.blogs.es/7f0241/huawei-monitores/450_1000.jpg",
  stock:11,
  precio:13000
}


]
    
  return (
    <>
    <h1>Productos</h1>
        <br />
    <DivProducts>        
        <ProductContainer listaProductos={listaProductos}/>
    </DivProducts>
    </>
  )
}

export default ProductsContainer