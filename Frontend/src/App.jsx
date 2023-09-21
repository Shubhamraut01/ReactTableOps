import { Users } from "./users";
import "./App.css";
import { useState } from "react";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query) ||
        user.last_name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      <Table data={search(Users)} />
    </div>
  );
}

export default App;
