import styled from "styled-components";
import { useState } from "react";
import LoginPopup from "../Popup/LoginPopup";
import {useDispatch, useSelector} from "react-redux";
import {selectIsPopupShown, showPopup} from "../../redux/loginPopup";
import {getUserInfoFromLocalStorage} from "../../auth/localStorage";
import JoinClubPopup from "../Popup/JoinClubPopup";

function DetailItems() {
  const [showJoinPopup, setShowJoinPopup] = useState(false);
  const dispatch = useDispatch()
  const isShowLoginPopup = useSelector(selectIsPopupShown);


  const handlePopup = () => {
    const userStatus = getUserInfoFromLocalStorage();
    if(userStatus == null){
      dispatch(showPopup());
    }else {
      setShowJoinPopup(!showJoinPopup)
    }
  };





  return (
    <>
      <Wrapper>
        <Box>
          <Date>D-7</Date>
          <LargeInfoBox>
            <Intro>
              <ClubPhotoBox>
                <img src=".//DetailPage/ClubviewDetail.png" />
              </ClubPhotoBox>
              <ClubBox>
                <ClubName>
                  <p>멋쟁이 사자처럼</p>
                </ClubName>
                <ClubMem>
                  <Member>부원</Member>
                  <Num>0</Num>
                </ClubMem>
              </ClubBox>
            </Intro>
            <ClubInfo>
              <ItemBox>
                <Bold>활동 시간</Bold>
                <p>매주 목요일 오후 7시</p>
              </ItemBox>
              <ItemBox>
                <Bold>동아리 소개</Bold>
                <p>
                  비전공자를 위한 웹개발 동아리
                  <br />
                  받고 중앙 연합 동아리까쥐~!
                </p>
              </ItemBox>
              <ItemBox>
                <Bold>활동 내용 </Bold>
                <p>
                  멋사의 꽃 해커톤 나가요...세션하고...
                  <br />
                  프로젝트도 해요..다같이 성장...!
                  <br />
                  미쳐도 같이 미쳐요...!
                  <br />
                  아자아자 화이팅~!~!!~!
                </p>
              </ItemBox>
              <ItemBox>
                <Bold>연락처</Bold>
                <p>010-1234-5678</p>
              </ItemBox>
            </ClubInfo>
          </LargeInfoBox>
        </Box>
        <JoinBtnBox>
          <JoinBtn onClick={handlePopup}>가입하기</JoinBtn>
          {isShowLoginPopup && <LoginPopup/>}
          {!isShowLoginPopup && showJoinPopup && <JoinClubPopup/> }

        </JoinBtnBox>
      </Wrapper>
    </>
  );
}

export default DetailItems;

const Wrapper = styled.div``;

const Box = styled.div`
  width: 350px;
  height: 510px;
  background: #ffffff;
  border: 2px solid #cfe9dc;
  border-radius: 30px;
  margin-bottom: 13px;
  justify-content: center;
`;

const Date = styled.div`
  text-align: right;
  justify-content: flex-end;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkMint};
  margin: 20px 20px 10px 20px;
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 15px;
  justify-content: left;
  padding-left: 20px;
  padding-right: 15px;
`;

const LargeInfoBox = styled.div`
  justify-content: center;
  margin-bottom: 20px;
  padding: 3px;
`;

const ClubPhotoBox = styled.div`
  width: 91px;
  height: 91px;
  border-radius: 45px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: center;
  img {
    object-fit: cover;
  }
`;

// const ClubPhoto = styled.div`
//     width: 91px;
//     height: 91px;
//     border-radius: 45.5px;
// `

const ClubBox = styled.div`
  display: grid;
  grid-column-gap: 10px;
`;

const ClubName = styled.div`
  margin-top: 20px;
  p {
    font-weight: bold;
    font-size: 20px;
    color: #616161;
  }
`;

const ClubMem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 15px;
  justify-content: left;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Member = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const Num = styled.div`
  font-size: 18px;
`;

const ClubInfo = styled.div`
  margin-bottom: 30px;
  padding-left: 10px;
`;

const ItemBox = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 10px 15px 10px 15px;
  p {
    font-size: 18px;
    line-height: 22px; 
  }
  width: 299px;
`;

const Bold = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 6px;
`;

const JoinBtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const JoinBtn = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  width: 220px;
  height: 51px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.mainColor};
`;
