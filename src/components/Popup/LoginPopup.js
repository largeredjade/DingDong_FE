import {useState} from "react";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {closePopup} from "../../redux/loginPopup";

function LoginPopup() {
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const handleClosePopup = () => {
        dispatch(closePopup());
        navigate('/main')
    };


    return (
        <>
            <Wrapper>
                <PopupContent>
                    <InformLogin>
                        <p>로그인이 필요합니다.</p>
                        <p>로그인 하시겠습니까?</p>
                        <Link to={'/join'}>
                            <span>회원가입</span>
                        </Link>
                        <BtnContainer>
                            <Btn onClick={handleClosePopup}>취소</Btn>
                            <Link to={'/login'}>
                                <Btn>확인</Btn>
                            </Link>
                        </BtnContainer>
                    </InformLogin>
                </PopupContent>
            </Wrapper>
        </>

    );
}

export default LoginPopup;


const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

const PopupContent = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border: 2px solid ${({theme})=>theme.colors.mainColorDark};
    text-align: center;
    width: 350px;
    height: 278px;
`;

const InformLogin = styled.div`
    margin-top: 20px;
    p{
        color: ${({theme})=> theme.colors.darkGray};
        font-weight: bold;
        font-size: 25px;
        margin: 10px;
    }
    span{
        color: ${({theme})=> theme.colors.lightGray};
        font-size: 20px;
        text-decoration: underline;
        text-decoration-thickness: 1px;

    }
`

const BtnContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

const Btn = styled.button`
    margin: 10px;
    background:  ${({theme})=> theme.backgroundColor.mainColor};
    width: 110px;
    height: 60px;
    border-radius: 20px;
    color: ${({theme})=>theme.colors.darkGray};
    font-weight: bold;
    font-size: 20px;
    &:hover{
        background:  ${({theme})=> theme.backgroundColor.mainColorDark};

    }
`

