import styled from "styled-components";

function TestMockData({data}) {

    return (
        <>
            <Title>allclubs.json 데이터 연결 테스트</Title>
            {data.map((item)=>(
                <Wrap key={item.club_id}>
                    <p>모집 여부: {item.remaining_days}</p>
                    <p>동아리 이름: {item.name}</p>
                    <p>동아리 설명: {item.description}</p>
                </Wrap>
            ))}
        </>

    );
}

export default TestMockData;


const Wrap = styled.div`
    font-size: 20px;
    padding: 10px;
    margin: 10px;
    border: 2px solid cadetblue;
    border-radius: 20px;
    p{
        padding: 10px;
        font-size: 15px;
        
    }
`
const Title  = styled.div`
    font-size: 20px;
    font-weight: bold;
`
