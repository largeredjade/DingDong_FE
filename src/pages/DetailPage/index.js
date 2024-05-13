import PageHeader from "../../components/PageHeader/PageHeader";
import DetailItems from "../../components/DetailPage/DetailItems";
import styled from "styled-components";

function DetailPage() {
  return (
    <>
      <Wrap>
        <PageHeader />
        <DetailcontentBox>
          <ShowAllBtnBox>
            <ShowAllBtn>전체 보기</ShowAllBtn>
          </ShowAllBtnBox>
          <ItemBox>
            <DetailItems />
          </ItemBox>
        </DetailcontentBox>
      </Wrap>
    </>
  );
}

export default DetailPage;

const Wrap = styled.div`
  display: grid;
  grid-row: 3;
`;

const DetailcontentBox = styled.div`
  display: grid;
  grid-row: 2;
  justify-content: center;
  margin-top: 200px;
`;

const ShowAllBtnBox = styled.div`
  text-align: right;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const ShowAllBtn = styled.button`
  width: 112px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #b7b7b7;
  border-radius: 20px;
`;

const ItemBox = styled.div``;
