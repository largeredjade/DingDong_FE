import PageHeader from "../../components/PageHeader/PageHeader";
import JoinClubItems from"../../components/MyPageJoinClub/JoinClubItems";
import JoinClubCalendar from"../../components/MyPageJoinClub/Calendar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axiosInstance from "../../lib/axios";
import {getCookie} from "../../auth/cookie";
import { useEffect, useState} from 'react';
import Loading from "../../components/LoadingSpinner/Loading";

function MyPageJoinClub() {
    const params = useParams();
    const user_id = getCookie('user_id');
    const accessToken = getCookie('access');
    console.log(params)
    const club_id = params.club_id;
    console.log(params.club_id)

    const [data, setUserData] = useState();

    async function ClubData() {
        try {
            const response = await axiosInstance.get(`mypage/clubs/${club_id}/attendance/${user_id}/`, {
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
    useEffect(() => {
        ClubData();
    }, []);

    return (
        <>

            <Wrap>
                <PageHeader/>
                {
                    data ?
                        <>
                            <ItemBox>
                                <JoinClubItems/>
                            </ItemBox>
                            <JoinClubCalendar data={data} params={params}/>
                        </>
                        :
                        <Loading/>
                }
            </Wrap>
        </>

    );
}

export default MyPageJoinClub;

const Wrap = styled.div`
`;

const ItemBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 225px;
`;