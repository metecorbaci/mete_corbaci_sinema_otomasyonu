import React from "react";
import { useNavigate } from "react-router-dom";
import "./FilmListItem.css";
const FilmListItem = (props) => {
  //Tarih alanının option yıl,ay,gün
  var dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: 'long',
  };
 

  const navigate = useNavigate();

  //Film Seçildiğinde bilet alma ekranına yönlendiriyor
  const biletAl = () => {
    navigate("/bilet/" + id);
  };

  const { id, salon, filmAdi, fiyat, tarih, image, seansSaati } = props.cinema;
  //Film kartının içeriğinin set edildiği blok.
  return (
    <div  onClick={() => biletAl()} className="film-karti-item">
      {/* <h1>id:{id}</h1> */}
      <div className="film-karti-item-row">
        <h1>{filmAdi}</h1>
        <h1>{tarih.toLocaleDateString("tr-TR", dateOptions)}</h1>
        
        <h1>{fiyat} TL</h1>
      </div>
      <div className="film-karti-item-row">
        <h1>Salon no: {salon}</h1>
        <h1><img
            src={image}
            style={{ height: "200px", width: "200px" }}
            /></h1>
      </div>
      <div className="film-karti-item-row">
        <h1>Seans Saati : {seansSaati}</h1>
      </div>
    </div>
    
  );
};

export default FilmListItem;
