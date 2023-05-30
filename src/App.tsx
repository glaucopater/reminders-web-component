import { useEffect, useState } from "react";
import "./App.css";
import { CardList } from "./components/CardList";

function App() {
  const [count, setCount] = useState(0);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    logJSONData();
  }, []);

  async function logJSONData() {
    const response = await fetch("/reminders");
    const jsonData = await response.json();
    setCurrentData(jsonData);
  }

  const handleFetchData = () => {
    logJSONData();
  };

  return (
    <>
      <button onClick={handleFetchData}>Load data</button>
      <CardList cards={currentData} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
