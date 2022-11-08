import React from 'react'
import Productos from './Productos'

const ProductosList = ({ productos }) => {
    // console.table(personajes)
    return (

        productos.map((prodcutos, key) => {
            return <Productos productos={productos} key={key} />
        })

    )
}

export default ProductosList