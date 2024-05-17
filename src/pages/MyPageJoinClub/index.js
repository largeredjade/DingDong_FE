import PageHeader from "../../components/PageHeader/PageHeader";
import JoinClubItems from"../../components/MyPageJoinClub/JoinClubItems";
import JoinClubCalendar from"../../components/MyPageJoinClub/Calendar";
import styled from "styled-components";
import JoinClubDetail from '../../mockdata/mypage/joined_club_detail.json';
import manager_user from "../../mockdata/mypage/manager_user.json"

function MyPageJoinClub() {
    const user_data1 = [manager_user];
    const user_data2 = [JoinClubDetail];
    return (
        <>
        
            <Wrap>
               <PageHeader/>
                <ItemBox>
                    <JoinClubItems data={user_data1}/>
                </ItemBox>
                <JoinClubCalendar data={user_data2}/>
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