import {HeaderLogo} from "../../components/Icons/logos";
import JoinItems from "../../components/JoinPage/JoinItems";
import styled from "styled-components";

function JoinPage() {
    return (
        <>
            <DomWrap>
                <ItemWrap>
                    <LogoBox>
                        <HeaderLogo/>
                    </LogoBox>
                    <JoinItems/>
                </ItemWrap>
            </DomWrap>
        </>

    );
}

export default JoinPage;


const DomWrap = styled.div`
    margin-top: 100px;
    border-radius: 400px 400px 0 0;
    height: 100%;
    display: flex;
    justify-content: center;
    background: ${({theme}) => theme.backgroundColor.mainColor};
    @media (max-width: ${({theme})=> theme.mobile}) {
        border-radius: 200px 200px 0 0;
    }
`

const ItemWrap =styled.div`
`

const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`
const ComponentBox =styled.div`
    display: flex;
    justify-content: center;
`