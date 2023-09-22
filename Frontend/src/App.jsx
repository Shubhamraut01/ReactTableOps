import { Users } from "./users";
import "./App.css";
import { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:3000");
      setData(res.data);
    };
    fetchUsers();
  });

  return (
    <div className="app">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />

      {<Table data={data} />}
    </div>
  );
}

export default App;
