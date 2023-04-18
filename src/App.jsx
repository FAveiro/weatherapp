import React, { useState } from "react";
import "./App.css";

//* Import pages
import ShowData from "./pages/ShowData";
import SearchPage from "./pages/SearchPage";

//* Import context
import { DataContext } from "./contexts/dataContext";

function App() {
  const [data, setData] = useState();

  return (
    <div className="app">
        <DataContext.Provider value={{ data, setData }}>
          {data ? <ShowData /> : <SearchPage />}
        </DataContext.Provider>
    </div>
  );
}

export default App;
