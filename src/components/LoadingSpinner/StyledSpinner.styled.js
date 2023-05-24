import styled from "styled-components";

const StyledSpinner = styled.div`

@keyframes spinner {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
} 
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #43AE9E; 
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;

`

export default StyledSpinner