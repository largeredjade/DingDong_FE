import PageHeader from "../../components/PageHeader/PageHeader";
import JoinClubItems from"../../components/MyPageJoinClub/JoinClubItems";
import JoinClubCalendar from"../../components/MyPageJoinClub/Calendar";
import styled from "styled-components";
import JoinClubDetail from '../../mockdata/mypage/joined_club_detail.json';
import manager_user from "../../mockdata/mypage/manager_user.json"
import { useParams } from "react-router-dom";
import axiosInstance from "../../lib/axios";
import {getCookie} from "../../auth/cookie";
import { useEffect, useState} from 'react';

function MyPageJoinClub() {
    return (
        <>
        
            <Wrap>
               <PageHeader/>
                <ItemBox>
                    <JoinClubItems/>
                </ItemBox>
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