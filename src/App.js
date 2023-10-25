import "./App.css";
import React from "react";
import ValidateLogin from "./Components/ValidateLogin";
import FormComentarios from "./Components/FormComentarios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ValidateLogin />

        <FormComentarios />
      </header>
    </div>
  );
}

export default App;
