import styled from "styled-components";
import {useState} from "react";
import QrScanPopup from "../Popup/QrScanPopup";

function MyPageJoinClub({data}) {
    const [showQrScan, setShowQrScan] =useState(false);
    const handleQrScan = ()=>{
        setShowQrScan(!showQrScan)
    }

    return (
        <>
            {data.map((item)=> (
                <Wrapper key={item.user_id}>
                    <ItemBox>
                        <JoinClubinfo>내가 가입한 동아리 {item.register_clubs.map((i)=>(
                        <span>{i.name}</span>
                        ))}</JoinClubinfo>
                    </ItemBox>
                    <BtnItemBox>
                        <BtnCheckQR><p>출석 QR<br/>스캔하기</p></BtnCheckQR>
                    </BtnItemBox>
                </Wrapper>
            ))}
        </>

    );
}

export default MyPageJoinClub;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
`;
const ItemBox = styled.div`
    color: ${({theme})=> theme.colors.darkGray};
    margin-bottom: 25px;
`;
const JoinClubinfo = styled.div`
    font-size: 18px;
    span{
        font-weight: bold;
        font-size: 23px;
    }
`;
const BtnItemBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme})=> theme.colors.darkGray};
    
`;
const BtnCheckQR = styled.button`
    p{
        margin: 0;
        font-size: 18px;
        line-height: 1.3;
    }
    width: 140px;
    height: 130px;
    border-radius: 20px;
    border: 2px solid ${({theme})=> theme.colors.lightGray};
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }
`;