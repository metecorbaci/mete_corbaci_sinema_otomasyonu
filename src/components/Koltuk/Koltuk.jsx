import React from "react";
import "./Koltuk.css";
const Koltuk = (props) => {
  const { onClick, koltuk } = props;

  //Koltukların boş/dolu/seçili olma durumlarına göre renkklendirme yapıyoruz
  //Ve Koltukları numaralandırıyoruz
  return (
    <div
      style={{
        backgroundColor:
          koltuk.bos === 1
            ? koltuk.dolu === 1
              ? "#2bfa00"
              : "#d4d4d4"
            : "#ff4d4d",
      }}
      onClick={onClick}
      className="koltuk"
    >
      {koltuk.id} 
    </div>
  );
};

export default Koltuk;

