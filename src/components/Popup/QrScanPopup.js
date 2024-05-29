import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import styled from "styled-components";


const QrScanPopup = () => {
    const [scannedText, setScannedText] = useState("");
    const [isOpen, setIsOpen] = useState(true);

    const handleScan = (data) => {
        if (data) {
            setScannedText(data.text);
            console.log('scannedText::::',scannedText);
            setIsOpen(false)

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