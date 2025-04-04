import "./App.css";
import { Heading1, Search } from "lucide-react";
import Cidade from "./cidade/Cidade";
import Botoes from "./botoes/Botoes";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");

  const key = "fb37b853ff466458e939d137aaac94c6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt`;

  const [dados, setDados] = useState("");
  const [loading, setLoading] = useState(false);
  const [erroCity, setErroCity] = useState(false);
  const [temp, setTemp] = useState(0);
  const [graus, setGraus] = useState("C°");

  function fetchCity() {
    setErroCity(false);
    setLoading(true);
    setDados([]);

    if (city !== "") {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            console.log(data);

            setErroCity(false);
            setLoading(false);
            setDados(data);
            setTemp(data.main.temp);
            setGraus("C°");
          } else {
            setLoading(false);
            setErroCity("Não encontramos sua cidade");
          }
        })
        .catch((error) => console.log("erro", error));
    } else {
      setLoading(false);
      setErroCity("Digite uma cidade");
    }
  }

  function fahrenheit() {
    const f = temp * 1.8 + 32;

    setTemp(f);
    setGraus("F°");

    console.log(f);
  }

  function celsius() {
    setTemp(dados.main.temp);
    setGraus("C°");
  }

  return (
    <div className="divTeste">
      <div className="searchBox">
        <input
          type="text"
          placeholder="Pesquise uma cidade"
          onChange={(event) => setCity(event.target.value.trim())}
        />
        <button
          onClick={() => {
            fetchCity();
          }}
        >
          <Search />
        </button>
      </div>
      {loading ? <h2>Procurando</h2> : ""}
      {erroCity ? <h2>{erroCity}</h2> : ""}
      {dados.name && <Cidade dados={dados} temp={temp} graus={graus} />}
      {dados.name && <Botoes fahrenheit={fahrenheit} celsius={celsius} />}
    </div>
  );
}

export default App;
