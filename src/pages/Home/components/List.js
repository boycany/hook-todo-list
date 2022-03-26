import Item from "./Item";

const List = ({ data, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {data.map((item) => {
        const { text, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            text={text}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
