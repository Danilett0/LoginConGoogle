import "./App.css";
import React from "react";
import ValidateLogin from "./Components/ValidateLogin";
import FormComentarios from "./Components/FormComentarios";
import Comentarios from "./Components/Comentarios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Comentarios />

        <div className="FormComents">
          <FormComentarios />
          <ValidateLogin />
        </div>

      </header>
    </div>
  );
}

export default App;
