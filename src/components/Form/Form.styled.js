import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 60%;
    padding: 2em 2em 4em 2em;
    *{text-align: center};
    border-radius: 1em;
    background-color: white;
    margin-bottom: 4em;
    z-index: 1;
    box-shadow: 0 14px 28px rgba(0,0,0,0.03), 0 10px 10px rgba(0,0,0,0.0);
    label {
        text-align: left;
        padding: 0.5em 0;
    }
    .form__submit {
        align-self: center;
        width: 4em;
        height: 4em;
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

`
export {StyledForm}