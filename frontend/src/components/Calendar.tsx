import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  const renderDayCellContent = (args: { date: any; }) => {
    const today = new Date();
    const date = args.date;
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    if (isToday) {
      return (
        <div className="bg-blue-500 rounded-full text-white w-8 h-8 flex justify-center items-center">
          {date.getDate()}
        </div>
      );
    }

    return <div>{date.getDate()}</div>;
  };
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        //events={events}
        dayCellContent={renderDayCellContent}
      />
    </div>
  );
};

export default Calendar;
