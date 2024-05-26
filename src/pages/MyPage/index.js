import PageHeader from "../../components/PageHeader/PageHeader";
import MyPageItemes from "../../components/MyPage/MyPageItems";
import MyPageClubItems from "../../components/MyPage/MyPageClubItems";
import styled from "styled-components";
import manager_user from "../../mockdata/mypage/manager_user.json"
import {getCookie} from "../../auth/cookie";

function MyPage() {
    const user_data = [manager_user];
    const user_id = getCookie('user_id')
    console.log('user_id::',user_id);
    console.log('api 연동 시 사용할 주소::', `https://dingdong7.pythonanywhere.com/mypage/${user_id}`);

    return (
        <>  <Wrap>
               <PageHeader/>
                <ItemBox>
                    <MyPageItemes data={user_data}/>
                </ItemBox>
                <MyPageClubItems data={user_data}/>
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