/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import StyledWallet from './Wallet.styled'
import { useDispatch, useSelector } from "react-redux"
import { loadData } from "../../modules/localStorage/localStorage.actions";
import { saveExchange } from "../../modules/exchange/exchange.actions";
import { v4 as uuidv4 } from 'uuid';
import { walletHeadings } from "../../helpers/fields";

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
        <StyledWallet className="wallet">  
            <thead className="wallet__header">
                <tr className="wallet__row">
                    {walletHeadings.map(heading => <th key={heading} className="wallet__heading">{heading}</th>)}
                </tr>
            </thead>
            <tbody className="wallet__body">
                {exchangesState.length > 0 
                    ? exchangesState.map(element => <tr className="wallet__row" key={uuidv4()}>
                        <td className="wallet__cell">{element.currency}</td>
                        <td className="wallet__cell">{element.amount}</td>
                        <td className="wallet__cell">{element.purchaseDate}</td>
                        <td className="wallet__cell">{element.price}zł</td>
                        <td className="wallet__cell">{element.currentRate}zł</td>
                        <td className="wallet__cell">{element.currentValue}zł</td>
                        <td className="wallet__cell">{element.profit}zł</td>
                    </tr>)
                    : null}
            </tbody>
        </StyledWallet>
    )
}

export default Wallet