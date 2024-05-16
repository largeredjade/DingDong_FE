import PageHeader from "../../components/PageHeader/PageHeader";
import RegistrationItems from "../../components/RegistrationPage/RegistrationItems";
import styled from "styled-components";

function EditRegistrationPage() {
    return (
        <> 
            <Wrap>
               <PageHeader/>
                <ItemBox>
                    <RegistrationItems/>
                </ItemBox>
            </Wrap>
        </>

    );
}

export default EditRegistrationPage;

const Wrap = styled.div`
    height: 100vh;
`;

const ItemBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 225px;
`;
