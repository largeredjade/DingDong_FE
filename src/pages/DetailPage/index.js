import PageHeader from "../../components/PageHeader/PageHeader";
import DetailItems from "../../components/DetailPage/DetailItems";
import styled from "styled-components";
import {useState, useEffect, use} from "react";
import axios from "axios";
import axiosInstance from "../../lib/axios";
import {useParams} from "react-router-dom";
import {setCookie} from "../../auth/cookie";

function DetailPage() {
  const params = useParams()

  const [clubData, setClubData] = useState(null);

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const response = await axiosInstance.get(`/allclubs/${params.id}/` );
        setClubData(response.data)
        setCookie('qr_code',clubData.qr_code)
        console.log('디테일Data::::',clubData);
        console.log('아이디',clubData.club_id);
        console.log('큐알코드',clubData.qr_code);
      } catch (error) {
        console.error("Failed to fetch club data:", error);
      }
    };
    fetchClubData();
  }, []);



  return (
      <>
        <Wrap>
          <PageHeader />
          <DetailcontentBox>
            <ItemBox>
              <DetailItems clubData={clubData} />
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
