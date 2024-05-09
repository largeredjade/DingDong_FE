import styled from "styled-components";
import "./Calendar.css";

function MyPageJoinClubCalendar() {
    return (
        <>
            <Wrapper>
                <ItemBox>
                    <AttendanceInfo>출석현황</AttendanceInfo>
                </ItemBox>
                <div className="calendar">
                            <div className="month"><button className="nextMonth">&lt;</button>03 2024 <button className="nextMonth">&gt;</button></div>
                            <div className="days">
                                <div className="day">Sun</div>
                                <div className="day">Mon</div>
                                <div className="day">Tue</div>
                                <div className="day">Wed</div>
                                <div className="day">Thu</div>
                                <div className="day">Fri</div>
                                <div className="day">Sat</div>
                            </div>
                            <div className="dates">
                                <div className="date"></div>
                                <div className="date"></div>
                                <div className="date"></div>
                                <div className="date"></div>
                                <div className="date"></div>
                                <div className="date">1</div>
                                <div className="date">2</div>
                                <div className="date">3</div>
                                <div className="date">4</div>
                                <div className="date">5</div>
                                <div className="date">6</div>
                                <div className="date">7</div>
                                <div className="date">8</div>
                                <div className="date">9</div>
                                <div className="date">10</div>
                                <div className="date">11</div>
                                <div className="date">12</div>
                                <div className="date">13</div>
                                <div className="date">14</div>
                                <div className="date">15</div>
                                <div className="date">16</div>
                                <div className="date">17</div>
                                <div className="date">18</div>
                                <div className="date">19</div>
                                <div className="date">20</div>
                                <div className="date">21</div>
                                <div className="date">22</div>
                                <div className="date">23</div>
                                <div className="date">24</div>
                                <div className="date">25</div>
                                <div className="date">26</div>
                                <div className="date">27</div>
                                <div className="date">28</div>
                                <div className="date">29</div>
                                <div className="date">30</div>
                                <div className="date">31</div>
                                <div className="date"></div>
                                <div className="date"></div>
                                <div className="date"></div>
                                <div className="date"></div>
                                <div className="date"></div>
                                <div className="date"></div>
                            </div>
                        </div>
                    
            </Wrapper>
            
        </>

    );
}

export default MyPageJoinClubCalendar;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ItemBox = styled.div`
    color: ${({theme})=> theme.colors.darkGray};
`;
const AttendanceInfo = styled.div`
    font-size: 23px;
    
`;
const BtnItemBox = styled.div`
`;