import {Link, useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {removeCookie} from "../../auth/cookie";

function MyPageClubItems({data,params}) {
    const navigate = useNavigate()
    const [localParams, setLocalParams] = useState(params);
    console.log(data);
    useEffect(() => {
    if (localParams.id) {
      navigate(`/mypage/joinclub/${localParams.id}`);
      console.log("params.id:", localParams);
    }
  }, [localParams, navigate]);

  const handleParams = (club_id) => {
    setLocalParams((prevParams) => ({
      ...prevParams,
      id: club_id,
    }));
  };


    const handleLogout = ()=>{
        removeCookie('access')
        navigate('/main')

    }
    return (
        <>
            {data&&(
                <Wrapper key={data.user_id}>
                    <ItemBox>
                        <RegisterInfo>내가 가입한 동아리</RegisterInfo>
                    </ItemBox>
                    <ClubBtnBox>
                        {data.registered_clubs.map((i)=>(
                        <ClubLink  key={i.club_id}  onClick={() => handleParams(i.club_id)}>
                            {i.name}
                        </ClubLink>
                        ))}
                        {data.joined_clubs.map((i)=>(
                        <ClubLink key={i.club_id}  onClick={() => handleParams(i.club_id)}>
                            {i.name}
                        </ClubLink>
                        ))}
                    </ClubBtnBox>
                    <LogoutBtnBox>
                        <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
                    </LogoutBtnBox>
                </Wrapper>)}
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
    background: ${({theme})=>theme.backgroundColor.mainColorDark};
`;
