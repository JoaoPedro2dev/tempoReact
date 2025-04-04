import "./cidade.css";

function Cidade({ dados, temp, graus }) {
  let city = "";
  let country = "";
  let tempFormat = "";
  let description = "";
  let icon = "";

  if (dados.name) {
    city = dados.name;
    country = dados.sys.country;
    // temp = dados.main.temp;
    tempFormat = temp.toFixed(2).toString().replace(".", ",");
    description = dados.weather[0].description;
    icon = dados.weather[0].icon;
  }

  return (
    city && (
      <div className="cidadeContent">
        <h2>
          {city}, {country}
        </h2>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
          />
          <div>
            <strong>{tempFormat + graus}</strong>
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
  );
}

export default Cidade;
