import PageHeader from "../../components/PageHeader/PageHeader";
import JoinClubItems from"../../components/MyPageJoinClub/JoinClubItems";
import JoinClubCalendar from"../../components/MyPageJoinClub/Calendar";
import styled from "styled-components";
import JoinClubDetail from '../../mockdata/mypage/joined_club_detail.json';
function MyPageJoinClub() {
    const user_data = [JoinClubDetail];
    console.log(user_data)
    return (
        <>
        
            <Wrap>
               <PageHeader/>
                <ItemBox>
                    <JoinClubItems/>
                </ItemBox>
                <JoinClubCalendar data={user_data}/>
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