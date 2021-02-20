import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Lista = ({ gastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listados</h2>
      {gastos.map((gasto) => (
        <Gasto gasto={gasto} key={gasto.id} />
      ))}
    </div>
  );
};

Lista.prototype = {
  gastos: PropTypes.array.isRequired,
};

export default Lista;
