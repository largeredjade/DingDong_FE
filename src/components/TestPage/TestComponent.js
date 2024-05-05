import {Link} from "react-router-dom";
import styled from "styled-components";
import LoginPopup from "../Popup/LoginPopup";
import JoinPage from "../../pages/JoinPage";
import JoinClubPopup from "../Popup/JoinClubPopup";
import CameraPopup from "../Popup/CameraPopup";
import QrPopup from "../Popup/QrPopup";

function TestComponent() {
    return (
        <>
            <p> 테스트 페이지에 사용되는 컴포넌트!</p>
            <Link to={'/'}>
                <GotoBtn>
                    홈페이지로 이동하기
                </GotoBtn>
            </Link>
            {/*<LoginPopup/>*/}
            {/*<JoinClubPopup/>*/}
            <CameraPopup/>
            {/*<QrPopup/>*/}
        </>
    );
}

const GotoBtn = styled.button `
    
    width: 100px;
    height: 20%;
    border-radius: 20px;
    background: ${({theme}) => theme.backgroundColor.lightGray};
    
    
`

export default TestComponent;

