import React from "react";

const MS_IN_SEC = 1000;
const MS_IN_MIN = MS_IN_SEC * 60;
const MS_IN_HOUR = MS_IN_MIN * 60;

export const TrackDuration = (props) => {
  const calculateDuration = (ms) => {
    if (ms > MS_IN_HOUR) {
      const hours = Math.floor(ms / MS_IN_HOUR);
      const mins = Math.floor((ms - MS_IN_HOUR * hours) / MS_IN_MIN);
      return `${hours}h ${mins}m`;
    } else {
      const mins = Math.floor(ms / MS_IN_MIN);
      const secs = Math.floor((ms - MS_IN_MIN * mins) / MS_IN_SEC);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
  };

  const duration = calculateDuration(props.duration);
  return (
    <div className="float-right">
      <img src="time.png" alt="duration" />
      {duration}
    </div>
  )
};

export default TrackDuration;