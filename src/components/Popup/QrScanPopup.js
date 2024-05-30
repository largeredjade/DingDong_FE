import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import styled from "styled-components";
import axiosInstance from '../../lib/axios'
import {getCookie} from "../../auth/cookie";

const QrScanPopup = ({data, data1}) => {
    const accessToken = getCookie('access');
    const [scannedText, setScannedText] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    const [showQrScan, setShowQrScan] = useState(false);
    console.log(data1)


    async function handleQrScan(scannedURL) { // 수정된 부분: scannedURL 매개변수 추가
        setShowQrScan(!showQrScan);
        if (!showQrScan) {
            try {
                const response = await axiosInstance.post(`/mypage/clubs/${data}/scan_qr/${data1}/`, {
                    qr_code_enter: scannedURL // 수정된 부분: scannedText 대신 qr_code_enter 사용
                }, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                setScannedText(response.data);
                console.log('출석 정보 전송 응답:', response);
            } catch (error) {
                console.error("출석 정보 전송 오류:", error);
            }
        }
    }

    const handleScan = (data) => {
        if (data) {
            const scannedURL = data.text;
            setScannedText(scannedURL);
            console.log('scannedText:', scannedURL);
            setIsOpen(false);
            handleQrScan(scannedURL); // 수정된 부분: handleQrScan에 scannedURL 전달
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    return (
        <>
            {isOpen &&
                <Wrapper>
                    <QrScanner
                        onScan={handleScan}
                        onError={handleError}
                        style={{ width: "100%", height: "100%" }}
                        facingMode="environment"
                    />
                    <p>{scannedText}</p>
                </Wrapper>}
        </>
    );
};

export default QrScanPopup;


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
    z-index: 1;
`;