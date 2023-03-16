/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import StyledWallet from './Wallet.styled'
import { useDispatch, useSelector } from "react-redux"
import { loadData } from "../../modules/localStorage/localStorage.actions";
import { saveExchange } from "../../modules/exchange/exchange.actions";
import { v4 as uuidv4 } from 'uuid';

const Wallet = () => {
    const exchangesState = useSelector(state =>state.exchanges.data)
    const lsState = useSelector(state => state.ls.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadData('wallet'));
    },[])

    useEffect(() => {
        if(lsState.length > 0) {
            lsState.map(exchange => dispatch(saveExchange(exchange)))
        }  
        
    },[lsState])
    
    return(
        <StyledWallet>  
            <thead>
                <tr>
                    <th>Waluta</th>
                    <th>Ilość</th>
                    <th>Data zakupu</th>
                    <th>Cena zakupu</th>
                    <th>Obecny kurs</th>
                    <th>Obecna wartość</th>
                    <th>Zysk/Strata</th>
                </tr>
            </thead>
            <tbody>
                {exchangesState.length > 0 
                    ? exchangesState.map(element => <tr key={uuidv4()}>
                        <td>{element.currency}</td>
                        <td>{element.amount}</td>
                        <td>{element.purchaseDate}</td>
                        <td>{element.price}zł</td>
                        <td>{element.currentRate}zł</td>
                        <td>{element.currentValue}zł</td>
                        <td>{element.profit}zł</td>
                    </tr>)
                    : null}
            </tbody>
        </StyledWallet>
    )
}

export default Wallet