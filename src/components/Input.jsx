import styled from "styled-components";
export default function Input({ type, placeholder, value, onChange }) {
  return <StyledInput type={type} placeholder={placeholder} value={value}  onChange={onChange}/>;
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  border: 1px solid rgba(4, 7, 47, 0.40);
  padding: 10px 12px;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 10px;
  width: -webkit-fill-available;
  &:focus {
    display: inline-block;
    border: 1px solid rgba(4, 7, 47, 0.40);
  }
  &::placeholder {
    color: #737B86;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;