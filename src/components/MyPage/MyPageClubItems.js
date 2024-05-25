import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {removeCookie} from "../../auth/cookie";

function MyPageClubItems({data}) {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        removeCookie('access')
        navigate('/main')

    }
    return (
        <>
            {data.map((item)=>(
                <Wrapper key={item.user_id}>
                    <ItemBox>
                        <RegisterInfo>내가 가입한 동아리</RegisterInfo>
                    </ItemBox>
                    <ClubBtnBox>
                        {item.register_clubs.map((i)=>(
                        <ClubLink to={'/mypage/joinclub'}>{i.name}</ClubLink>
                        ))}
                        {item.joined_clubs.map((i)=>(
                        <ClubLink to={'/mypage/joinclub'}>{i.name}</ClubLink>
                        ))}
                    </ClubBtnBox>
                    <LogoutBtnBox>
                        <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
                    </LogoutBtnBox>
                </Wrapper>
            ))}
        </>

    );
}

export default MyPageClubItems;


const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    justify-content: center;
    
`;
const ItemBox = styled.div`
    color: ${({theme})=> theme.colors.darkGray};
`;
const RegisterInfo = styled.div`
    font-size: 20px;
`
const ClubBtnBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const ClubLink = styled(Link)`
    font-size: 18px;
    margin-top:20px;
    font-weight: bold;
    width: 320px;
    height: 56px;
    padding-top:16px;
    border-radius: 20px;
    color: ${({theme})=> theme.colors.darkGray};
    border: 2px solid ${({theme})=> theme.colors.lightGray};
    text-align: left;
    padding-left: 16px;
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }
`;
const LogoutBtnBox = styled.div`
    display: flex;
    justify-content: center;
`;
const LogoutBtn = styled.button`
    margin: 25px ;
    color: ${({theme})=> theme.colors.darkGray};
    font-size: 20px;
    width: 220px;
    height: 51px;
    border-radius: 20px;
    background: ${({theme})=>theme.backgroundColor.mainColorDark};;
`;
