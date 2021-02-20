import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Lista from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  // presupuesto
  const [presupuesto, setPresupuesto] = useState(0);
  // restante
  const [restante, setRestante] = useState(0);
  // state para carga condicional de componentes
  const [mostartpregunta, setMostartpregunta] = useState(true);

  const [gastos, setGastos] = useState([]);

  const [gasto, setGasto] = useState({});

  const [creargasto, setCreargasto] = useState(false);
  useEffect(() => {
    if (creargasto) {
      setGastos([...gastos, gasto]);
      setRestante(restante - gasto.valor);
    }
    setCreargasto(false);
  }, [gasto, gastos, creargasto, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>

      <div className="contenido-principal contenido">
        {mostartpregunta ? (
          <Pregunta
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setMostartpregunta={setMostartpregunta}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Formulario setGasto={setGasto} setCreargasto={setCreargasto} />
            </div>
            <div className="one-half column">
              <Lista gastos={gastos} />

              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
