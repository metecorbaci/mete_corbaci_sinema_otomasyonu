import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FilmListItem from "../../components/FilmKarti/FilmListItem";
import { salonlar } from "../../data/SalonVerileri";
import "./Anasayfa.css";

const Anasayfa = () => {
  const cinemaList = useSelector((state) => state.cinema.cinemaData);
  const salonList = useSelector((state) => salonlar);
  let navigate = useNavigate();
  const [selectedSalon, setselectedSalon] = useState(1);


  return (
    <div className="AnaEkran">
      
      <div className="admin-btn-div">
        <button className="admin-btn" onClick={() => navigate("/admin")}>
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
            return <FilmListItem key={cinema.id} cinema={cinema} />; //Select seçile
          })}
      
    </div>
  );
};

export default Anasayfa;
