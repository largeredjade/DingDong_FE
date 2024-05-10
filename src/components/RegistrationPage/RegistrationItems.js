import { useState } from 'react';
import styled from "styled-components";
import { CameraIcon } from '../Icons/logos';

function RegistrationItems() {
    // const [isRecruiting, setIsRecruiting] = useState(false);

    // const handleRecruitingChange = () => {
    //     setIsRecruiting(!isRecruiting);
    // };

    return (
        <>
            <Wrapper>
                <Box>
                    <CameraBox>
                        <p>동아리 사진</p>
                        <FileUploadBtn><CameraIcon/></FileUploadBtn>
                    </CameraBox>
                    <ItemBox>
                        <p>동아리 이름</p>
                        <WriteInput placeholder={'우리 동아리 이름을 입력해 주세요'}/>                            
                    </ItemBox>
                    <ItemBox>
                        <p>동아리 가입 코드</p>
                        <WriteInput placeholder={'숫자를 입력해 주세요.'}/>
                    </ItemBox>
                    <ItemBox>
                        <p>활동 시간</p>
                        <WriteInput placeholder={'ex) 매주 목요일 오후 7시'}/>
                    </ItemBox>
                    <ItemBox>
                        <p>동아리 소개</p>
                        <WriteClubActivity placeholder={'우리 동아리에 대해 소개해 주세요'}/>
                    </ItemBox>
                    <ItemBox>
                        <p>활동 내용</p>
                        <WriteClubActivity placeholder={'우리 동아리의 작년 활동 혹은 올해 활동에 대해 작성해 주세요.'} rows="4"/>
                    </ItemBox>
                    <ItemBox>
                        <p>연락처</p>
                        <WriteInput placeholder={'ex) 010-1234-5678'}/>
                    </ItemBox>
                    <ItemBox>
                        <p>모집 여부</p>
                    </ItemBox>    
                </Box>
                <RegstrationBtnBox>
                    <RegstrationBtn>등록하기</RegstrationBtn>
                </RegstrationBtnBox>
            </Wrapper>
        </>
    );
}

export default RegistrationItems;

const Wrapper = styled.div`
    height: 100vh;

`;

const Box = styled.div`
    display: grid;
    grid-row:  8;
    border-radius: 20px;
    width: 350px;
    height: 1046px;
    top: 216px;
    justify-content: center;
    background: #FFFFFF;
    border: 2px solid #CFE9DC;
    border-radius: 30px;
`;

const CameraBox = styled.div`
    text-align: center;
    color: ${({theme})=> theme.colors.darkGray};
    margin-top: 10px;
    p{
        font-weight: bold;
        font-size: 20px;
        margin: 10px;
        text-align: center;
    } 
`

const ItemBox = styled.div`
    color: ${({theme})=> theme.colors.darkGray};
    p{
        font-weight: bold;
        font-size: 20px;
        margin: 10px;
    } 
`;

const FileUploadBtn = styled.button`
    margin: 10px ;
    font-size: 20px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 2px solid #B7B7B7;
`;

const WriteClubActivity = styled.textarea`
    font-size: 15px;
    margin: 10px 10px 20px 10px;
    padding-left: 16px;
    width: 294px;
    height: 80px;
    border-radius: 20px;
    border: 2px solid #B7B7B7;
    color: ${({theme})=> theme.colors.darkGray};
    outline: none;
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }
`

const WriteInput = styled.input`
    font-size: 15px;
    margin: 10px 10px 20px 10px;
    padding-left: 16px;
    width: 294px;
    height: 51px;
    border-radius: 20px;
    border: 2px solid #B7B7B7;
    color: ${({theme})=> theme.colors.darkGray};
    outline: none;
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }
`;

// const CheckboxContainer = styled.div`
//     display: flex;
//     align-items: center;
//     margin: 10px;
// `;

// const Checkbox = styled.div`
//     display: flex;
//     margin-right: 20px;
//     cursor: pointer;

//     input[type="checkbox"] {
//         display: none;
//     }

//     span {
//         display: inline-block;
//         width: 20px;
//         height: 20px;
//         border: 2px solid ${({theme})=> theme.colors.darkGray};
//         border-radius: 4px;
//         margin-right: 8px;
//         background-color: ${({checked}) => checked ? theme.colors.mainColorDark : 'transparent'};
//         transition: background-color 0.3s ease;
//     }
// `;

// const DateBox = styled.div`
//     display: flex;
//     margin-bottom: 30px;
//`

const RegstrationBtnBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const RegstrationBtn = styled.button`
    color: ${({theme})=> theme.colors.white};
    font-size: 20px;
    width: 220px;
    height: 51px;
    border-radius: 20px;
    margin: 10px;
    background: ${({theme})=>theme.colors.mainColor};
`;