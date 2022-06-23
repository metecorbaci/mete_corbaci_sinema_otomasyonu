import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { satinAl } from "../../store/cinema";
import "./SatinAlma.css";

export const SatinAlma = (props) => {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [eposta, setEposta] = useState("");
  const [kredikart, setKredikart] = useState("");


  const { seciliKoltuklar, cinema } = props; 

  let dispatch = useDispatch(); 
  let navigate = useNavigate(); 
  //Satin al butonuna basıldıktan sonra yapılan işlemler
  const satinAlClick = () => {
    // Boş bırakılan alan kontrolü
    if (ad !== "" && soyad !== ""  && eposta !== "") {
      const kullaniciBilgileri = { ad, soyad, eposta };

      dispatch(
        satinAl({
          filmId: cinema.id,
          koltuklar: seciliKoltuklar,
          kullaniciBilgileri: kullaniciBilgileri,
        })
      );

      alert("Satın Alma İşlemi Başarılı!");

      navigate("/"); 
    } else {
      alert("Bos Alan Birakilamaz!");
    }
  };
  //Bilet Seçildikten sonra alt alanda çıkan satın alma için bilgilerin
  //girilmesi gereken alanın setlendiği blok.
  return (
    <div className="SatinAlma">
      <input
        className="inputBox"
        type="text"
        placeholder="isim"
        value={ad}
        onChange={(e) => setAd(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="soyisim"
        value={soyad}
        onChange={(e) => setSoyad(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="eposta"
        inputMode=""
        value={eposta}
        onChange={(e) => setEposta(e.target.value)}
      />
      <input
        className="inputBox"
        type="integer"
        placeholder="Kredi Karti"
        value={kredikart}
        onChange={(e) => setKredikart(e.target.value)}
      />

      <button className="butonAl" onClick={() => satinAlClick()}>
        Satin Al
      </button>
    </div>
  );
};
