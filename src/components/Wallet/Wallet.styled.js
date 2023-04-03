import styled from "styled-components";

const StyledWallet = styled.table`
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
tbody tr:nth-child(odd) {
    background-color: white;
}


`

export default StyledWallet