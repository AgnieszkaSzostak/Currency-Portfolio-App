import styled from "styled-components";

const StyledWallet = styled.table`
    border-collapse: separate;
    border-spacing: 0;
    width: 800px;
    height: 200px;
    text-align: left;
    border-radius: 1em;
    margin: 3em;
    overflow: hidden;
    .wallet__heading,
    .wallet__cell{
        margin: none;
        border-collapse: collapse;
        padding: 1rem;
        text-align: center;
    }
    .wallet__heading {
        color: white;
        top: 0;
        left: 0;
        background-color: grey;
        cursor: pointer;
        text-transform: capitalize;
    }
    .wallet__body .wallet__row:nth-child(even) {
        background-color: rgba(255, 193, 104, 0.5)
    }
    .wallet__body .wallet__row:nth-child(odd) {
        background-color: white;
    }

`

export default StyledWallet