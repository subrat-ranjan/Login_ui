import styled from "styled-components";
import loginImg from "./loginImg.png";
import Input from "./components/Input";
import Label from "./components/Label";
import InputGroup from "./components/InputGroup";
import Checkbox from "./components/CheckBox";
import { useState } from "react";
import Button from "./components/Button";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function App() {
    const [agree, setAgree] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginId, setloginId] = useState("");
    const [password, setpassword] = useState("");

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <MainContainer>
            <ImgContainer src={loginImg} />
            <LoginContainer>
                <Heading>Login</Heading>

                <InputGroup>
                    <Label lable="Login ID" />
                    <Input type="text" placeholder="Enter Login ID" value={loginId} onChange={(e) => setloginId(e.target.value)} />
                </InputGroup>

                <InputGroup>
                    <Label lable="Password" />
                    <div className="password_group">
                        <Input type={showPassword ? "text" : "password"} placeholder="Enter Password" value={password} onChange={(e) => setpassword(e.target.val)} />
                        <span onClick={handleTogglePassword} className="password_icon">
                            {showPassword ? <AiOutlineEye color="gray" size={20} /> : <AiOutlineEyeInvisible color="gray" size={20} />}
                        </span>
                    </div>
                </InputGroup>

                <LoginOptions>
                    <LoginOptionsRight>
                        <div className="checkbox_container">
                            <label>
                                <Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                            </label>
                            <p className="login_text">Remember Me</p>
                        </div>
                        <div className="agree_block">
                            <div className="checkbox_container">
                                <label>
                                    <Checkbox checked={agree} onChange={() => setAgree(!agree)} />
                                </label>
                                <p className="login_text">Agree to</p>
                            </div>
                            <a className="anchor_tag" style={{ marginLeft: 5 }} href="">
                                Terms & Conditions
                            </a>
                        </div>
                    </LoginOptionsRight>

                    <div>
                        <a className="change_pwd">Change password</a>
                    </div>
                </LoginOptions>

                <Button content="Login" />

                <div className="agree_block" style={{ marginTop: 15, fontWeight: 600, color: "#000" }}>
                    <p className="login_text">Don't have an account</p>
                    <a className="anchor_tag" style={{ marginLeft: 5 }} href="">
                        Register Here
                    </a>
                </div>
            </LoginContainer>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 95vw;
    margin: auto;

    @media only screen and (max-width: 800px) {
        flex-direction: column-reverse;
        margin-top: 10px;
        height: auto;
        margin: 20px 0px;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    width: 45%;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.16);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #ffffff;
    padding: 10px 20px;

    @media only screen and (max-width: 800px) {
        box-shadow: none;
        width: 70%;
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 600px) {
        width: 85%;
    }
`;

const ImgContainer = styled.img`
    height: auto;
    width: 45%;
    max-width: 450px;

    @media only screen and (max-width: 600px) {
        width: 60%;
    }
`;

const Heading = styled.h1`
    color: #04072f;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
`;

const LoginOptions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    width: 100%;

    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
    }
`;

const LoginOptionsRight = styled.div`
    display: flex;
    flex-direction: column;
`;

export default App;
