import axios from 'axios'


export const getPokemon = (name) => {
    
    return async(dispatch) => {
        try {
            if(name){
          const pokemonsName = await axios({
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon/${name}`
            })
            return dispatch({
                type: 'GET_POKEMON',
                payload: pokemonsName.data
            })
            }else{
                alert(`No se pudo encontar el ${name}`)
            } 
        } catch (error) {
            console.log(error)
        }
    }
}

export const GET_POKEMON = "GET_POKEMON"

export const getPokemonId = (id) => {

    return async(dispatch) => {
        try {
            if(id){
                const pokemonsId = await axios({
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon/${id}`
            })
            return dispatch({
                type: GET_POKEMON,
                payload: pokemonsId.data
            })
            }else{
                alert(`No se pudo encontar el ${id}`)
            }
        } catch (error) {
            console.log(error)
        }
    }
}