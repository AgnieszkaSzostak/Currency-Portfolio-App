import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 2em;
    *{text-align: center};
    border-radius: 1em;
    background-color: white;
    margin-bottom: 2em;
    z-index: 1;
    box-shadow: 0 14px 28px rgba(0,0,0,0.03), 0 10px 10px rgba(0,0,0,0.0);
    label {
        text-align: left;
    }
`
export {StyledForm}