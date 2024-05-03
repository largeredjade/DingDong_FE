import styled from "styled-components";

function JoinItems() {
    return (
        <>
            <Wrapper>
                <ItemBox>
                    <p>이름</p>
                    <WriteInput placeholder={'실명을 입력해 주세요.'}/>
                </ItemBox>
                <ItemBox>
                    <p>학번</p>
                    <WriteInput placeholder={'202012345'}/>
                </ItemBox>
                <ItemBox>
                    <p>비밀번호</p>
                    <WriteInput placeholder={'비밀번호를 입력해 주세요.'}/>
                </ItemBox>
                <ItemBox>
                    <p>비밀번호 확인</p>
                    <WriteInput placeholder={'동일한 비밀번호를 입력해 주세요.'}/>
                </ItemBox>
                <Agreement>
                    o 개인정보 수집에 동의합니다.
                </Agreement>
                <JoinBtnBox>
                    <JoinBtn>회원가입</JoinBtn>
                </JoinBtnBox>
            </Wrapper>
        </>

    );
}

export default JoinItems;


const Wrapper = styled.div`
    display: grid;
    grid-row: 6;

`
const ItemBox = styled.div`
    color: ${({theme})=> theme.colors.darkGray};
    margin-bottom: 20px;
    p{
        font-size: 20px;
    }
`


const WriteInput = styled.input`
    font-size: 20px;
    margin-top:5px;
    padding-left: 16px;
    width: 314px;
    height: 51px;
    border-radius: 20px;
    border: 2px solid ${({theme})=> theme.colors.lightGray};
    color: ${({theme})=> theme.colors.darkGray};
    outline: none;
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }
    
    
`
const Agreement = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    font-size: 15px;
    color: ${({theme})=> theme.colors.darkGray};

`

const JoinBtnBox = styled.div`
    display: flex;
    justify-content: center;
`
const JoinBtn = styled.button`
    margin: 25px ;
    color: ${({theme})=> theme.colors.darkGray};
    font-size: 20px;
    width: 220px;
    height: 51px;
    border-radius: 20px;
    background: ${({theme})=>theme.backgroundColor.mainColorDark};;
    
`