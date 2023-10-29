import styled from "styled-components";

export default function Label({ lable }) {
  return <StyledLabel>{lable}</StyledLabel>; 
}

const StyledLabel = styled.label`
  color: #04072f;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;