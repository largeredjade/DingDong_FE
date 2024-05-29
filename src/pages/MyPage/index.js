import React, { useEffect, useState } from 'react';
import PageHeader from "../../components/PageHeader/PageHeader";
import MyPageItems from "../../components/MyPage/MyPageItems";
import MyPageClubItems from "../../components/MyPage/MyPageClubItems";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axiosInstance from "../../lib/axios";
import {getCookie} from "../../auth/cookie";
import AttendanceCheck from "../../components/MyPage/AttendanceCheck";
import Loading from "../../components/LoadingSpinner/Loading";

function MyPage() {
    const params = useParams();
    const user_id = getCookie('user_id');
    const access_token = getCookie('access');
    const [data, setUserData] = useState();

    async function handleSubmit() {
        try {
            const response = await axiosInstance.get(`/mypage/${user_id}/`, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });
            console.log(response);
            setUserData(response.data);
        } catch (error) {
            console.error("API call error:", error);
        }
    }


    useEffect(() => {
        const getSubmit = async () => {
            await handleSubmit();
        }
        getSubmit();
    }, []);


    return (
        <>
            <Wrap>
                <PageHeader/>
                {
                    data ?
                        <>
                            <ItemBox>
                                <MyPageItems data={data} params={params} />
                            </ItemBox>
                            {data?.registered_clubs &&(
                                <AttendanceCheck registered_clubs={data.registered_clubs}/>
                            )}
                            <MyPageClubItems data={data} params={params}/>
                        </>
                        :
                        <Loading/>
                }
            </Wrap>
        </>

    );
}

export default MyPage;

const Wrap = styled.div`
`;

const ItemBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 225px;
`;