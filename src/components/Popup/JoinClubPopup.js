import styled from "styled-components";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function JoinClubPopup() {
    const [code,setCode] = useState('')
    const navigation = useNavigate()

    const handleCode = (e)=>{
        setCode(e.target.value)
        console.log('e.target.value:',e.target.value);
    }

    const handleSubmit = ()=>{
        if(code == ''){
            alert('다시 입력해 주세요.')
        }else{
            alert('가입 성공!')
            navigation('/main')
        }
    }
    return (
        <>
            <Wrapper>
                <PopupContent>
                    <InformJoin>
                        <p>동아리 가입코드 입력이 필요합니다.</p>
                        <WriteInput
                            onChange={handleCode}
                            placeholder={'동아리 가입코드를 입력해 주세요.'}/>
                        <OkBtn onClick={handleSubmit}>확인</OkBtn>
                    </InformJoin>
                </PopupContent>
            </Wrapper>
        </>

    );
}

export default JoinClubPopup;

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
    z-index: 1;
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
    height: 256px;
`;

const InformJoin = styled.div`
    margin-top: 20px;
    p{
        color: ${({theme})=> theme.colors.darkGray};
        font-weight: bold;
        font-size: 22px;
        margin: 10px;
    }
    `

const WriteInput = styled.input`
    width: 274px;
    height: 56px;
    border: 2px solid ${({theme})=> theme.colors.lightGray};
    border-radius: 20px;
    color: ${({theme})=> theme.colors.darkGray};
    outline: none;
    font-size: 16px;
    padding-left: 16px;
`
const OkBtn = styled.button`
    margin-top: 15px;
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