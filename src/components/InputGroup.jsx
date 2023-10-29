import styled from "styled-components";

export default function InputGroup({ children }) {
  return <StyledInputGroup>{children}</StyledInputGroup>;
}

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 25px;
  width: 100%;
`;