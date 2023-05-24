import styled from "styled-components";

const StyledForm = styled.form.attrs(props=>({
    noValidate: props.novalidate,
}))`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    padding: 2em 2em 3em 2em;
    *{text-align: center};
    border-radius: 1em;
    background-color: white;
    margin-bottom: 4em;
    z-index: 1;
    box-shadow: 0 14px 28px rgba(0,0,0,0.03), 0 10px 10px rgba(0,0,0,0.0);

    .form__container{
        color: #43AE9E;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: left;
        padding: 0.5em 0;
        width: 50%;
        position: relative;
    }
    .form__input,
    .form__select{
        width: 80%;
        padding: 0.5em 0;
        margin-top: 0.45em;
        border-radius: 0.3em;
        border: none;
        border-bottom: 2px solid #43AE9E;
    }
    .form__input:focus,
    .form__select:focus{
        border: none;
        outline: none;
        border-bottom: 2px solid #FFC168;
    }
    .form__input::placeholder{
        color: red;
    }
    .form__submit {
        align-self: center;
        width: 3.5em;
        height: 3.5em;
        background-color: #FFC168;
        border-radius: 0.3em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        bottom: -2em;
        transform: rotate(-45deg);
        box-shadow: 5px 5px 25px 0px rgba(0,0,0,0.2);
        
        input {
            border: none;
            background-color: transparent;
            font-size: 3em;
            color: white;
            transform: rotate(-45deg);
        }
    }
    .form__submit:hover{
        box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.1);
    }
  
    .form__error{
        color: red;
        font-size: small;
    }
  
    @media (max-width: 768px) {
        width: 90%;
    }
`
export {StyledForm}