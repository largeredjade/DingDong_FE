import styled from "styled-components";
import Webcam from "react-webcam";
import {useCallback, useRef, useState} from "react";

function CameraPopup() {
    const [showCamera, setShowCamera] = useState(false);
    const webcamRef = useRef(null);

    const capture = useCallback(()=>{
        const imageSrc = webcamRef.current.getScreenshot()
        console.log('capture 성공')
    },[webcamRef])
    const handleCamera = ()=>{
        setShowCamera(!showCamera)
    }

    const videoConstraints = {
        width: 600,
        height: 720,
        facingMode: "user"
        // facingMode: { exact: "environment" }
    };

    return (
        <>
            <ShowCameraBtn onClick={handleCamera}>카메라 보이기</ShowCameraBtn>
            {showCamera &&(
                <Wrapper>
                    <Webcam
                        audio={false}
                        height={302}
                        screenshotFormat="image/jpeg"
                        width={302}
                        videoConstraints={videoConstraints}
                    >
                    </Webcam>
                    {({ getScreenshot }) => (
                        <button
                            onClick={() => {
                                const imageSrc = getScreenshot()
                            }}
                        >
                            Capture photo
                        </button>
                    )}
                </Wrapper>
            )}

        </>

    );
}

export default CameraPopup;

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
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border: 2px solid ${({theme})=>theme.colors.mainColorDark};
    text-align: center;
    width: 350px;
    height: 256px;
`;

const ShowCameraBtn = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 20px;
    background: ${({theme}) => theme.backgroundColor.mainColor};`