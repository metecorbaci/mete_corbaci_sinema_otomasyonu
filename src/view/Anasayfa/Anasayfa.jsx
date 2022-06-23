import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FilmListItem from "../../components/FilmKarti/FilmKarti";
import { salonlar } from "../../data/SalonVerileri";
import "./Anasayfa.css";

const Anasayfa = () => {
  const cinemaList = useSelector((state) => state.cinema.cinemaData);
  const salonList = useSelector((state) => salonlar);
  let navigate = useNavigate();
  const [selectedSalon, setselectedSalon] = useState(1);


  return (
    <div className="AnaEkran">
      
      <div>
        <button onClick={() => navigate("/admin")}> 
          Admin Panel                                                     
        </button>                            
      </div>

      <select 
        defaultValue={1}
        className="select-input"
        onChange={(e) => setselectedSalon(Number(e.target.value))}
      >
        {salonList.map((salon) => (
              <option value={salon.id}>{salon.salon_adi}</option> //Film adlarını select componentine setliyoruz
            ))}
      </select>

      {
        cinemaList.filter((x) => x.salon === selectedSalon)
        ?.map((cinema ) => { 
            return <FilmListItem key={cinema.id} cinema={cinema} />; //Select ile seçilen seanslara uygun film verilerini döndürür
          })}
      
    </div>
  );
};

export default Anasayfa;
