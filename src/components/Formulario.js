import React, { useState } from "react";
import Error from "./Error";
import uuid from "uuid/dist/v4";
import PropTypes from "prop-types";

const Formulario = ({ setGasto, setCreargasto }) => {
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState(0);
  const [error, setError] = useState(false);

  const handleGasto = (e) => {
    e.preventDefault();

    if (valor < 1 || isNaN(valor) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    // construir gasto
    const gasto = {
      nombre,
      valor,
      id: uuid(),
    };

    setGasto(gasto);
    setCreargasto(true);
    // resetear el form

    setNombre("");
    setValor(0);
  };

  return (
    <form onSubmit={handleGasto}>
      <h2>Agrega tus gastos Aqui</h2>

      {error ? <Error mensaje="Error en el Gasto" /> : null}

      <div className="campo">
        <label form="name">Nombre del Gasto</label>
        <input
          type="text"
          placeholder="Ej. Comida"
          id="name"
          className="u-full-width"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label form="gasto">Cantidad del Gasto</label>
        <input
          type="number"
          placeholder="5225"
          id="gasto"
          className="u-full-width"
          value={valor}
          onChange={(e) => setValor(parseInt(e.target.value))}
        />
      </div>

      <input type="submit" className="button-primary" value="Agregar gasto" />
    </form>
  );
};

Formulario.prototype = {
  setGasto: PropTypes.func.isRequired,
  setCreargasto: PropTypes.func.isRequired,
};

export default Formulario;
