import React from "react";
import Navigation from "./Navigation";
import { DataContextProvider } from "./context/DataContext";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Navigation />
    </div >

  );
}

export default App;
