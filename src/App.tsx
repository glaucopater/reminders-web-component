import { useEffect, useState } from "react";
import { CardList } from "./components/CardList";
import { mockData } from "./mocks/handlers";
import { CustomCardProps } from "./components/CustomCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [currentData, setCurrentData] = useState<CustomCardProps[]>(mockData);

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

  console.log("currentData", currentData);

  return (
    <div className="p-2 rounded">
      <button onClick={handleFetchData}>Load data</button>
      <CardList cards={currentData} />
    </div>
  );
}

export default App;
