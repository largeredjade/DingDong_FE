import styled from "styled-components";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function JoinItems() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [values, setValues] = useState({
        name:'',
        student_id:'',
        password: '',
    })
    const [checkPw, setCheckPw] = useState('')

    let navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues((prevValues)=>({
            ...prevValues,
            [name]:value,
        }))
    };



    const handleCheckPwChange = (e)=>{
        setCheckPw(e.target.value)
    }
    // async function handelSubmit(e){
    //     e.preventDefault();
    //     if (name === '' || studentId === '' || password === '' || checkPw === '') {
    //         alert('모든 필드를 입력해주세요.');
    //         return;
    //     }
    //     if (password !== checkPw) {
    //         alert('비밀번호가 일치하지 않습니다. 다시 입력해 주세요');
    //         return;
    //     } else {
    //         try {
    //             await axios.post('http://dingdong.com/api/users', {
    //                 name,
    //                 studentId,
    //                 password
    //             });
    //             console.log('유저정보:',name,studentId,password);
    //             alert('회원가입 성공');
    //             // 회원가입 성공 후 로그인 페이지로 이동
    //             navigate('/login')
    //         } catch (error) {
    //             console.error('회원가입 오류:', error);
    //             // 오류 처리 로직 추가
    //         }
    //     }
    // }

    function handelSubmit (e){
        e.preventDefault();
        if (values.student_id == '' || values.password =='' || values.name==''){
            alert('모든 필드를 채워주세요!')
        }
        if(values.password !== checkPw){
            alert('비밀번호가 일치하지 않습니다. 다시 입력해 주세요');
            return;
        }
        alert('회원가입 성공')
        navigate('/login')
    }



    return (
        <>
            <Wrapper>
                <ItemBox>
                    <p>이름</p>
                    <WriteInput
                        id={'name'}
                        name={'name'}
                        value={values.name}
                        onChange={handleChange}
                        placeholder={'실명을 입력해 주세요.'}/>
                </ItemBox>
                <ItemBox>
                    <p>학번</p>
                    <WriteInput
                        id={'student_id'}
                        name={'student_id'}
                        onChange={handleChange}
                        placeholder={'202012345'}/>
                </ItemBox>
                <ItemBox>
                    <p>비밀번호</p>
                    <WriteInput
                        id={'password'}
                        name={'password'}
                        onChange={handleChange}
                        type={"password"}
                        placeholder={'비밀번호를 입력해 주세요.'}/>
                </ItemBox>
                <ItemBox>
                    <p>비밀번호 확인</p>
                    <WriteInput
                        onChange={handleCheckPwChange}
                        type={"password"}
                        placeholder={'동일한 비밀번호를 입력해 주세요.'}/>
                </ItemBox>
                <Agreement>
                    o 개인정보 수집에 동의합니다.
                </Agreement>
                <JoinBtnBox>
                    <JoinBtn onClick={handelSubmit} type={"submit"}>회원가입</JoinBtn>
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