import {Link} from "react-router-dom";


function GoToTestBtn() {
    return (
        <>
            <h3>
                홈페이지에 쓰이는 컴포넌트!
            </h3>
            <Link to={'/test'}>
                <button> 테스트 페이지 이동</button>
            </Link>


        </>

    );
}

export default GoToTestBtn;