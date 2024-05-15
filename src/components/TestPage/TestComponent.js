import {Link} from "react-router-dom";
import styled from "styled-components";
import LoginPopup from "../Popup/LoginPopup";
import JoinPage from "../../pages/JoinPage";
import JoinClubPopup from "../Popup/JoinClubPopup";
import CameraPopup from "../Popup/CameraPopup";
import QrPopup from "../Popup/QrPopup";
import {useDispatch, useSelector} from "react-redux";
import {selectIsPopupShown, showPopup} from "../../redux/loginPopup";
import TestUpload from "./TestUpload";



function TestComponent() {
    const dispatch = useDispatch()
    const isPopupShown = useSelector(selectIsPopupShown);
    const handleLogin = () => {
        dispatch(showPopup());
    };

    return (
        <>
            <p> 테스트 페이지에 사용되는 컴포넌트!</p>
            <Link to={'/'}>
                <GotoBtn>
                    홈페이지로 이동하기
                </GotoBtn>
            </Link>
            <div>로그인 팝업 기능 테스트 </div>
            <PopupBtn onClick={handleLogin}>팝업띄우기</PopupBtn>
            {isPopupShown && <LoginPopup/>}
            {/*<LoginPopup/>*/}
            {/*<JoinClubPopup/>*/}
            <CameraPopup/>
            {/*<QrPopup/>*/}
            <TestUpload/>
        </>
    );
}

const GotoBtn = styled.button `
    width: 100px;
    height: 20%;
    border-radius: 20px;
    background: ${({theme}) => theme.backgroundColor.lightGray};
`
const PopupBtn = styled.button `
    width: 100px;
    height: 30px;
    border-radius: 20px;
    background: ${({theme}) => theme.backgroundColor.lightGray};
`

export default TestComponent;

