import TestComponent from "../../components/TestPage/TestComponent";
import allclubs from '../../mockdata/mainpage/allclubs.json'
import TestMockData from "../../components/TestPage/TestMockData";
import manager_user from "../../mockdata/mypage/manager_user.json"
import TestMyPageMockData from "../../components/TestPage/TestMyPageMockData";

function TestPage() {
    // json.에서 불러온 데이터 새로운 변수에 저장
    const data = allclubs.clubs;
    console.log(data);
    const user_data = [manager_user];
    console.log(user_data)



    return (
        <>
            <p>MockData TEST</p>
            <TestMockData data={data}/>
            <TestMyPageMockData data={user_data}/>
            <h1>
            테스트페이지입니다.
            </h1>
            <TestComponent />


        </>
    );
}

export default TestPage;


