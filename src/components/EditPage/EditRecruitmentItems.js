import styled from "styled-components";
import Calendar from "react-calendar";
import moment from "moment";
import CalendarSVG from "../RegistrationPage/calendar-check-svgrepo-com.svg";

const EditRecruitmentItems = ({
                              isOpen1,
                              isOpen2,
                              date1,
                              date2,
                              recruitmentStatus,
                              handleToggleCalendar1,
                              handleToggleCalendar2,
                              handleDateChange1,
                              handleDateChange2,
                              handleRecruitmentStatusChange
                          }) => {
    return (
        <>
            <ItemBox>
                <RecruitInfo>모집 여부</RecruitInfo>
                <CheckboxWrapper>
                    <input
                        type="checkbox"
                        checked={recruitmentStatus}
                        onChange={handleRecruitmentStatusChange}
                    />
                    <Label>예</Label>
                    <input
                        type="checkbox"
                        checked={!recruitmentStatus}
                        onChange={handleRecruitmentStatusChange}
                    />
                    <Label>아니요</Label>
                </CheckboxWrapper>
            </ItemBox>
            {recruitmentStatus && (
                <>
                    <ItemBox>
                        <RecruitInfo>모집 시작일</RecruitInfo>
                        <CalendarContainer>
                            <DropdownButton onClick={handleToggleCalendar1}>
                                {date1}
                                <ButtonWithImageContainer>
                                    <ImgLocation>
                                        <img
                                            src={CalendarSVG}
                                            alt="calendar"
                                            style={{ width: "auto", height: "26.25px" }}
                                        />
                                    </ImgLocation>
                                </ButtonWithImageContainer>
                            </DropdownButton>
                            <CalendarWrapper isOpen={isOpen1}>
                                <StyledCalendar
                                    onChange={handleDateChange1}
                                    value={new Date(date1)} // moment를 사용하여 Date 객체로 변환
                                    view="month"
                                    next2Label={null}
                                    prev2Label={null}
                                    calendarType="gregory"
                                    showNeighboringMonth={false}
                                    formatDay={(locale, date) => moment(date).format("D")}
                                    formatYear={(locale, date) => moment(date).format("YYYY")}
                                    formatMonthYear={(locale, date) =>
                                        moment(date).format("YYYY. MM")
                                    }
                                />
                            </CalendarWrapper>
                        </CalendarContainer>
                    </ItemBox>
                    <ItemBox>
                        <RecruitInfo>모집 마감일</RecruitInfo>
                        <CalendarContainer>
                            <DropdownButton onClick={handleToggleCalendar2}>
                                {date2}
                                <ButtonWithImageContainer>
                                    <ImgLocation>
                                        <img
                                            src={CalendarSVG}
                                            alt="calendar"
                                            style={{ width: "auto", height: "26.25px" }}
                                        />
                                    </ImgLocation>
                                </ButtonWithImageContainer>
                            </DropdownButton>
                            <CalendarWrapper isOpen={isOpen2}>
                                <StyledCalendar
                                    onChange={handleDateChange2}
                                    value={new Date(date2)} // moment를 사용하여 Date 객체로 변환
                                    view="month"
                                    next2Label={null}
                                    prev2Label={null}
                                    calendarType="gregory"
                                    showNeighboringMonth={false}
                                    formatDay={(locale, date) => moment(date).format("D")}
                                    formatYear={(locale, date) => moment(date).format("YYYY")}
                                    formatMonthYear={(locale, date) =>
                                        moment(date).format("YYYY. MM")
                                    }
                                />
                            </CalendarWrapper>
                        </CalendarContainer>
                    </ItemBox>
                </>
            )}
        </>
    );
};

export default EditRecruitmentItems;

const CalendarContainer = styled.div`
    position: relative;
`;
const CheckboxWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-bottom: 10px;
    padding-top: 5px;
`;
const Label = styled.label`
    font-size: 18px;
    padding: 5px;
    font-weight: bold;
`;
const DropdownButton = styled.button`
    display: flex;
    align-items: start;
    padding: 15px;
    font-size: 15px;
    margin: 10px 10px 20px 10px;
    width: 294px;
    height: 51px;
    border-radius: 20px;
    border: 2px solid #b7b7b7;
    color: #000000;
    outline: none;
    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.mainColorDark};
    }
`;
const ItemBox = styled.div`
    color: ${({ theme }) => theme.colors.darkGray};
`;
const RecruitInfo = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding-left: 10px;
    padding: 10px;
`;
const ButtonWithImageContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ImgLocation = styled.div`
    margin-top: -5px;
    padding-left: 145px;
`;
const CalendarWrapper = styled.div`
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 0;
    display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const StyledCalendar = styled(Calendar)`
    max-width: 328px;
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    background: #ffffff;

    .react-calendar__navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: ${({ theme }) => theme.backgroundColor.mainColor};
        span {
            font-size: 15px;
            color: #419f70;
        }
    }
    .react-calendar__navigation__label {
        flex-grow: 0 !important;
    }
    .react-calendar__month-view__weekdays {
        text-align: center;
        font-size: 12px;
        background: #eee;
        padding: 10px 0px 10px 0px;
    }
    .react-calendar__month-view__weekdays__weekday {
        color: #419f70;
        font-size: 12px;
    }
    .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
        color: #ff0000;
    }
    .react-calendar__month-view__weekdays__weekday--weekend abbr[title="토요일"] {
        color: #000aff;
    }
    .react-calendar__tile {
        text-align: center;
        padding: 15px;
    }
    .react-calendar__tile:enabled:hover {
        background: #eee;
        border-radius: 25px;
    }
    .react-calendar__tile:enabled:focus,
    .react-calendar__tile--active {
        border: 1px solid ${({ theme }) => theme.backgroundColor.mainColor};
        border-radius: 25px;
    }
`;
