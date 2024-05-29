import PageHeader from "../../components/PageHeader/PageHeader";
import MainItems from "../../components/MainPage/MainItems";
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import axiosInstance from "../../lib/axios";
import Loading from "../../components/LoadingSpinner/Loading";
import data from "bootstrap/js/src/dom/data";


function MainPage() {
  const [clubData, setClubData] =  useState(null)
  const buttonStates = ["전체보기", "모집중", "모집마감"];
  const [buttonIndex, setButtonIndex] = useState(0);

  const handleButtonClick = () => {
    setButtonIndex((prevIndex) => (prevIndex + 1) % buttonStates.length);
  };


  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const response = await axiosInstance.get('/allclubs/' );
        setClubData(response.data)
        console.log('response::',response);
        console.log('clubData::::',clubData);
      } catch (error) {
        console.error("Failed to fetch club data:", error);
      }
    };
    fetchClubData();
  }, []);

  const filterData = (data, buttonIndex) => {
    if (buttonIndex === 0) {
      // 전체보기 버튼일 때는 모든 데이터 반환
      return data;
    } else if (buttonIndex === 1) {
      // 모집중 버튼일 때는 club_open이 true인 데이터만 반환
      return data.filter(club => club.club_open === true);
    } else {
      // 모집마감 버튼일 때는 club_open이 false인 데이터만 반환
      return data.filter(club => club.club_open === false);
    }
  };
  
  console.log(`${buttonIndex}버튼 데이터`,filterData(clubData, buttonIndex));


  return (
    <>
      <Wrap>
        <PageHeader />
        {clubData? (
            <MaincontentBox>
              <NowBtnBox>
                <NowBtn onClick={handleButtonClick}>{buttonStates[buttonIndex]}</NowBtn>
              </NowBtnBox>
              <ItemBox>
                <MainItems data={filterData(clubData,buttonIndex)} />
              </ItemBox>
            </MaincontentBox>
        ):(<Loading/>)}

      </Wrap>
    </>
  );
}

export default MainPage;

const Wrap = styled.div``;

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
  background: #ffffff;
  border: 1px solid #b7b7b7;
  border-radius: 20px;
`;

const ItemBox = styled.div``;
