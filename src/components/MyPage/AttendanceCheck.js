import Table from 'react-bootstrap/Table';
import styled from "styled-components";
import {useEffect, useState} from "react";

function AttendanceCheck({registered_clubs, joined_clubs}) {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        setCurrentDate(formattedDate);
    }, []);

    return (
        <>
            {registered_clubs[0].scan_dates.length > 0 ?(
                <Wrapper>
                <ItemBox>
                    <CheckDay>{currentDate}  출석 확인</CheckDay>
                    <TableWrapper>
                        <StyledTable striped bordered hover>
                            <thead>
                            <tr>
                                <th>인원</th>
                                <th>학번</th>
                                <th>이름</th>
                                <th>출석</th>
                            </tr>
                            </thead>
                            <tbody>
                            {registered_clubs.map((club) => (
                                <>
                                    {club.scanned_members.map((member, index) => (
                                        <tr key={`scanned-${index}`}>
                                            <td>{index + 1}</td>
                                            <td>{member.student_id}</td>
                                            <td>{member.username}</td>
                                            <td>{member.members_scan_status ? 'O' : 'X'}</td>
                                        </tr>
                                    ))}
                                </>
                            ))}
                            {joined_clubs.map((club)=>(
                                <>
                                    {club.not_scanned_members.map((member, index) => (
                                        <tr key={`not-scanned-${index}`}>
                                            <td>{club.scanned_members.length + index + 1}</td>
                                            <td>{member.student_id}</td>
                                            <td>{member.username}</td>
                                            <td>{member.members_scan_status ? 'O' : 'X'}</td>
                                        </tr>
                                    ))}
                                </>
                            ))}
                            </tbody>
                        </StyledTable>
                    </TableWrapper>
                </ItemBox>
            </Wrapper>
                ):
                (
                    <Wrapper>
                        <ItemBox>
                            <NoAttendenceCheck>{currentDate} 진행한 출석 체크가 없습니다.</NoAttendenceCheck>
                            <TableWrapper>
                                <StyledTable striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>인원</th>
                                        <th>학번</th>
                                        <th>이름</th>
                                        <th>출석</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {joined_clubs.map((club)=>(
                                        <>
                                            {club.not_scanned_members.map((member, index) => (
                                                <tr key={`not-scanned-${index}`}>
                                                    <td>{club.scanned_members.length + index + 1}</td>
                                                    <td>{member.student_id}</td>
                                                    <td>{member.username}</td>
                                                    <td>{member.members_scan_status ? 'O' : 'X'}</td>
                                                </tr>
                                            ))}
                                        </>
                                    ))}
                                    </tbody>
                                </StyledTable>
                            </TableWrapper>
                        </ItemBox>
                    </Wrapper>
                )
            }

        </>

    );
}

export default AttendanceCheck;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    
`;

const NoAttendenceCheck = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    color: ${({theme}) => theme.colors.lightGray};
    margin-bottom: 30px;
`

const ItemBox = styled.div`
`
const CheckDay = styled.div`
    font-weight: bold;
    font-size: 18px;
    color: ${({theme}) => theme.colors.darkGray};
    margin-bottom: 20px;
`

const TableWrapper = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid ${({theme}) => theme.colors.lightGray};
    width: 343px;
    padding: 0;
`;

const StyledTable = styled(Table)`
    width: 100%;
    margin: 0;

    th, td {
        text-align: left;
        font-size: 12px;
        padding: 10px;
        color: ${({theme}) => theme.colors.darkGray};
        
   
    }

    thead {
        tr {
            background: ${({theme}) => theme.backgroundColor.mainColor};
            font-weight: bold;

            th:first-child {
                
                border-top-left-radius: 10px;
            }

            th:last-child {
                border-top-right-radius: 10px;
           
            }
        }
    }

    tbody {
        tr {
            td:first-child {
                border-bottom-left-radius: 10px;
            }

            td:last-child {
                border-bottom-right-radius: 10px;
            }
        }
    }
`;