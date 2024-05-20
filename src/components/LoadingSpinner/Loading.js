import {PuffLoader} from "react-spinners";
import styled from "styled-components";

function Loading() {
    return (
        <>
            <Wrapper>
                잠시만 기다려 주세요.
                <ItemBox>
                    <PuffLoader
                        color = "#A0D6BB"
                        size={100}
                        speedMultiplier={0.8}
                    />
                </ItemBox>

            </Wrapper>

        </>

    );
}

export default Loading;

const Wrapper = styled.div`
    margin-top: 200px;
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: bold;
    color: ${({theme})=>theme.colors.darkGray};
    text-align: center;
`

const ItemBox = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`