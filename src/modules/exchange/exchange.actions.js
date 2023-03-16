import walletTypes from "./exchange.types";
import ExchangeAPI from './exchange.api'

const api = new ExchangeAPI();

export const setCurrencyAction = (currency) => {
    return {
        type: walletTypes.SET_CURRENCY,
        payload: currency
    }
}


export const saveExchange = (walletObject) => {
    const {amount, price, currency} = walletObject;
    return function thunk(dispatch) {
        api.getExchangeValue(currency)
        .then(resp => {
            const fixedAmount = Number(amount).toFixed(2);
            const fixedPrice = Number(price).toFixed(2);
            const rate = resp.rates['PLN'].toFixed(2);
            const currentValue = (Number(rate) * Number(fixedAmount)).toFixed(2);
            const previousValue = Number(fixedAmount) * Number(fixedPrice);

            return {...walletObject, 
                price: fixedPrice,
                currentRate: Number(rate),
                currentValue: currentValue,
                profit: (currentValue - previousValue).toFixed(2) 
            }
            })
        .then(resp => dispatch(setCurrencyAction(resp)))

    }
}
