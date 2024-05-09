import PageHeader from "../../components/PageHeader/PageHeader";
import JoinClubItems from"../../components/MyPageJoinClub/JoinClubItems";
import JoinClubCalendar from"../../components/MyPageJoinClub/JoinClubCalendar";
import styled from "styled-components";

function MyPageJoinClub() {
    return (
        <>  
            <Wrap>
               <PageHeader/>
                <ItemBox>
                    <JoinClubItems/>
                </ItemBox>
                <JoinClubCalendar/>
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