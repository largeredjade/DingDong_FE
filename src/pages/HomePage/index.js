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
                        <LogoBox>
                            <Logo/>
                        </LogoBox>
                        <Slogan>원하시는 동아리의 초인종을 눌러주세요!</Slogan>
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

const LogoBox =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Slogan = styled.div`
    margin-top: 35px;
    font-size: 20px;
    font-weight: bold;
    color: ${({theme})=> theme.colors.darkGray};

`