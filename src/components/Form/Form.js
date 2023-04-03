/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { currencies } from "../../helpers/currencies"
import { StyledForm } from "./Form.styled"
import { useDispatch} from "react-redux"
import {saveExchange} from '../../modules/exchange/exchange.actions'
import { fields } from "../../helpers/fields"
import Field from "./Field"
import { validateForm } from "../../helpers/validator"
import ExchangeAPI from "../../modules/exchange/exchange.api"
import { v4 as uuidv4 } from 'uuid';
import LocalStorageAPI from "../../modules/localStorage/localStorage.api"

const Form = () => {
    const [form, setForm] = useState({
        currency: '',
        price: '',
        amount: '',
        purchaseDate: '',
    });
    const lsAPI = new LocalStorageAPI();
    const [errors, setErrors] = useState(null)

    const dispatch = useDispatch();
    const currencyOptionsList = () => {
        return (
            <>
                <option className="field__select-option" value="none">Select an Option</option>
                {currencies.map(curr => <option className="field__select-option" key={uuidv4()} value={curr}>{curr}</option>)}
            </>
            )
    }
    const handleSubmit = event => {
        event.preventDefault();
        const errors = validateForm(form)
        if(errors === null){
            dispatch(saveExchange(form));
            lsAPI.save('wallet', form);
            setForm({ 
                currency: '',
                price: '',
                amount: '',
                purchaseDate: ''
            })
        }else{
            setErrors(errors)
        }
    }
    
    const handleChange = event => {
        const {name, value} = event.target
        console.log(event);
        setForm({...form, [name]: value});
        setErrors({...errors, [name]: ''})
    }
    useEffect(()=> {
        if(/^\d{4}-\d{2}-\d{2}$/.test(form.purchaseDate) && form.currency){
            const api = new ExchangeAPI()
            api.getHistoricalExchangeValue(form.purchaseDate, form.currency)
                .then(resp => setForm({...form, price: Number(resp.rates['PLN']).toFixed(2)}))
        }
    },[form.purchaseDate, form.currency])
    const formElements = () => {
        return fields.map(element =>
            <React.Fragment key={element.name}>
            <Field 
                min={element.minDate}
                label={element.label} 
                type={element.type} 
                tag={element.tag} 
                name={element.name} 
                onChange={handleChange} 
                placeholder={element.placeholder}
                value={form[element.name]}
                error={
                    errors && errors[element.name] 
                        ?  errors[element.name]
                        : null
                }
                >{
                    element.tag === 'select'
                    ? currencyOptionsList()
                    : null
                }
            </Field>
        </React.Fragment>
        )
    }
    return (
        <StyledForm novalidate onSubmit={handleSubmit}>
            {formElements()}
            <div className="form__submit">
                <input type="submit" value="+"></input>
            </div>
        </StyledForm>
    )
}

export default Form