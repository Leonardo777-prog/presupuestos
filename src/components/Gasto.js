import React from "react";
import PropTypes from "prop-types";

const Gasto = ({ gasto }) => {
  return (
    <li className="gastos">
      <p>
        {gasto.nombre}

        <span className="gasto">$ {gasto.valor}</span>
      </p>
    </li>
  );
};

Gasto.prototype = {
  gasto: PropTypes.object.isRequired,
};

export default Gasto;
