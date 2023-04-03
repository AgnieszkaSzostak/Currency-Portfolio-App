import { apiKey } from "../../config";

class ExchangeAPI {
    url = 'https://api.apilayer.com/exchangerates_data';
    options = {
        method: 'GET',
        headers: {
            apiKey,
        }
    }
    defaultCurrency = 'PLN'
    getExchangeValue(currency){
        return this._fetch(currency)
        .then(this.handleErrors)
        .then(resp => resp.json())
        .catch(error => console.log('error', error))
    }
    getHistoricalExchangeValue(date, currency){
        return this._fetch(currency, date)
        .then(this.handleErrors)
        .then(resp => resp.json())
        .catch(error => console.log('error', error))
        
    }
    handleErrors(resp) {
        if(!resp.ok) {
            throw Error(resp.statusText);
        }

        return resp;
    }
    _fetch(currency, date = `latest`) {
        return fetch(`${this.url}/${date}?symbols=${this.defaultCurrency}&base=${currency}`, this.options)
    }

}

export default ExchangeAPI