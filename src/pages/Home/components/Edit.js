import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ updateData, submittingStatus }) => {
  const [text, setText] = useState("");

  const textChange = (e) => {
    setText(e.target.value);
  };

  const [date, setDate] = useState("");

  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const [time, setTime] = useState("");

  const timeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = () => {
    submittingStatus.current = true;
    updateData((prev) => {
      return [
        {
          id: v4(),
          text,
          date,
          time,
        },
        ...prev,
      ];
    });
  };

  return (
    <div className="edit">
      <h1>備忘錄</h1>
      <label htmlFor="text">事件</label>
      <input id="text" type="text" onChange={textChange} />
      <label htmlFor="date">日期</label>
      <input id="date" type="date" onChange={dateChange} />
      <label htmlFor="time">時間</label>
      <input id="time" type="time" onChange={timeChange} />
      <button onClick={handleSubmit}>送出</button>
    </div>
  );
};

export default Edit;
