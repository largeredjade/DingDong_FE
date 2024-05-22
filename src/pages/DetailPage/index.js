import PageHeader from "../../components/PageHeader/PageHeader";
import DetailItems from "../../components/DetailPage/DetailItems";
import styled from "styled-components";
import clubData from '../../mockdata/clubDetailpage/club_detail.json';

function DetailPage() {
  const clubDetails = [clubData]
  return (
    <>
      <Wrap>
        <PageHeader />
        <DetailcontentBox>
          <ItemBox>
            <DetailItems clubDetails={clubDetails}/>
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

const ItemBox = styled.div``;
