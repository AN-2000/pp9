import { useEffect, useState } from "react";
import List from "./List";
import Modal from "./Modal";

function App() {
  let [allData, setAllData] = useState([]);
  let [modalVisible, setModalVisible] = useState(false);
  let [currentFocus, setCurrentFocus] = useState(0);

  useEffect(() => {
    fetch(
      "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json.dataseries);
        setAllData(json.dataseries);
      });
  }, []);

  return (
    <div>
      <Modal
        visible={modalVisible}
        handleVisible={setModalVisible}
        data={allData.length > 0 ? allData[currentFocus] : false}
      />
      <List
        handleFocus={setCurrentFocus}
        handleVisible={setModalVisible}
        data={allData}
      />
    </div>
  );
}

export default App;
