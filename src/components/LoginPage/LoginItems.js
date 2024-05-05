import {Link} from "react-router-dom";
import styled from "styled-components";

function LoginItems() {
    return (
        <>
            <Wrapper>
                <ItemBox>
                    <p>학번</p>
                    <WriteInput placeholder={'학번을 입력해 주세요.'}/>
                </ItemBox>
                <ItemBox>
                    <p>비밀번호</p>
                    <WriteInput placeholder={'비밀번호를 입력해 주세요.'}/>
                </ItemBox>
                <LoginBtnBox>
                    <LoginBtn>로그인</LoginBtn>
                </LoginBtnBox>
                <Link to={'/join'}>
                    <GotoJoin>
                        회원가입
                    </GotoJoin>
                </Link>
            </Wrapper>
        </>

    );
}

export default LoginItems;

const Wrapper = styled.div`
    display: grid;
    grid-row: 3;

`
const ItemBox = styled.div`
    color: ${({theme})=> theme.colors.darkGray};
    p{
        font-size: 20px;
        margin: 10px;
    }
`


const WriteInput = styled.input`
    font-size: 20px;
    margin: 10px 10px 20px 10px;
    padding-left: 16px;
    width: 314px;
    height: 51px;
    border-radius: 20px;
    border: 2px solid #B7B7B7;
    color: ${({theme})=> theme.colors.darkGray};
    outline: none;
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }

`

const LoginBtnBox = styled.div`
    display: flex;
    justify-content: center;
`
const LoginBtn = styled.button`
    margin: 27px ;
    color: ${({theme})=> theme.colors.darkGray};
    font-size: 20px;
    width: 220px;
    height: 51px;
    border-radius: 20px;
    background: ${({theme})=>theme.backgroundColor.mainColorDark};;
    
`

const GotoJoin = styled.div`
    display: flex;
    justify-content: center;
    font-size: 15px;
    color: ${({theme})=>theme.colors.darkGray};
`