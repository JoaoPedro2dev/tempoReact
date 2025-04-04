import { useState } from "react";
import "./botoes.css";

function Botoes({ fahrenheit, celsius }) {
  const [selecionado, setSelecionado] = useState("celsius");

  function selecionar(tipo) {
    setSelecionado(tipo);
  }

  return (
    <div className="botoesBox">
      <button
        className={selecionado === "celsius" ? "selected" : ""}
        onClick={() => {
          celsius();
          selecionar("celsius");
        }}
      >
        C°
      </button>
      <button
        className={selecionado === "fahrenheit" ? "selected" : ""}
        onClick={() => {
          fahrenheit();
          selecionar("fahrenheit");
        }}
      >
        F°
      </button>
    </div>
  );
}

export default Botoes;
