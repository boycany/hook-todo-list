const Item = ({ text, date, time, id, deleteData, submittingStatus }) => {
  const deleteItem = () => {
    submittingStatus.current = true;
    deleteData((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className="item">
      <div>
        <p>{text}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem}>移除</button>
    </div>
  );
};

export default Item;
