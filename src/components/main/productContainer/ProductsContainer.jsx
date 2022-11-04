import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProductList from './ProductList';

const ProductsContainer = () => {
    const [count, setcount] = useState(0)
    const [products, setproducts] = useState([])

    useEffect(() => {
        // fetch('https://dummyjson.com/products')
        //     .then(res => res.json())
        //     .then(json => console.log(json))

        axios
            .get("https://dummyjson.com/products?limit=10&skip=10")
            .then((res) => setproducts(res.data.products));

    }, [])

    return (
        <>
        <ProductList products={products}/>
            {/* <div>ProductsContainer</div>
            <h3>Contador : {count}</h3>
            <button onClick ={()=>setcount(count + 1)}>Agregar</button> */}
        </>
    );
}

export default ProductsContainer