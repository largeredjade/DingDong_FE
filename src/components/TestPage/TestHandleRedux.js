import { useDispatch } from 'react-redux';
import {testLogin, testLogout} from "../../redux/test";
import styled from "styled-components";

function TestLogin() {
    const dispatch = useDispatch()
    return (
        <>
            <Btn onClick={() => {
                dispatch(testLogin({student_id: "202004158", pw: '123'}))
            }}>Login</Btn>

            <Btn onClick={() => {
                dispatch(testLogout())
            }}>Logout
            </Btn>
        </>
    );
}

export default TestLogin;

const Btn = styled.button`
    padding: 10px;
    margin: 10px;
    border: 2px solid black;
`
