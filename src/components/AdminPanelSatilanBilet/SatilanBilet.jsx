import React from "react";
import "./SatilanBilet.css";
const SatilanBilet = (props) => {
  const { user, film, satinAlinanKoltuklar } = props.data;
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: 'long',
  };
  // Admin Panelde bulunan satin alinan bilet kartının verilerinin set edildiği yer.
  return (
    <div className="satilan-bilet">
      <div>
        <h1>
          {film.filmAdi}-{film.tarih.toLocaleDateString("tr-TR", options)}
        </h1>
        <h3>
          Salon: {film.salon}- Fiyat: {film.fiyat} - Seans Saati:{film.seansSaati}
        </h3>
        <h2>
          {user.name} {user.surname}
        </h2>
        <h2>
          {user.btc}
          {user.eposta}
        </h2>
      </div>
      <div>
        {satinAlinanKoltuklar.map((x) => {
          return <h2 key={x.id}>Koltuk No:{x.id}</h2>;
        })}
      </div>
    </div>
  );
};

export default SatilanBilet;
