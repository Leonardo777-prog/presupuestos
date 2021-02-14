import React, { useState } from "react";
import Pregunta from "./components/Pregunta";

function App() {
  // presupuesto
  const [presupuesto, setPresupuesto] = useState(0);
  // restante
  const [restante, setRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>

      <div className="contenido-principal contenido">
        <Pregunta setPresupuesto={setPresupuesto} setRestante={setRestante} />
      </div>
    </div>
  );
}

export default App;
