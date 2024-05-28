import TestComponent from "../../components/TestPage/TestComponent";
import allclubs from '../../mockdata/mainpage/allclubs.json';
import TestMockData from "../../components/TestPage/TestMockData";
import manager_user from "../../mockdata/mypage/manager_user.json";
import TestMyPageMockData from "../../components/TestPage/TestMyPageMockData";
import TestRedux from "../../components/TestPage/TestRedux";
import TestHandleRedux from "../../components/TestPage/TestHandleRedux";

import TestMyPage from "../../components/TestPage/TestMypage";
import TestMyPageDetail from "../../components/TestPage/TestMypageDetail";
import Loading from "../../components/LoadingSpinner/Loading";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../auth/cookie";
import axiosInstance from "../../lib/axios";
import { useEffect, useState } from "react";


function TestPage() {
    // json.에서 불러온 데이터 새로운 변수에 저장
    const data = allclubs.clubs;

    console.log(data);
    const user_data = [manager_user];
    console.log(user_data)

    //동적 라우팅
    const params = useParams();
    const user_id = getCookie('user_id')
    const access_token = getCookie('access')


    const user_data = manager_user;
    console.log(user_data);

    // 동적 라우팅
    const params = useParams();
    const user_id = getCookie('user_id');
    const access_token = getCookie('access');
    const [test, setTest] = useState(null);

    async function handleSubmit() {
        try {
            const response = await axiosInstance.get(`/mypage/${user_id}/`, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });
            console.log(response);
            setTest(response.data);
        } catch (error) {
            console.log("error:", error);
        }
    }

    useEffect(() => {
        handleSubmit();
        console.log("Updated test state:", test);
    }, [test]);

    async function handelSubmit() {

            try {
                const response = await axiosInstance.get(  `/mypage/${user_id}/`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`
                    }
                });
                console.log(response);
                return response.data
            } catch (error) {
                console.log("error:", error);
            }

    }


    return (
        <>

            <button onClick={handleSubmit}>데이터 불러오기</button>

            {/*<Loading/>*/}
            <TestMockData data={data} params={params} />
            <div>
                {test && test.registered_clubs && test.registered_clubs.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))}
            </div>
        </>
    );
}

export default TestPage;
