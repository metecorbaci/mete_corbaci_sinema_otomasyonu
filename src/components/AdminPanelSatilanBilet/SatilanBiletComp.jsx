import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SatilanBilet from "./SatilanBilet";
import { salonlar } from "../../data/SalonVerileri";
import "./SatilanBilet.css";
export const SatilanBiletComp = () => {
  const satinAlinanlar = useSelector((state) => state.cinema.SatilanBiletComp);

  const [selectedSalon, setSelectedSalon] = useState(1);
  const [selectedFilm, setSelectedFilm] = useState();
  const salonList = useSelector((state) => salonlar);

  const getFilms = () => {
    let arr = [];
    satinAlinanlar.forEach((element) => {
      if (arr.indexOf(element.film.filmAdi) === -1) { 
        arr.push(element.film.filmAdi);
      }
    });
    return arr;
  };

  useEffect(() => { 
    setSelectedFilm(getFilms()[0]);
  }, []); 
 
  return (
    <div className="satin-al">
      <select
        className="select-input"
        defaultValue="1" 
        onChange={(e) => setSelectedSalon(e.target.value)} // salonları içeren select componentinde secim gerceklesirse selectedSalon'a akatıryor
      >                                                    
        {salonList.map((salon) => (
              <option value={salon.id}>{salon.salon_adi}</option> //Salonları select componentine setliyoruz
            ))}
      </select>

      <select
        className="select-input"
        defaultValue={selectedFilm}
        onChange={(e) => setSelectedFilm(e.target.value)}
      >
        {getFilms().map((x) => {
          return ( 
            <option key={x} value={x}>
              {x}
            </option>
          );
        })}
      </select>
      
      {satinAlinanlar
        .filter(
          (x) => x.film.salon == selectedSalon && x.film.filmAdi == selectedFilm //Admin panelinde bulunan select componentlerinde seçili
        )                                                                        //olanlara ait satin alınmış bir bilet varsa onu döndürüyor 
        .map((x) => {
          return <SatilanBilet key={x} data={x} />;
        })}
    </div>
  );
};
