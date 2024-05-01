import styled from "styled-components";
import {Logo} from "../../components/Icons/logos";
import {Link} from "react-router-dom";
import GoToTestBtn from "../../components/HomePage/GoToTestBtn";
function HomePage() {
    return (
        <>
            <GoToTestBtn/>
            <Link to={'/main'}>
                <DomWrap>
                    <ItemWrapper>
                        <Logo/>
                        <p>우리 서비스 슬로건</p>
                    </ItemWrapper>
                </DomWrap>
            </Link>

        </>

    );
}

export default HomePage;
const DomWrap = styled.div`
    margin-top: 55px;
    border-radius: 400px 400px 0 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme.backgroundColor.mainColor};
    @media (max-width: ${({theme})=> theme.mobile}) {
        border-radius: 200px 200px 0 0;
    }
`

const ItemWrapper = styled.div`
    `
