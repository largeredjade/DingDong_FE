import styled from "styled-components";
import {QRCodeCanvas} from "qrcode.react";
import {useState} from "react";


function QrPopup() {

    return (
        <>
            <Wrapper>
                <PopupContent>
                    <QrBox>
                        <QRCodeCanvas size={200} value={"https://www.notion.so/hufsglobal/HUFS-12-e23a2e85170c4dca85a689949b424309"}/>
                    </QrBox>
                    <FinishedQrBtn> 출석 완료</FinishedQrBtn>
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