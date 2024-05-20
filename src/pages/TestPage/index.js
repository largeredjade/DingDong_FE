import TestComponent from "../../components/TestPage/TestComponent";
import allclubs from '../../mockdata/mainpage/allclubs.json'
import TestMockData from "../../components/TestPage/TestMockData";
import manager_user from "../../mockdata/mypage/manager_user.json"
import TestMyPageMockData from "../../components/TestPage/TestMyPageMockData";
import TestRedux from "../../components/TestPage/TestRedux";
import TestHandleRedux from "../../components/TestPage/TestHandleRedux";

import TestMyPage from "../../components/TestPage/TestMypage";
import TestMyPageDetail from "../../components/TestPage/TestMypageDetail";
import Loading from "../../components/LoadingSpinner/Loading";

function TestPage() {
    // json.에서 불러온 데이터 새로운 변수에 저장
    const data = allclubs.clubs;
    console.log(data);
    const user_data = [manager_user];
    console.log(user_data)



    return (
        <>
            <Loading/>

        </>
    );
}

export default TestPage;


