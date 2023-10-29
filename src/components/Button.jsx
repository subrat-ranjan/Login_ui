import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
width: 95%;
height: 40px;
margin-top: 15px;
border-radius: 8px;
background: #1575A7;
cursor: pointer;
border: none;
color: #fff;
&:hover {
   opacity: 0.8
  }
`;