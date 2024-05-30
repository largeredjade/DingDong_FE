import styled from "styled-components";
import {useState, useEffect} from "react";
import QrScanPopup from "../Popup/QrScanPopup";
import {useNavigate, useParams} from "react-router-dom";
import {getCookie} from "../../auth/cookie";
import axiosInstance from '../../lib/axios'

function JoinClubItems() {
    let navigate = useNavigate();
    const params = useParams();
    const [userData, setUserData] = useState();

    const accessToken = getCookie('access');
    const user_id = getCookie('user_id');
    const club_id = parseInt(params.club_id); // club_id를 정수로 변환
    const qr_id = params.qr_id;

    const [showQrScan, setShowQrScan] = useState(false);

    async function fetchUserData() {
        try {
            const response = await axiosInstance.get(`/mypage/${user_id}/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setUserData(response.data);
        } catch (error) {
            console.error("API 호출 오류:", error);
        }
    }

    const handleQrScan = () => {
        setShowQrScan(!showQrScan);
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    if (!userData) return null;

    const isRegisteredClub = userData.registered_clubs.some((club) => club.club_id === club_id);
    const isJoinedClub = userData.joined_clubs.some((club) => club.club_id === club_id);
    console.log(isRegisteredClub);
    console.log(isJoinedClub);
    return (
        <Wrapper key={userData.user_id}>
            <ItemBox>
                {isRegisteredClub && (
                    <JoinClubinfo>
                        내가 가입한 동아리 {userData.registered_clubs.map((i) => (
                            <span key={i.id}>{i.name}</span>
                        ))}
                    </JoinClubinfo>
                )}
                {isJoinedClub && (
                    <JoinClubinfo>
                        내가 가입한 동아리 {userData.joined_clubs.map((i) => (
                            <span key={i.id}>{i.name}</span>
                        ))}
                    </JoinClubinfo>
                )}

            </ItemBox>
            <BtnItemBox>
                <BtnCheckQR onClick={handleQrScan}>
                    <p>출석 QR<br />스캔하기</p>
                </BtnCheckQR>
                {showQrScan && <QrScanPopup data={club_id} data1={qr_id} />}
            </BtnItemBox>
        </Wrapper>
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
