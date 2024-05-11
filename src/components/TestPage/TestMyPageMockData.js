import styled from "styled-components";

function TestMyPageMockData({data}) {
    return (
        <>
            <Title>마이페이지에서 쓰이는 데이터 테스트</Title>
            {data.map((item)=>(
                <Wrap key={item.user_id}>
                    <p>이름: {item.name}</p>
                    {item.register_clubs.map((i)=>(
                        <p>내가 만든 동아리: {i.name}</p>
                    ))}
                    {item.joined_clubs.map((j)=>(
                        <p>내가 가입한 동아리:{j.name}</p>
                    ))}
                </Wrap>
            ))}
        </>

    );
}

export default TestMyPageMockData;


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
