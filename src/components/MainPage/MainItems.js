import { Link } from "react-router-dom/dist";
import styled from "styled-components";

function MainItems() {
    return (
        <>
            <Wrapper to={"/main/detail"}>
                <Box>
                    <Date>D-7</Date>
                    <SmallInfoBox>
                        <ClubPhotoBox><img src=".//MainPage/Clubview.png" /></ClubPhotoBox>
                        <ClubInfoBox>
                            <ClubName>
                                <p>멋쟁이 사자처럼</p>
                            </ClubName>
                            <ClubIntro>
                                <p>비전공자를 위한 웹개발 동아리</p>
                            </ClubIntro>
                        </ClubInfoBox>
                    </SmallInfoBox>
                </Box>
            </Wrapper>
        </>
    );
}

export default MainItems;

const Wrapper = styled(Link)`
    
`;


const Box = styled.div`
    width: 350px;
    height: 175px;
    background: #FFFFFF;
    border: 2px solid #CFE9DC;
    border-radius: 30px;
    margin-bottom: 30px;
   

`;

const Date= styled.div`
    text-align: right;
    justify-content: flex-end;    
    font-weight: bold;
    font-size: 18px;
    color: ${({theme})=>theme.colors.darkMint};
    margin: 20px;
`

const SmallInfoBox = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 13px;
    justify-content: center;
    padding: 0px 5px 20px 10px;
`

const ClubPhotoBox = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 45px;
    margin: -10px;  
    border: 2px solid ${({theme})=>theme.colors.lightGray};
    display: flex;
    justify-content: center;
    img{
        object-fit: cover;
    }
`

// const ClubPhoto = styled.div`
//     width: 91px;
//     height: 91px;
//     border-radius: 45.5px;
// `

const ClubInfoBox = styled.div`
    display: grid;
    grid-column: 3;
`

const ClubName = styled.div`
    margin-top: 10px;
    p{
        font-weight: bold;
        font-size: 20px;
        color: #616161;
    }
    
`

const ClubIntro = styled.div`
    p{
        font-size: 15px;
        color: #616161;
    }
`