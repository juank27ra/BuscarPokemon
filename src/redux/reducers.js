import { GET_POKEMON } from './actions'

const initialState = {
    pokemon: {}
}

export default function rootReducers(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }
            default:
                return state;
        }
    };