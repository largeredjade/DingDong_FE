import {useSelector} from "react-redux";
import styled from "styled-components";

function TestRedux() {
    const testUser = useSelector((state) => state.test.value)
    return (
        <Wrap>
            <p>Profile Page</p>
            <p> 학번 : {testUser.student_id} </p>
            <p> 비번 : {testUser.pw} </p>
        </Wrap>
    );
}

export default TestRedux;
const Wrap = styled.div`
    font-size: 20px;
    padding: 10px;
    margin: 10px;
    border: 2px solid cadetblue;
    border-radius: 20px;
    p{
        padding: 10px;
        font-size: 20px;
        
    }
`