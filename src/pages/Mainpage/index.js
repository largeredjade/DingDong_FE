import PageHeader from "../../components/PageHeader/PageHeader";
import MainItems from "../../components/MainPage/MainItems";
import styled from "styled-components";

function MainPage() {
    return (
        <> 
            <Wrap>
               <PageHeader/>
               <MaincontentBox>
                <NowBtnBox>
                    <NowBtn>현재 모집중</NowBtn>
                </NowBtnBox>
                <ItemBox>
                    <MainItems/>
                </ItemBox>
               </MaincontentBox>
               
            </Wrap>
        </>

    );
}

export default MainPage;

const Wrap = styled.div`

`;

const MaincontentBox = styled.div`
    display: grid;
    grid-row: 2;
    justify-content: center;
    margin-top: 200px;
`;


const NowBtnBox = styled.div`
    text-align: right;
    justify-content: flex-end;
    margin-bottom: 20px;
`;

const NowBtn = styled.button`
    width: 112px;
    height: 32px;
    background: #FFFFFF;
    border: 1px solid #B7B7B7;
    border-radius: 20px;
`

const ItemBox = styled.div`

`;