import {Routes,Route} from "react-router-dom";
import TestPage from "./pages/TestPage";
import HomePage from "./pages/HomePage";
import styled from "styled-components";
import MainPage from "./pages/Mainpage";

function App() {
  return (
      <Wrapper>
          <Container>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path={"/test"} element={<TestPage/>}/>
                  <Route path={"/main"} element={<MainPage/>}/>
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
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 100vw;
        height: 100vh;
    }
    
    `