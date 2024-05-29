import styled from "styled-components";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axiosInstance from "../../lib/axios";
import {getCookie} from "../../auth/cookie";

function JoinClubPopup({club_id}) {
    const [isOpen, setIsOpen] =useState(true);
    const [code,setCode] = useState('')
    const navigation = useNavigate()
    const accessToken = getCookie('access')
    const handleCode = (e)=>{
        setCode(e.target.value)
    }


    async function handleSubmit(e){
        e.preventDefault();
        if(code===''){
            alert('가입 코드를 입력해 주세요!')
        }
        try {
            const response = await axiosInstance.post(`/clubs/${club_id}/club_code/`, {
                club_code_enter: code,
            },{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });
            console.log('Response:', response);
            alert('가입 성공!');
            navigation('/main');
        }  catch (error) {
            console.error('가입 오류:', error);
            if (error.response && error.response.status === 400) {
                if(error.response.data.detail ==='You are already a member of this club.'){
                    alert('이미 등록된 회원입니다.')
                }
                if(error.response.data.detail ==='The club code is incorrect.'){
                    alert('잘못된 가입 코드입니다. 다시 입력해 주세요.')
                }
            }
        }
    }

    const handleCancel = ()=>{
        setIsOpen(false)
    }


    return (
        <>
            {isOpen &&
                <Wrapper>
                    <PopupContent>
                        <InformJoin>
                            <p>동아리 가입코드 입력이 필요합니다.</p>
                            <WriteInput
                                onChange={handleCode}
                                placeholder={'동아리 가입코드를 입력해 주세요.'}/>
                            <BtnContainer>
                                <Btn onClick={handleSubmit}>확인</Btn>
                                <Btn onClick={handleCancel}>닫기</Btn>
                            </BtnContainer>

                        </InformJoin>
                    </PopupContent>
                </Wrapper>
            }

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

const BtnContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
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

