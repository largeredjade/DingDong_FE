import {Link,  useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {closePopup} from "../../redux/loginPopup";
import axios from "axios";
import {setCookie} from "../../auth/cookie";


function LoginItems() {
    const [_isSuccess, setIsSuccess] = useState(false)
    const [values, setValues] = useState({
        student_id:'',
        password: '',
    })
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues((prevValues)=>({
            ...prevValues,
            [name]:value,
        }))
    };

    // api 연동
    async function handleSubmit (e){
        e.preventDefault();
        if (values.student_id == '' || values.password ==''){
            alert('모든 필드를 채워주세요!')
        }else{
            try{
               const response = await axios.post('https://dingdong7.pythonanywhere.com/login/',values,{withCredentials: true})
                console.log('Response:', response);
               setCookie('user_id', response.data.user.user_id)
                setCookie("access",response.data.token.access)
                dispatch(closePopup());
                navigate('/main')
            }catch (error){
                alert('로그인에 실패했습니다. 다시 시도해 주세요.')
                console.log("error:",error);
            }
        }

      }





    return (
        <>
            <Wrapper>
                <ItemBox>
                    <p>학번</p>
                    <WriteInput
                        id = 'student_id'
                        name={'student_id'}
                        value={values.student_id}
                        onChange={handleChange}
                        placeholder={'학번을 입력해 주세요.'}/>
                </ItemBox>
                <ItemBox>
                    <p>비밀번호</p>
                    <WriteInput
                        id = 'password'
                        name={'password'}
                        value={values.password}
                        type={"password"}
                        onChange={handleChange}
                        placeholder={'비밀번호를 입력해 주세요.'}/>
                </ItemBox>
                <LoginBtnBox>
                    <LoginBtn type={"submit"} onClick={handleSubmit}>로그인</LoginBtn>
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
    @media (max-width: ${({theme})=> theme.mobile}) {
        margin: 5px 5px 10px 5px;
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