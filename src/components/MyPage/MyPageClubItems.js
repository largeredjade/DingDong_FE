import {Link, useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import {removeCookie} from "../../auth/cookie";
import {getCookie} from "../../auth/cookie";
import axiosInstance from '../../lib/axios';

function MyPageClubItems({data}) {
    const navigate = useNavigate();
    const accessToken = getCookie('access');
    console.log(data);
    console.log(data.registered_clubs[0]);
    const handleLogout = ()=>{
        removeCookie('access')
        navigate('/main')
    }

    async function handleDelete (){
        try{
            const response = await axiosInstance.delete(`/clubs/${data.registered_clubs[0].club_id}/delete/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            console.log('삭제 response:::',response);
        }catch (error){
            console.error("API call error:", error);

        }
    }

    return (
        <>
            {data&&(
                <Wrapper key={data.user_id}>
                    <ItemBox>
                        <RegisterInfo>내가 가입한 동아리</RegisterInfo>
                    </ItemBox>
                    <ClubBtnBox>
                        {data.joined_clubs.map((i)=>(
                        <ClubLink key={i.club_id}  to= {`/mypage/joinclub/${i.club_id}/${i.qr_id}`}>
                            {i.name}
                        </ClubLink>
                        ))}
                    </ClubBtnBox>
                    <LogoutBtnBox>
                        <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
                        <p>정말 동아리 폐지를 원하시나요?</p>
                        <DeleteBtn onClick={handleDelete}>동아리 폐지하기</DeleteBtn>
                    </LogoutBtnBox>
                </Wrapper>
            )}
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
    display: grid;
    grid-template-rows: auto auto;
    justify-content: center;
    p{  

        margin-left: 25px;
        font-size: 15px;
        color: ${({theme})=> theme.colors.lightGray};
    }
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

const DeleteBtn = styled.button`
    color: ${({theme})=> theme.colors.lightGray};
    font-size: 15px;
    width: 130px;
    height: 20px;
    margin-top:10px;
    margin-left: 60px;
    font-weight: 600;
`
