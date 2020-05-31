import React from "react";
import BlockHours from "./BlockHours";
import Redline from "./RedLine";
import moment from "moment";

const BlockDays = ({
  dayId,
  showPopup,
  events,
  showEventData,
  dateEvent,
  blink,
}) => {
  const blockDay = [...Array(7).keys()].map((arg) => {
    let idHour = moment()
      .startOf("isoWeek")
      .add(dayId, "day")
      .format("YYYY-MM-DD");
    dayId++;

    const redline =
      idHour === moment().format("YYYY-MM-DD") ? <Redline /> : null;

    return (
      <div key={arg} className="block-day">
        {redline}
        <BlockHours
          hourId={idHour}
          events={events}
          showPopup={showPopup}
          dateEvent={dateEvent}
          showEventData={showEventData}
          blink={blink}
        />
      </div>
    );
  });

  return blockDay;
};

export default BlockDays;
