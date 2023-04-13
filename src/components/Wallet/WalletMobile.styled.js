import styled from "styled-components";

const StyledWalletMobile = styled.table`
    border-collapse: separate;
    border-spacing: 0;
    text-align: left;
    margin: 3em;
    display: flex;
    border: 1px solid grey;
    border-radius: 1em;
    .wallet__row{
        display:flex;
        flex-direction: column;
    }
    .wallet__heading,
    .wallet__cell{
        margin: none;
        border-collapse: collapse;
        padding: 1rem;
    }
    .wallet__cell{
        text-align: right;
    }
    .wallet__heading {
        color: white;
        top: 0;
        left: 0;
        background-color: grey;
        cursor: pointer;
        text-transform: capitalize;
    }
    .wallet__body .wallet__row {
        background-color: white;
    }
`

export default StyledWalletMobile