import styled from "styled-components";
import {Link} from "react-router-dom";
import Loading from "../LoadingSpinner/Loading";

function MainItems({data}) {
    if (!data) {
        return <Loading/>;
    }

  return (
      <>
          {data.map((item,index) => (
              <Link to={`/main/${item.club_id}`}>
                  <Wrapper>
                      <Box key={index}>
                          <Date>
                              {item.club_open ? "D- "+item.remaining_days : "모집 마감"}
                          </Date>
                          <SmallInfoBox>
                              <ClubPhotoBox>
                                  <img src={item.club_pic}/>
                              </ClubPhotoBox>
                              <ClubInfoBox>
                                  <ClubName>
                                      <p>{item.club_name}</p>
                                  </ClubName>
                                  <ClubIntro>
                                      <p>{item.club_introduction}</p>
                                  </ClubIntro>
                              </ClubInfoBox>
                          </SmallInfoBox>
                      </Box>
                  </Wrapper>
              </Link>
              ))}
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
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

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
  p {
    font-size: 15px;
    color: #616161;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
`;
