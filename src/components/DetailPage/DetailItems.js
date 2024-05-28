import styled from "styled-components";
import { useState } from "react";
import LoginPopup from "../Popup/LoginPopup";
import {useDispatch, useSelector} from "react-redux";
import {selectIsPopupShown, showPopup} from "../../redux/loginPopup";
import JoinClubPopup from "../Popup/JoinClubPopup";
import {getCookie} from "../../auth/cookie";
import Loading from "../LoadingSpinner/Loading";

function DetailItems({clubData}) {
  const [showJoinPopup, setShowJoinPopup] = useState(false);
  const dispatch = useDispatch();
  const isShowLoginPopup = useSelector(selectIsPopupShown);

  if (!clubData) {
    return <Loading/>;
  }

  const handlePopup = () => {
    const userStatus = getCookie('access');
    if(userStatus === undefined){
      dispatch(showPopup());
    }else {
      setShowJoinPopup(!showJoinPopup)
    }
  };




  return (
      <>
            <Wrapper>
              <Box key={clubData.club_id}>
                <Date>{clubData.club_open ? "D- "+clubData.remaining_days : "모집 마감"}</Date>
                <LargeInfoBox>
                  <Intro>
                    <ClubPhotoBox>
                      <img src={clubData.club_pic}/>
                    </ClubPhotoBox>
                    <ClubBox>
                      <ClubName>
                        <p>{clubData.club_name}</p>
                      </ClubName>
                      <ClubMem>
                        <Member>부원</Member>
                        <Num>{clubData.member_count}</Num>
                      </ClubMem>
                    </ClubBox>
                  </Intro>
                  <ClubInfo>
                    <ItemBox>
                      <Bold>활동 시간</Bold>
                      <p>{clubData.club_time}</p>
                    </ItemBox>
                    <ItemBox>
                      <Bold>동아리 소개</Bold>
                      <p>{clubData.club_introduction}</p>
                    </ItemBox>
                    <ItemBox>
                      <Bold>활동 내용 </Bold>
                      <p>{clubData.club_details}</p>
                    </ItemBox>
                    <ItemBox>
                      <Bold>연락처</Bold>
                      <p>{clubData.club_contact}</p>
                    </ItemBox>
                  </ClubInfo>
                </LargeInfoBox>
              </Box>

              {clubData.club_open !== false && (
                  <JoinBtnBox>
                    <JoinBtn onClick={handlePopup}>가입하기</JoinBtn>
                    {isShowLoginPopup && <LoginPopup />}
                    {showJoinPopup && <JoinClubPopup/>}
                  </JoinBtnBox>
              )}
            </Wrapper>
      </>
  );
}

export default DetailItems;

const Wrapper = styled.div``;

const Box = styled.div`
  width: 350px;
  //height: 510px;
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
