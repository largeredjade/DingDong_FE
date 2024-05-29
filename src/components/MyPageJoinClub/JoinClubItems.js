import styled from "styled-components";
import {useState, useEffect} from "react";
import QrScanPopup from "../Popup/QrScanPopup";
import {useNavigate, useParams} from "react-router-dom";
import {getCookie} from "../../auth/cookie";
import axiosInstance from '../../lib/axios'

function JoinClubItems() {
    let navigate = useNavigate();
    const params = useParams();
    console.log(params);

    const accessToken = getCookie('access');
    const user_id = getCookie('user_id');
    const club_id = params.club_id;
    const qr_id =params.qr_id;
    
    console.log(params.club_id);
    console.log(params.qr_id);


    const [userData, setUserData] = useState();
    const [clubData, setClubData] = useState({
        status: "",
        club_id: 0,
        message: "",
        attendance_date: "",
        user_id: 0,
        username: ""
    });
    const [showQrScan, setShowQrScan] = useState(false);

    async function fetchUserData() {
        try {
            const response = await axiosInstance.get(`/mypage/${user_id}/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            console.log(response);
            setUserData(response.data);
        } catch (error) {
            console.error("API 호출 오류:", error);
        }
    }

    async function handleQrScan() {
        setShowQrScan(!showQrScan);
        if (!showQrScan) {
            try {
                const response = await axiosInstance.put(`/mypage/clubs/${club_id}/scan_qr/${qr_id}`, {
                    ...clubData
                }, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                console.log('출석 정보 전송 응답:', response);
            } catch (error) {
                console.error("출석 정보 전송 오류:", error);
            }
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <>
            {userData && (
                <Wrapper key={userData.user_id}>
                    <ItemBox>
                        <JoinClubinfo>내가 가입한 동아리 {userData.registered_clubs.map((i) => (
                            <span key={i.id}>{i.name}</span>
                        ))}</JoinClubinfo>
                    </ItemBox>
                    <BtnItemBox>
                        <BtnCheckQR onClick={handleQrScan}><p>출석 QR<br />스캔하기</p></BtnCheckQR>
                        {showQrScan && <QrScanPopup />}
                    </BtnItemBox>
                </Wrapper>
            )}
        </>
    );
}

export default JoinClubItems;

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