import localStorageTypes from "./localStorage.types"
import LocalStorageAPI from "./localStorage.api"

const api = new LocalStorageAPI();

export const setData = (data) => {
    return {
        type: localStorageTypes.SET_DATA,
        payload: data
    }
} 

export const loadData = (name) => {
    return function thunk(dispatch, getState) {
        const localStorageData = api.load(name)
        if(typeof localStorageData !== 'undefined'){
            dispatch(setData(localStorageData))
        }
    }
}
