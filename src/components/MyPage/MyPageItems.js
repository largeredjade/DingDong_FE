import styled from "styled-components";

function MyPage() {
    return (
        <>
            <Wrapper>
                <ItemBox>
                    <InfoClub>김나연의 동아리 <span>멋쟁이사자처럼</span></InfoClub>
                </ItemBox>
                <BtnItemBox>
                    <BtnQR><p>출석 QR<br/>생성하기</p></BtnQR>
                    <BtnModify><p>동아리 정보</p><p>수정하기</p></BtnModify>
                </BtnItemBox>
            </Wrapper>
            
        </>

    );
}

export default MyPage;

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
    }
    width: 140px;
    height: 130px;
    border-radius: 20px;
    border: 2px solid ${({theme})=> theme.colors.lightGray};
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }
`;
const BtnModify = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
        font-size: 18px;
    }
    width: 140px;
    height: 130px;
    border-radius: 20px;
    border: 2px solid ${({theme})=> theme.colors.lightGray};
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }
`;