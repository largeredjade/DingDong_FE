import styled from "styled-components";
import {useState} from "react";
import QrPopup from "../Popup/QrPopup";
import {Link, useLocation, useNavigate} from "react-router-dom";

function MyPageItems({data}) {
    const [isShowQr, setIsShowQr] =useState(false)

    const handleQrPopup = ()=>{
        setIsShowQr(!isShowQr)
    }

    return (
        <>
            {data.registered_clubs.length > 0 ?(
                <>
                    {isShowQr && <QrPopup onChange={handleQrPopup} qr_code={data.registered_clubs[0].qr_url}/>}
                    <Wrapper key={data.user_id}>
                        <ItemBox>
                            <InfoClub>{data.name}의 동아리 {data.registered_clubs.map((i)=>(
                                <span>{i.name}</span>
                            ))}
                            </InfoClub>
                        </ItemBox>
                        <BtnItemBox>
                            <BtnQR onClick={handleQrPopup}><p>출석 QR<br/>생성하기</p></BtnQR>
                            {data.registered_clubs.map((i)=>(
                                <Link to={`/mypage/clubedit/${i.club_id}`}>
                            <BtnModify>
                                <p>동아리 정보</p><p>수정하기</p>
                            </BtnModify>
                                </Link>
                                ))}
                        </BtnItemBox>
                    </Wrapper>
                </>
            ):null}
        </>

    );
}

export default MyPageItems;

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    margin-bottom: 35px;
`;
const ItemBox = styled.div`
    color: ${({theme})=> theme.colors.darkGray};
    margin-bottom: 20px;
`;
const InfoClub = styled.div`
    font-size: 20px;
    span{
        font-weight: bold;
        font-size: 25px;
    }
`;
const BtnItemBox = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto auto;
    grid-gap:44px;
    justify-content: center;
    color: ${({theme})=> theme.colors.darkGray};
    
`;
const BtnQR = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
        font-size: 18px;
        line-height: 1.3;
        color: ${({theme})=> theme.colors.darkGray};

    }
    width: 140px;
    height: 130px;
    border-radius: 20px;
    border: 2px solid ${({theme})=> theme.colors.lightGray};
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }
`;
const BtnModify = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
        font-size: 18px;
        color: ${({theme})=> theme.colors.darkGray};

    }
    width: 140px;
    height: 130px;
    border-radius: 20px;
    border: 2px solid ${({theme})=> theme.colors.lightGray};
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }
`;