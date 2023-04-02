import styled from "styled-components";

const StyledWallet = styled.table`
    /* border-top: 1px solid #43AE9E;
    border-left: 1px solid #43AE9E;
    border-right: 1px solid #43AE9E;
    /* background-color: rgba(67, 174, 158, 0.5); */
    /* border-radius: 0.3em; */
    border-collapse: collapse;
    padding: 1rem;
    text-align: left;
    th, td {
    border-collapse: collapse;
    padding: 1rem;
    text-align: left;
}
thead th {
    color: white;
    position: sticky;
    top: 0;
    left: 0;
    background-color: grey;
    cursor: pointer;
    text-transform: capitalize;
}
tbody tr:nth-child(even) {
    background-color: rgba(255, 193, 104, 0.5)
}

tbody tr {
    --delay: .1s;
    transition: .5s ease-in-out var(--delay), background-color 0s;
}
`

export default StyledWallet