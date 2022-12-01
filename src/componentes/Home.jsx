import React from 'react'
import { useSelector } from 'react-redux'
import Searchbar from '../componentes/SearchBar'


export default function Home() {
  const pokemonSearch = useSelector((state) => state.pokemon)

  return (
    <div>
      <h1 className='bg-blue-700 p-10 text-center text-5xl text-white '>Busca tu Pokemon</h1>
    <Searchbar/>
    {
        Object.keys(pokemonSearch).length === 0 ?
        (
          <p class='text-orange-700 mt-80 text-center text-3xl '>
            <h1>Digite un número o nombre de Pokemon </h1>
            <h1>para mostrar contenido </h1>
          </p>
        ):
        <div class="grid mt-40 place-items-center">
          <p className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
            <img className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pokemonSearch.sprites.other.home.front_default} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h2 className="mb-2 text-5xl text-center uppercase font-bold tracking-tight text-gray-900 dark:text-white">{pokemonSearch.name }</h2>
            <p className="mb-3 mt-10 font-normal text-center text-gray-700 dark:text-gray-400">Numero: {pokemonSearch.id}</p>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">Altura: {pokemonSearch.height + "cm"}</p>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">Peso: {pokemonSearch.weight + "kg"}</p>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">Tipo: {pokemonSearch.types.map(e => e.type.name + " ")}</p>
          </div>
        </p>
      </div>
        }
    </div>
  )
}


