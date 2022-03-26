import { useEffect, useState, useRef } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import { API_POSTS_LINK } from "../../global/constants";

async function fetchData(setData) {
  const res = await fetch(API_POSTS_LINK);
  const { data } = await res.json();
  setData(data);
}

async function fetchUpdateData(data) {
  await fetch(API_POSTS_LINK, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  const [data, setData] = useState([]);
  let submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current) {
      return;
    } // 避免第一次 render 畫面時 執行這個 useEffect。
    //像是重新整理時，useState 的 data會清空，這樣後端資料就會被更新成 空資料

    // console.log(data);

    fetchUpdateData(data).then((data) => {
      submittingStatus.current = false;
    });
  }, [data]);

  useEffect(() => {
    fetchData(setData); //第一次 render 時，把後端資料撈出來存進 useState 的 data
  }, []);

  return (
    <div className="app">
      <Edit updateData={setData} submittingStatus={submittingStatus} />
      <List
        data={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      />
    </div>
  );
};

export default Home;
