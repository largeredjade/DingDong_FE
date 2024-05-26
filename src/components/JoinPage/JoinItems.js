import styled from "styled-components";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


function JoinItems() {
    const [values, setValues] = useState({
        student_id:'',
        username:'',
        password: '',
        password_check: ''
    })
    let navigate = useNavigate()


    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues((prevValues)=>({
            ...prevValues,
            [name]:value,
        }))
    };


    async function handleSubmit(e){
        e.preventDefault();
        console.log(values);

        if (values.username === '' || values.student_id === '' || values.password === '' || values.password_check === '') {
            alert('모든 필드를 입력해주세요.');
            return;
        }
        else if (values.password !== values.password_check) {
            alert('비밀번호가 일치하지 않습니다. 다시 입력해 주세요');
        }
        try {
            const response = await axios.post('https://dingdong7.pythonanywhere.com/signup/', values,{
                withCredentials: true
            });
            console.log('Response:', response);
            alert('회원가입 성공');
            navigate('/login');
        } catch (error) {
            console.error('회원가입 오류:', error);
            alert('회원가입에 실패했습니다. 다시 시도해주세요.', error.message);
        }
    }



    return (
        <>
            <Wrapper>
                <ItemBox>
                    <p>이름</p>
                    <WriteInput
                        id={'name'}
                        name={'username'}
                        value={values.username}
                        onChange={handleChange}
                        placeholder={'실명을 입력해 주세요.'}/>
                </ItemBox>
                <ItemBox>
                    <p>학번</p>
                    <WriteInput
                        id={'student_id'}
                        name={'student_id'}
                        value={values.student_id}
                        onChange={handleChange}
                        placeholder={'202012345'}/>
                </ItemBox>
                <ItemBox>
                    <p>비밀번호</p>
                    <WriteInput
                        id={'password'}
                        name={'password'}
                        value={values.password}
                        onChange={handleChange}
                        type={"password"}
                        placeholder={'한영 포함 9글자 이상 작성해 주세요.'}/>
                </ItemBox>
                <ItemBox>
                    <p>비밀번호 확인</p>
                    <WriteInput
                        id={'password_check'}
                        name={'password_check'}
                        value={values.password_check}
                        type={"password"}
                        onChange={handleChange}

                        placeholder={'동일한 비밀번호를 입력해 주세요.'}/>
                </ItemBox>
                <Agreement>
                    o 개인정보 수집에 동의합니다.
                </Agreement>
                <JoinBtnBox>
                    <JoinBtn onClick={handleSubmit} type={"submit"}>회원가입</JoinBtn>
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
    @media (max-width: ${({theme})=> theme.mobile}) {
        margin-top: 25px;
    }

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