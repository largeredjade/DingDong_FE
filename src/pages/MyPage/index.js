import React, { useEffect, useState, use } from 'react';
import PageHeader from "../../components/PageHeader/PageHeader";
import MyPageItems from "../../components/MyPage/MyPageItems";
import MyPageClubItems from "../../components/MyPage/MyPageClubItems";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axiosInstance from "../../lib/axios";
import manager_user from "../../mockdata/mypage/manager_user.json"
import {getCookie} from "../../auth/cookie";
import AttendanceCheck from "../../components/MyPage/AttendanceCheck";

function MyPage() {
    const params = useParams();
    const user_id = getCookie('user_id');
    const club_id = getCookie('club_id');
    const access_token = getCookie('access');
    const [data, setUserData] = useState();
    const [data1, setClubData] = useState();

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
    async function handleSubmit2() {
        try {
            const response = await axiosInstance.post(`/mypage/${club_id}/`, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });
            console.log(response);
            setClubData(response.data);
        } catch (error) {
            console.error("API call error:", error);
        }
    }

    useEffect(() => {
        handleSubmit();
        handleSubmit2();
    }, []);



    return (
        <>
            <Wrap>
                <PageHeader/>
                <ItemBox>
                    <MyPageItems data={data} data1={data1} params={params} />
                </ItemBox>
                <AttendanceCheck/>
                <MyPageClubItems data={data} params={params}/>
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