import styled from "styled-components";
import {QRCodeCanvas} from "qrcode.react";

function QrPopup({onChange, qr_code}) {
    console.log(qr_code);

    return (
        <>
            <Wrapper>
                <PopupContent>
                    <QrBox>
                        <QRCodeCanvas size={200} value={qr_code}/>
                    </QrBox>
                    <FinishedQrBtn onClick={onChange}> 출석 완료</FinishedQrBtn>
                </PopupContent>
            </Wrapper>
        </>

    );
}

export default QrPopup;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

const PopupContent = styled.div`

`;

const FinishedQrBtn = styled.button`
    margin-top: 30px;
    width: 220px;
    height: 51px;
    border-radius: 20px;
    background: ${({theme}) => theme.backgroundColor.mainColor};
    color: ${({theme})=>theme.colors.darkGray} ;
    font-size: 18px;
    `

const QrBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`