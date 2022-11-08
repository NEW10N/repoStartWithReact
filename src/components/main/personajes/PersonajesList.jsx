import React from 'react'
import Personaje from './Personaje'

const PersonajesList = ({ personajes }) => {
    // console.table(personajes)
    return (

        personajes.map((personaje, key) => {
            return <Personaje personaje={personaje} key={key} />
        })

    )
}

export default PersonajesList