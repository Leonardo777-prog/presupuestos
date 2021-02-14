import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante }) => {
  const [monto, setMonto] = useState(0);
  const [error, setError] = useState(false);
  //Funcion para cambiar el state de monto
  const handleMonto = (e) => {
    setMonto(parseInt(e.target.value));
  };

  // definir presupuesto

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // validar

    if (monto < 1 || isNaN(monto)) {
      setError(true);
      return;
    }

    // si se pasa la validacion
    setError(false);
    setPresupuesto(monto);
    setRestante(monto);
  };

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>

      {error ? <Error mensaje="El presupuesto es Incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handleMonto}
        />

        <input
          type="submit"
          value="Agregar"
          className="button-primary u-full-width"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
