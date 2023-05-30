import React from 'react';

interface ReminderComponentProps {
  text: string;
  date: string;
  time?: string;
}

const ReminderComponent: React.FC<ReminderComponentProps> = ({ text, date, time }) => {
  return (
    <div>
      <h3>{text}</h3>
      <p>Date: {date}</p>
      {time && <p>Time: {time}</p>}
    </div>
  );
};

export default ReminderComponent;
