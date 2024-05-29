import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import moment from "moment";
import JoinClubDetail from '../../mockdata/mypage/joined_club_detail.json';

const CustomCalendar = ({data}) => {
    const today = new Date();
    const [date, setDate] = useState(today);
    const [attendDay, setAttendDay] = useState([]);
    console.log(data)

    useEffect(() => {
        if (data && Array.isArray(data.attendance)) {
            const attendedDates = data.attendance.filter(item => item.status === "Present").map(item => item.date);
            setAttendDay(attendedDates);
        }
    }, [data, setAttendDay]);

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <CalendarWrapper>
            <ItemBox>
                <AttendanceInfo>출석현황</AttendanceInfo>
            </ItemBox>
            <StyledCalendar
                onChange={handleDateChange}
                value={date}
                view="month"
                next2Label={null}
                prev2Label={null}
                calendarType="gregory"
                showNeighboringMonth={false}
                formatDay={(locale, date) => moment(date).format("D")}
                formatYear={(locale, date) => moment(date).format("YYYY")}
                formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
                tileContent={({date}) => {
                    const attendanceList = Array.isArray(data?.attendance) ? data.attendance : [];

                    const attendedDates = attendanceList
                        .filter(item => item.status === "Present")
                        .map(item => moment(item.date).format("YYYY-MM-DD"));
                    const isAttend = attendedDates.includes(moment(date).format("YYYY-MM-DD"));
                    const isAbsent = attendanceList
                        .find(item => moment(item.date).format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD") && item.status === "Absent");

                    if (isAttend) {
                        return (
                            <StyledDotWrapper>
                                <StyledDot />
                            </StyledDotWrapper>
                        );
                    } else if (isAbsent) {
                        return (
                            <StyledDotWrapper>
                                <StyledRedDot />
                            </StyledDotWrapper>
                        );
                    } else {
                        return null; // 아무런 표시 없음
                    }
                }}
            />
        </CalendarWrapper>
    );
};

export default CustomCalendar;

const CalendarWrapper = styled.div`
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

const StyledCalendar = styled(Calendar)`
    max-width: 328px;
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;

    .react-calendar__navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: ${({theme}) => theme.backgroundColor.mainColor};
        span {
            font-size: 15px;
            color: #419F70;
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
        color: #419F70;
        font-size: 12px;
    }
    .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
        color: #FF0000;
    }
    .react-calendar__month-view__weekdays__weekday--weekend abbr[title="토요일"] {
        color: #000AFF;
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
        border: 1px solid ${({theme}) => theme.backgroundColor.mainColor};
        border-radius: 25px;
    }
    .react-calendar__tile--now,
    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
        background: ${({theme}) => theme.backgroundColor.mainColor};
        border-radius: 2px;
    }
`;
const StyledDotWrapper = styled.div`
    position: relative;
`;

const StyledDot = styled.div`
    background-color: #419F70;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    position: absolute;
    top:40%;
    left: 50%;
    transform: translateX(-50%);
`;

const StyledRedDot = styled.div`
    background-color: #FF0000;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    position: absolute;
    top:40%;
    left: 50%;
    transform: translateX(-50%);
`;