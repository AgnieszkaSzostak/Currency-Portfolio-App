import localStorageTypes from "./localStorage.types"

const initState = {
    data: []
}

export const localStorageReducer = (state = initState, action) => {
    switch(action.type) {
        case localStorageTypes.SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        default: 
            return state
    }
}