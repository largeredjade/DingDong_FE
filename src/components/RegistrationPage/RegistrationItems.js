import styled from "styled-components";
import { CameraIcon } from '../Icons/logos';
import RecruitmentItems from "../../components/RegistrationPage/RecruitmentItems";
import {useEffect, useMemo, useRef, useState} from "react";
import moment from "moment";

function RegistrationItems() {
    const fileInput = useRef(null);
    const [imgFile, setImgFile] = useState(null);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const today = new Date();
    const [date1, setDate1] = useState(moment(today).format("YYYY. MM. DD"));
    const [date2, setDate2] = useState(moment(today).format("YYYY. MM. DD"));
    const [recruitmentStatus, setRecruitmentStatus] = useState(false);


    const handleUploadBtn =(e)=>{
        fileInput.current.click();
    };


    const handleUploadFile  = (e) =>{
        const fileList = e.target.files;
        if (fileList && fileList[0]){
            const url = URL.createObjectURL(fileList[0]);
            console.log('url',url);

            setImgFile({
                file: fileList[0],
                thumbnail:url,
                type :fileList[0].type,
            });
        }
        console.log('e.target.files[0]',e.target.files[0]);
        console.log('imgFile',imgFile);



    };

    const showImage = useMemo(()=>{
        if (!imgFile && imgFile == null){
            return <CameraIcon/>;}
        return <img src={imgFile.thumbnail} alt={imgFile.type} onClick={handleUploadBtn}/>
    },[imgFile]);

    useEffect(() => {
        console.log('다시 한 번 실행됩니댜')

    }, [imgFile]);

    const handleToggleCalendar1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen2(false);
    };

    const handleToggleCalendar2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen1(false);
    };

    const handleDateChange1 = (selectedDate) => {
        setIsOpen1(false);
        setDate1(moment(selectedDate).format("YYYY. MM. DD"));
    };

    const handleDateChange2 = (selectedDate) => {
        setIsOpen2(false);
        setDate2(moment(selectedDate).format("YYYY. MM. DD"));
    };

    const handleRecruitmentStatusChange = () => {
        setRecruitmentStatus(!recruitmentStatus);
    };

    return (
        <>
            <Wrapper>
                <Box>
                    <CameraWrap>
                        <CameraBox>
                            <p>동아리 사진</p>
                            <FileUploadBtn onClick={handleUploadBtn}>
                                {showImage}
                            </FileUploadBtn>
                            <input
                                type={'file'}
                                ref={fileInput}
                                accept={'image/jpeg, image/jpg, image/png'}
                                onChange={handleUploadFile}
                                style={{display: "none"}}
                            />
                        </CameraBox>
                    </CameraWrap>
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
                    <RecruitmentItems
                        isOpen1={isOpen1}
                        isOpen2={isOpen2}
                        date1={date1}
                        date2={date2}
                        recruitmentStatus={recruitmentStatus}
                        handleToggleCalendar1={handleToggleCalendar1}
                        handleToggleCalendar2={handleToggleCalendar2}
                        handleDateChange1={handleDateChange1}
                        handleDateChange2={handleDateChange2}
                        handleRecruitmentStatusChange={handleRecruitmentStatusChange}
                    />
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
    border-radius: 30px;
    width: 350px;
    top: 216px;
    justify-content: center;
    background: #FFFFFF;
    border: 2px solid #CFE9DC;
`;

const CameraWrap = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`

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

const FileUploadBtn = styled.div`
    margin: 10px ;
    font-size: 20px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 2px solid #B7B7B7;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        object-fit: cover;
    }
`;

const WriteClubActivity = styled.textarea`
    font-size: 15px;
    margin: 10px 10px 20px 10px;
    padding-left: 16px;
    width: 294px;
    height: 80px;
    resize: none;
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