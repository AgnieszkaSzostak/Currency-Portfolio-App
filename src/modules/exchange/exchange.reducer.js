import walletTypes from "./exchange.types";

const initState = {
    data: [],
}

export const exchangeReducer = (state = initState, action) => {
    switch(action.type) {
        case walletTypes.SET_CURRENCY:
            return {
                ...state,
                data: [...state.data, action.payload]
            }

        default: 
            return state
    }
}