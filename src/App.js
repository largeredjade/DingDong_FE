import {Routes,Route} from "react-router-dom";
import TestPage from "./pages/TestPage";
import HomePage from "./pages/HomePage";
import styled from "styled-components";
import MainPage from "./pages/Mainpage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import MyPage from "./pages/MyPage";
import MyPageJoinClub from "./pages/MyPageJoinClub";
import RegistrationPage from "./pages/RegistrationPage";
import EditClubPage from "./pages/EditClubPage";
import DetailPage from "./pages/DetailPage";

function App() {

  return (
      <Wrapper>
          <Container>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path={`/test/:id`} element={<TestPage/>}/>
                  <Route path={"/main"} element={<MainPage/>}/>
                  <Route path={"/login"} element={<LoginPage/>}/>
                  <Route path={"/join"} element={<JoinPage/>}/>
                  <Route path={"/mypage"} element={<MyPage/>}/>
                  <Route path={"/mypage/joinclub"} element={<MyPageJoinClub/>}/>
                  <Route path={"/registration"} element={<RegistrationPage/>}/>
                  <Route path={"/main/detail"} element={<DetailPage/>}/>
                  <Route path={"/mypage/clubedit"} element={<EditClubPage/>}/>
              </Routes>
          </Container>
      </Wrapper>


  );
}

export default App;

const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F5F5F5;
    
`
const Container = styled.div`
    width: 600px;
    height: 100vh;
    background: ${({theme}) => theme.backgroundColor.white};
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 100vw;
        height: 100vh;
    }
`