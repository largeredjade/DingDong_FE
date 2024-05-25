import { Link } from "react-router-dom/dist";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MainItems({ data }) {
  const params = useParams();
  const [localParams, setLocalParams] = useState(params);
  const navigate = useNavigate();
  const handleParams = (club_id) => {
    setLocalParams((prevParams) => ({
      ...prevParams,
      id: club_id,
    }));
    navigate(`/main/club_id:${club_id}`);
    console.log("params.id:", localParams);
  };
  return (
    <>
      <Wrapper>
        {data.map((item) => (
          <Box key={item.club_id} onClick={() => handleParams(item.club_id)}>
            <Date>{item.remaining_days}</Date>
            <SmallInfoBox>
              <ClubPhotoBox>
                <img src=".//MainPage/Clubview.png" />
              </ClubPhotoBox>
              <ClubInfoBox>
                <ClubName>
                  <p>{item.name}</p>
                </ClubName>
                <ClubIntro>
                  <p>{item.description}</p>
                </ClubIntro>
              </ClubInfoBox>
            </SmallInfoBox>
          </Box>
        ))}
      </Wrapper>
    </>
  );
}

export default MainItems;

const Wrapper = styled.div``;

const Box = styled.div`
  width: 350px;
  height: 175px;
  background: #ffffff;
  border: 2px solid #cfe9dc;
  border-radius: 30px;
  margin-bottom: 30px;
`;

const Date = styled.div`
  text-align: right;
  justify-content: flex-end;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkMint};
  margin: 20px;
`;

const SmallInfoBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 15px;
  justify-content: left;
  margin: 0px 20px 20px 40px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const ClubPhotoBox = styled.div`
  width: 91px;
  height: 91px;
  border-radius: 45px;
  margin: -10px;
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

const ClubInfoBox = styled.div`
  display: grid;
  grid-column: 3;
`;

const ClubName = styled.div`
  p {
    font-weight: bold;
    font-size: 20px;
    color: #616161;
  }
`;

const ClubIntro = styled.div`
  /* display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; */
  p {
    font-size: 15px;
    color: #616161;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 표시할 줄 수 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
`;
