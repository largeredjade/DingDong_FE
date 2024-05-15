import PageHeader from "../../components/PageHeader/PageHeader";
import MainItems from "../../components/MainPage/MainItems";
import styled from "styled-components";
import React, { useState } from "react";
import allclubs from "../../mockdata/mainpage/allclubs.json";

function MainPage() {
  const [currentButton, setCurrentButton] = useState(1);

  const handleToggle = () => {
    setCurrentButton((prevButton) => (prevButton === 3 ? 1 : prevButton + 1));
  };

  const data = allclubs.clubs;
  const getFilteredData = () => {
    if (currentButton === 2) {
      return data.filter(club => club.club_open);
    } else if (currentButton === 3) {
      return data.filter(club => !club.club_open);
    }
    return data;
  };
  const filteredData = getFilteredData();
  return (
    <>
      <Wrap>
        <PageHeader />
        <MaincontentBox>
          <NowBtnBox>
            <NowBtn onClick={handleToggle}>
              {currentButton === 1 
                ? "전체 보기"
                : currentButton === 2  && data.some((item) => item.club_open)
                ? "현재 모집중"
                : currentButton === 3 && data.some((item) => !item.club_open)
                ? "모집 마감"
              : "전체 보기"}
            </NowBtn>
          </NowBtnBox>
          <ItemBox>
                <MainItems data={filteredData} />
          </ItemBox>
        </MaincontentBox>
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
