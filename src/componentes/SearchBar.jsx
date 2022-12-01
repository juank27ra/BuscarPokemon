import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {getPokemon, getPokemonId} from '../redux/actions'



export default function Searchbar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [id, setId] = useState('')
    
function handleInputChange(e){
    setName(e.target.value)
    setId(e.target.value) 
}

function handleSubmit(e){
    e.preventDefault()
    if(!name && !id ){
        alert("Ingrese nombre de busqueda o numero")
    }else{
        try{ 
            dispatch(getPokemon(name))
            dispatch(getPokemonId(id))   
        }
        catch(e){
            console.log(e, "soy el error ")
        }
    }  
}

  return (
    <div class="grid mt-10 place-items-center">
    <div className="flex item border border-purple-200 rounded">
        <input
            type="text"
            className="block w-full px-4 py-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
            onChange= {(e) => handleInputChange(e) }
        />
        <button className="px-4 text-white bg-cyan-600 border-l rounded " type='submit' onClick={(e) => handleSubmit(e)}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
        </button>
    </div>
</div>
  )
}
