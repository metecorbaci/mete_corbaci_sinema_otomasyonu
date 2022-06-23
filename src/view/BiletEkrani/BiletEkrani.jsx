import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Koltuk from "../../components/Koltuk/Koltuk";
import { SatinAlma } from "../../components/SatinAlma/SatinAlma";
import { click } from "../../store/cinema";
import { useNavigate } from "react-router-dom";
import "./BiletEkrani.css";

const BiletEkrani = () => {
  let params = useParams(); 
  let navigate = useNavigate();
  let dispatch = useDispatch(); 

  const cinema = useSelector(
    (
      state 
    ) => state.cinema.cinemaData.find((i) => i.id === Number(params.id)) 
  );
  //Seçili koltukları döndüren fonksiyon
  const seciliKoltuklar = cinema.koltuklar.filter((x) => {
    return x.dolu === 1; 
  });

  const onKoltukClick = (koltuk) => {
    dispatch(click({ filmId: Number(params.id), koltuk: koltuk }));
  };

  return (
    <div className="BiletEkran">
      <div>
        <button className="anaekran-button" onClick={() => navigate("/")}></button>
      </div>
      <h1 className="Baslik">Salon Numarası: {params.id}</h1>
      <h1 className="Baslik">Film Adi: {cinema.filmAdi}</h1>
      <h1 className="Baslik">Bilet Ücreti: {cinema.fiyat} TL</h1>
      <h1 className="Baslik">Ödenecek Fiyat: {seciliKoltuklar.length * cinema.fiyat}</h1>
      <div className="Salon-gorunumu">
      <div className="bilet-koltuk">
          {cinema.koltuklar.map((x, index) => {
        
           return (
              <Koltuk
                classname="koltuklar"
                onClick={() => onKoltukClick(x)}
                key={x.id}
                koltuk={x}
              />
           );
         })}
        </div>
      </div>
      
      {seciliKoltuklar.length > 0 ? (
        <div>
          <SatinAlma cinema={cinema} seciliKoltuklar={seciliKoltuklar} />
        </div>
      ) : null}
    </div>
  );
};

export default BiletEkrani;
