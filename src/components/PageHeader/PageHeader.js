import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {HeaderLogo} from "../../components/Icons/logos";

function PageHeader() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            <Wrap>
                <LogoBox>
                    <Link to={'/main'}>
                        <HeaderLogo/>
                    </Link>
                </LogoBox>
                <ItemBox>
                    <Link to={'#동아리구경주소'}><p style={{fontWeight: currentPath === '#동아리구경주소' ? 'bold' : 'normal'}}>동아리 구경</p></Link>
                    <Link to={'#동아리등록주소'}><p style={{fontWeight: currentPath === '#동아리등록주소' ? 'bold' : 'normal'}}>동아리 등록</p></Link>
                    <Link to={'#마이페이지주소'}><p style={{fontWeight: currentPath === '#마이페이지주소' ? 'bold' : 'normal'}}>마이페이지</p></Link>
                </ItemBox>
            </Wrap>
            
        </>

    );
}

export default PageHeader;


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    height:180px;
    border-radius: 0px 0px 20px 20px;
    background: ${({theme}) => theme.backgroundColor.mainColor};
    @media (max-width: ${({theme})=> theme.mobile}) {
        border-radius: 0 0 20px 20px;
    }
`


const ItemBox =styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
    p {  
        color: ${({ theme }) => theme.colors.darkGray};
        font-size: 18px;
        margin-left: 25px;
        padding: 15px 0;
        @media (min-width: ${({ theme }) => theme.mobile}) {
            font-size: 16px;
            margin-left: 85px;
    }
`

const LogoBox = styled.div`
    display: flex;
    margin-top: 40px;
`
