import PageHeader from "../../components/PageHeader/PageHeader";
import MyPageItmes from "../../components/MyPage/MyPageItems";
import MyPageClubItems from "../../components/MyPage/MyPageClubItems";
import styled from "styled-components";
function MyPage() {
    return (
        <>  <Wrap>
               <PageHeader/>
                <ItemBox>
                    <MyPageItmes/>
                </ItemBox>
                <MyPageClubItems/>
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