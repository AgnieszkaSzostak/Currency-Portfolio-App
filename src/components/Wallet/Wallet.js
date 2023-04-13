/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import StyledWalletDesktop from './WalletDesktop.styled'
import { useDispatch, useSelector } from "react-redux"
import { loadData } from "../../modules/localStorage/localStorage.actions";
import { saveExchange } from "../../modules/exchange/exchange.actions";
import { v4 as uuidv4 } from 'uuid';
import { walletHeadings } from "../../helpers/fields";
import StyledWalletMobile from "./WalletMobile.styled";

const Wallet = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 950px)");
    
        const handleMatchMedia = (event) => {
          setIsDesktop(event.matches);
        };
    
        handleMatchMedia(mediaQuery);
    
        mediaQuery.addEventListener("change", handleMatchMedia);
    
        return () => {
          mediaQuery.removeEventListener("change", handleMatchMedia);
        };
      }, []);


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
    
    if(exchangesState.length > 0) {
       return ( 
       <>
        {isDesktop 
            ? (
                <StyledWalletDesktop className="wallet--desktop">  
                    <thead className="wallet__header">
                        <tr className="wallet__row">
                            {walletHeadings.map(heading => <th key={heading} className="wallet__heading">{heading}</th>)}
                        </tr>
                    </thead>
                    <tbody className="wallet__body">
                            {exchangesState.map(element => <tr className="wallet__row" key={uuidv4()}>
                                <td className="wallet__cell">{element.currency}</td>
                                <td className="wallet__cell">{element.amount}</td>
                                <td className="wallet__cell">{element.purchaseDate}</td>
                                <td className="wallet__cell">{element.price}zł</td>
                                <td className="wallet__cell">{element.currentRate}zł</td>
                                <td className="wallet__cell">{element.currentValue}zł</td>
                                <td className="wallet__cell">{element.profit}zł</td>
                            </tr>)}
                    </tbody>
                </StyledWalletDesktop>
            )
            : exchangesState.map(element => (
                <StyledWalletMobile className="wallet--mobile">
                    <thead className="wallet__header">
                    <tr className="wallet__row">
                        {walletHeadings.map(heading => <th key={heading} className="wallet__heading">{heading}</th>)}
                    </tr>
                </thead>
                <tbody className="wallet__body">
                        <tr className="wallet__row">
                            <td className="wallet__cell">{element.currency}</td>
                            <td className="wallet__cell">{element.amount}</td>
                            <td className="wallet__cell">{element.purchaseDate}</td>
                            <td className="wallet__cell">{element.price}zł</td>
                            <td className="wallet__cell">{element.currentRate}zł</td>
                            <td className="wallet__cell">{element.currentValue}zł</td>
                            <td className="wallet__cell">{element.profit}zł</td>
                        </tr>
                </tbody>
                </StyledWalletMobile>
            ))
            }
        </>
        )
    }
}
export default Wallet