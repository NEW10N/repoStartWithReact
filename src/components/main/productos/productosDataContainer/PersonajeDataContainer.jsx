import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import PersonajeData from './PersonajeData';

const PersonajeDataContainer = () => {

    let { id } = useParams();
    // console.log(id);
    const [personaje,setPersonaje] = useState({})
    
    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => setPersonaje(res.data))
    }, [])
    
    // console.log(personaje)
    return (
        <PersonajeData personaje ={personaje}/>
    )
}

export default PersonajeDataContainer